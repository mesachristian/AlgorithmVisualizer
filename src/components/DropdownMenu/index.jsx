import React, { Component } from 'react';
import './styles.css';

export default class DropdownMenu extends Component{

    render(){
        const algorithms = this.props.algorithms;

        return(
            <div className="dropdown">
                {algorithms.map( (algorithm) => {
                    return(
                        <DropdownItem elementClicked={(element) => {this.props.elementClicked(element)}} >{algorithm}</DropdownItem>
                    );
                })}
            </div>
        );
    }
}

function DropdownItem(props){
    return (
        <div className="dropdown-menu-item" onClick={ () => props.elementClicked(props.children) }>
            <span>{props.children}</span>
        </div>
    );
}