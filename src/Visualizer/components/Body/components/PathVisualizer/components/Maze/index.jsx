import React, { Component } from 'react';
import './styles.css';

// COMPONENTS
import Node from './Node';

class Maze extends Component{

    render(){

        const {nodes, onMouseDownListener, onMouseEnterListener, onMouseUpListener} = this.props;

        return(
            <div className="map-container">
                <table>
                    {nodes.map((row, rowIdx) => {
                        return(
                            <tr key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    return(
                                        <td key={nodeIdx}>
                                            <Node 
                                                {...node}
                                                onMouseDown = {(row,col) => onMouseDownListener(row,col)}
                                                onMouseEnter = {(row,col) => onMouseEnterListener(row,col)}
                                                onMouseUp = {() => onMouseUpListener()}
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </table>

            </div>
        );
    }
}

export default Maze;