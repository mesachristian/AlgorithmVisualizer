import React, { Component } from 'react';
import './styles.css';

class ArrayDisplay extends Component{

    componentDidMount(){
        if(!this.props.dimensionsUpdate){
            const height = document.getElementById("array-container").offsetHeight;
            const width = document.getElementById("array-container").offsetWidth;
            this.props.updateDimensions(width, height);
        }
    }

    render(){

        const array = this.props.array;

        return(
            <div className="array-display">
                <div id="array-container" className="array-container">
                    {array.map( (element) => {
                        return(
                            <div style={element.style} className="array-element"></div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ArrayDisplay;