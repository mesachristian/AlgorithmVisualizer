import React, { Component } from 'react';
import './styles.css';

class AlgorithmDescription extends Component{

    render(){

        const {currentAlgorithm, algorithms} = this.props;

        const {title, description, logo, pseudocode, logo_src} = algorithms.get(currentAlgorithm);
                
        return(
            <div className="algorithm-description">
                
                <div className="algorithm-description-title">
                    <h1>{title}</h1>
                </div>

                <div className="algorithm-description-description">
                    {description}
                </div>

                <SubTitle>Animation</SubTitle>

                <div className="algorithm-description-gif">
                    <img alt='' width="500" src={logo} onClick={()=> window.open(logo_src, "_blank")}/>
                </div>

                <SubTitle>Pseudocode</SubTitle>

                <div className="pseudocode-container">
                    <div className="pseudocode">
                    <dl>
                        bubble_sort(arr, size):
                        <dd>for i=0 to n-i-1</dd>
                        <dd><dd>for j=0 to n-i-2</dd></dd>
                        <dd><dd><dd>if arr[j]{'\t>'}arr[j+1]</dd></dd></dd>
					    <dd><dd><dd><dd>Swap arr[j] and arr[j+1]</dd></dd></dd></dd>
                    </dl>
                    </div>
                </div>

                <SubTitle>Visualización</SubTitle>

                <div className="algorithm-description-gif"></div>{/*Removes white space*/}
            </div>
        );
    }
}

function SubTitle(props){
    return <h2 className="description-title">{props.children} :</h2>; 
}

export default AlgorithmDescription;