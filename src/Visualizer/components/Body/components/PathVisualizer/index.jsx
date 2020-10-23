import React, { Component, useState } from 'react';
import './styles.css';

// COMPONENTS
import Map from './components/Map';

import Property from 'components/Property';
import DropdownMenu from 'components/DropdownMenu';
import SolveButton from 'components/SolveButton';
import AlgorithmDescription from 'components/AlgorithmDescription';

// ALGORITHMS
import {dijkstra} from './Algorithms/dijkstra';
import {getAlgorithmsDescriptions} from './Algorithms/descriptions';

const MAP_ROWS = 15;
const MAP_COLS = 50;
const START_ROW = Math.round(MAP_ROWS/2);
const START_COL = Math.round(MAP_COLS/3);
const END_ROW = Math.round(MAP_ROWS/2);
const END_COL = Math.round((MAP_COLS/3)) * 2;

const ALGORITHMS = [
    'Dijkstra Algorithm' ,
    'A* Search',
    'Swarm Algoritm',
    'Depth-first Search',
    'Breadth-first Search',
    'Bidirectional Swarm',
    'Convergent Swarm',
    'Greedy Best-first Search'
];

const MAZES = [
    'None' ,
    'Basic Random Maze',
    'Recursive Division',
    'Recursive Division(vertical)',
    'Recursive Division(horizontal)',
    'Basic Rnadom Maze',
    'Simple Stair Pattern'
];

const initialState = {
    nodes : buildCells(),
    nodeClicked : false,
    startNodeClicked : false,
    endNodeClicked : false,
    nodeWasWall : false,
    lastPosition : {row : 0, col : 0},

    actualAlgorithm : ALGORITHMS[0],
    actualMaze : MAZES[0],
    algorithmMenuOpened : false,
    mazeMenuOpened : false
};

const ALGORTIHMS_DESCRIPTIONS = getAlgorithmsDescriptions();

class PathVisualizer extends Component{

    constructor(props){
        super(props);

        this.state = initialState;

        this.reset = this.reset.bind(this);

        this.onMouseDownListener = this.onMouseDownListener.bind(this);
        this.onMouseEnterListener = this.onMouseEnterListener.bind(this);
        this.onMouseUpListener = this.onMouseUpListener.bind(this);
        this.solveMaze = this.solveMaze.bind(this);

        this.changeAlgorithm = this.changeAlgorithm.bind(this); 
        this.changeAlgorithmMenuState = this.changeAlgorithmMenuState.bind(this);
        this.changeMazesMenuState = this.changeMazesMenuState.bind(this);
        this.drawMaze = this.drawMaze.bind(this);

        this.animateShrotestPath = this.animateShrotestPath.bind(this);
    }

    reset(event){
        event.preventDefault();
        this.takeoutAnimationColors();
        this.setState({
            nodes : buildCells(),
            nodeClicked : false,
            startNodeClicked : false,
            endNodeClicked : false,
            nodeWasWall : false,
            lastPosition : {row : 0, col : 0},
        
            actualAlgorithm : ALGORITHMS[0],
            actualMaze : MAZES[0],
            algorithmMenuOpened : false,
            mazeMenuOpened : false
        });
    }

    takeoutAnimationColors(){
        for(const row of this.state.nodes){
            for(const node of row){
                if(node.isStart){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-start';
                }
                else if(node.isEnd){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-end';
                }
                else if(node.isWall){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-wall';
                }
                else {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node';
                }
            }
        }
    }

    /*************************************** MAP METHODS ***************************************/
    onMouseDownListener(row, col){

        let nodes = this.state.nodes;
        let node = nodes[row][col];

        if(!node.isStart && !node.isEnd){
            node.isWall = !node.isWall;
            nodes[row][col] = node;

            this.setState({nodes : nodes, nodeClicked : true});
        }else{
            let startNodeClicked = node.isStart ? true : false;
            let endNodeClicked = node.isEnd ? true : false;

            this.setState({ 
                startNodeClicked : startNodeClicked,
                endNodeClicked : endNodeClicked, 
                lastPosition : {row : row, col : col}
            });
        }
    }

    onMouseEnterListener(row, col){
    
        let nodeClicked = this.state.nodeClicked;
        let nodes = this.state.nodes;
        let node = nodes[row][col];
        
        if(!node.isStart && !node.isEnd && nodeClicked){
            node.isWall = !node.isWall;
            this.setState({nodes : nodes});  
        }

        let startNodeClicked = this.state.startNodeClicked;
        let endNodeClicked = this.state.endNodeClicked;
        if(startNodeClicked || endNodeClicked){
            let lastPosition = this.state.lastPosition;
            let nodeWasWall = node.isWall;

            if(node.isStart || node.isEnd){
                return;
            }

            nodes[lastPosition.row][lastPosition.col].isStart = false;
            nodes[lastPosition.row][lastPosition.col].isEnd = false;

            nodes[lastPosition.row][lastPosition.col].isWall = this.state.nodeWasWall;
            node.isStart = startNodeClicked ? true : false;
            node.isEnd = endNodeClicked ? true : false;
            node.isWall = false;
            nodes[row][col] = node;
            lastPosition = {row : row, col : col};
            
            this.setState({nodes : nodes, lastPosition : lastPosition, nodeWasWall : nodeWasWall});
        }
    }

    onMouseUpListener(){
        this.setState({nodeClicked : false, startNodeClicked : false, endNodeClicked : false, nodeWasWall : false});
    }

    solveMaze(event){
        event.preventDefault();
        this.takeoutAnimationColors();
        let nodes = this.state.nodes;
        let startNode = null;
        let endNode = null;
        
        for(const row of nodes){
            for(const node of row){
                if(node.isStart){
                    startNode = node;
                }
                if(node.isEnd){
                    endNode = node;
                }
            }
        }

        const {visitedNodes, shortestPath} = dijkstra(nodes, startNode, endNode);

        for(let i=0; i < visitedNodes.length; i++){

            if (i === visitedNodes.length - 1) {
                setTimeout(() => {
                    this.animateShrotestPath(shortestPath);
                }, 5 * i);
                return;
            }

            setTimeout(() => {
                let node = visitedNodes[i];
                if(node.isStart){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-start node-visited';
                }
                else if(node.isEnd){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-end node-visited';
                }else {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
                }
            }, 5 * i);
        }
    }

    animateShrotestPath(shortestPath){
        const reversed = shortestPath.reverse();
        for(let j=0; j < reversed.length; j++){
            setTimeout(() => {
                let node = reversed[j];
                if(node.isStart){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-start node-s-path';
                }
                else if(node.isEnd){
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-end node-s-path';
                }else {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-s-path';
                }
            }, 50 * j);
        }
    }

    /*************************************** MENU METHODS ***************************************/
    changeAlgorithm(newAlgorithm){
        this.setState({ actualAlgorithm : newAlgorithm, algorithmMenuOpened : false });
    }

    changeAlgorithmMenuState(newState){
        this.setState({ algorithmMenuOpened : newState });
    }

    changeMazesMenuState(newState){
        this.setState({ mazeMenuOpened : newState });
    }

    drawMaze(strategy){
        this.setState({ actualMaze : strategy, mazeMenuOpened : false });
    }

    componentDidMount(){
        console.log(ALGORTIHMS_DESCRIPTIONS.get(this.state.actualAlgorithm));
    }

    render(){

        const algorithmPropertyProps = {
            actualAlgorithm : this.state.actualAlgorithm,
            open : this.state.algorithmMenuOpened,
            setOpen : (state) => this.changeAlgorithmMenuState(state), 
            title : 'Algoritmo : '
        };

        const mazePropertyProps = {
            actualAlgorithm : this.state.actualMaze,
            open : this.state.mazeMenuOpened,
            setOpen : (state) => this.changeMazesMenuState(state), 
            title : 'Laberinto : '
        };
        
        const actualAlgorithm = this.state.actualAlgorithm;

        const nodes = this.state.nodes;

        return(
            <div>
                <div className="path-visualizer-properties">
                    <Property {...algorithmPropertyProps}>
                        <DropdownMenu algorithms={ALGORITHMS} elementClicked={(element) => this.changeAlgorithm(element)}/>
                    </Property>

                    <Property {...mazePropertyProps}>
                        <DropdownMenu algorithms={MAZES} elementClicked={(element) => this.drawMaze(element)}/>
                    </Property>

                    <SolveButton onClickListener={(event) => this.reset(event)}>Reiniciar</SolveButton>

                    <SolveButton onClickListener={(event) => this.solveMaze(event)}>Solucionar</SolveButton>
                </div>

                <AlgorithmDescription algorithms={ALGORTIHMS_DESCRIPTIONS} currentAlgorithm={actualAlgorithm}/>
                
                <Map 
                    nodes = {nodes}
                    onMouseDownListener = {(row,col) => this.onMouseDownListener(row,col)}
                    onMouseEnterListener = {(row,col) => this.onMouseEnterListener(row,col)}
                    onMouseUpListener = {() => this.onMouseUpListener()}
                />
            </div>
        );
    }
}

function buildCells(){
    let cells = [];
    for(let i=0; i < MAP_ROWS; i++){
        let row = []
        for(let j=0; j < MAP_COLS; j++){
            row.push(createNode(i, j));
        }
        cells.push(row);
    }
    return cells;
}

function createNode(row, col) {
    let isStart = row === START_ROW && col === START_COL ? true : false;
    let isEnd = row === END_ROW && col === END_COL ? true : false;
    return {
      row,
      col,
      isWall: false,
      isStart: isStart,
      isEnd : isEnd
    };
}

export default PathVisualizer;