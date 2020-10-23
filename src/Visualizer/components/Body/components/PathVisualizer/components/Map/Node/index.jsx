import React, { Component } from 'react';
import './styles.css';

class Node extends Component{

    render(){

        const {
            row,
            col,
            isWall, 
            isStart,
            isEnd,
            onMouseDown,
            onMouseEnter,
            onMouseUp } = this.props;
        
        const nodeType = 
        isWall ? "node-wall" : 
        isStart ? "node-start" : 
        isEnd ? "node-end" : 
        "";

        return(
            <div 
                id={`node-${row}-${col}`}
                className={`node ${nodeType}`}
                onMouseDown = {() => onMouseDown(row,col)}
                onMouseEnter = {() => onMouseEnter(row,col)}
                onMouseUp = {() => onMouseUp(row,col)}
            >
            </div>
        );
    }
}
export default Node;