import React, { Component } from 'react';
import './styles.css';

// COMPONENTS
import Property from 'components/Property';
import DropdownMenu from 'components/DropdownMenu';
import SolveButton from 'components/SolveButton';
import AlgorithmDescription from 'components/AlgorithmDescription';
import ArrayDisplay from './components/ArrayDisplay';

// ALGORITHMS
import {getAlgorithmsDescriptions} from './Algorithms/descriptions';
import {bubble_sort} from './Algorithms/bubble_sort';
import {merge_sort} from './Algorithms/merge_sort';
import {heap_sort} from './Algorithms/heap_sort';

const ALGORITHMS = ['Bubble Sort', 'Merge Sort', 'Heap Sort', 'Quick Sort'];
const ALGORITHMS_IMPLEMENTATIONS = buildImplementations();
const ALGORTIHMS_DESCRIPTIONS = getAlgorithmsDescriptions();

const MIN_ARRAY_SIZE = 7;
const MAX_ARRAY_SIZE = 70;

const initialState = {
    actualAlgorithm : ALGORITHMS[0],
    algorithmMenuOpened : false,
    
    array : [],
    arraySize : 33,
    containerWidth : 0,
    containerHeight : 0,
    dimensionsUpdate : false,

    solution : [],
    solutionIndex : 0,
    showSolution : false
};

class SortingVisualizer extends Component{

    constructor(props){
        super(props);
        this.state = initialState;

        this.updateDimensions = this.updateDimensions.bind(this);
        this.changeAlgorithm = this.changeAlgorithm.bind(this); 
        this.changeAlgorithmMenuState = this.changeAlgorithmMenuState.bind(this);
        this.sort = this.sort.bind(this);
        this.changeArraySize = this.changeArraySize.bind(this);
    }

    updateDimensions(width, height){
        const array = buildArray(width, height, this.state.arraySize);
        this.setState({containerWidth : width, containerHeight :height, dimensionsUpdate : true, array : array});
    }

    changeAlgorithm(newAlgorithm){
        this.setState({ actualAlgorithm : newAlgorithm, algorithmMenuOpened : false });
    }

    changeAlgorithmMenuState(newState){
        this.setState({ algorithmMenuOpened : newState });
    }

    sort(event){
        event.preventDefault();
        console.log('Sorting...');
        const solution = ALGORITHMS_IMPLEMENTATIONS.get(this.state.actualAlgorithm)(this.state.array);
        this.setState({ solution : solution, solutionIndex : 0, showSolution : true, });
    }

    componentDidUpdate(){
        
        if(this.state.showSolution){
            
            setTimeout( () => {
                const {array, solution, solutionIndex} = this.state;
                
                if(solutionIndex >= solution.length){
                    this.setState({ showSolution : false });
                }

                let tempArray = [];
                
                for(let i=0; i < array.length; i++){
                    let step = solution[solutionIndex];
                    
                    if(!step){
                        tempArray = array;
                        break;
                    }

                    if(i === step.from){
                        tempArray[step.from] = {...array[step.to]}; 
                        tempArray[step.to] = {...array[i]};
                    }else{
                        tempArray[i] = {...array[i]};
                    }
                }
                this.setState({ array : tempArray, solutionIndex : solutionIndex + 1 });
            }, 50 );
        }
    }

    changeArraySize(value){
        const {containerWidth, containerHeight} = this.state;
        this.setState({ 
            arraySize : value,
            array : buildArray(containerWidth, containerHeight, value),
            showSolution : false
        });
    }

    render(){

        const actualAlgorithm = this.state.actualAlgorithm;

        const algorithmPropertyProps = {
            actualAlgorithm : actualAlgorithm,
            open : this.state.algorithmMenuOpened,
            setOpen : (state) => this.changeAlgorithmMenuState(state), 
            title : 'Algoritmo : '
        };

        const arrayProps = {
            array : this.state.array,
            dimensionsUpdate : this.state.dimensionsUpdate,
            updateDimensions : (width, height) => {this.updateDimensions(width, height)}
        };

        const arraySize = this.state.arraySize;
        
        return(
            <div>
                <div className="sort-visualizer-properties">
                    <Property {...algorithmPropertyProps}>
                        <DropdownMenu algorithms={ALGORITHMS} elementClicked={(element) => this.changeAlgorithm(element)}/>
                    </Property>

                    <ArraySizeRange value={arraySize} changeSize={(value) => this.changeArraySize(value)}/>

                    <SolveButton onClickListener={(event) => this.sort(event)}>Ordenar</SolveButton>

                </div>

                <AlgorithmDescription algorithms={ALGORTIHMS_DESCRIPTIONS} currentAlgorithm={actualAlgorithm}/>

                <ArrayDisplay {...arrayProps}/>

            </div>
        );
    }
}

function ArraySizeRange(props){
    return(
        <div className="range-container">
            <div className="property-title">
                <span>Tamaño de la Lista: </span>
            </div>
            <input className="range" type="range" min={MIN_ARRAY_SIZE} max={MAX_ARRAY_SIZE} value={props.value} 
                onChange={(event) => props.changeSize(event.target.value)}/>
        </div>
    );
}

function buildArray(containerWidth, containerHeight, arraySize){
    let array = [];

    const averageWidth = Math.round(containerWidth / arraySize);
    const MIN_HEIGHT = 30;
    for(let i=0; i < arraySize; i++){
        let style = {
            width : averageWidth,
            height : MIN_HEIGHT + Math.floor((containerHeight - MIN_HEIGHT) * Math.random()),
        } 
        array.push({value : style.height, style : style})
    }
    return array;
}

function buildImplementations(){
    let implementations = new Map();
    implementations.set(ALGORITHMS[0], bubble_sort);
    implementations.set(ALGORITHMS[1], merge_sort);
    implementations.set(ALGORITHMS[2], heap_sort);
    implementations.set(ALGORITHMS[3], () => {return []});
    return implementations;
}

export default SortingVisualizer;