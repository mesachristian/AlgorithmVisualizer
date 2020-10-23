import React from 'react';
import { Component } from 'react';

import './styles.css';

export default class Property extends Component{
    
    render(){
        
        const {actualAlgorithm, open, setOpen, title} = this.props;

        return(
            <div className="property">
                <div className="property-title">
                    <span>{title}</span>
                </div>
        
                <div className="property-dropdown">
                    <div className="dropdown-item" onClick={() => setOpen(!open)}>
                    <span>{actualAlgorithm}</span>
                    <i className="fa fa-fw fa-caret-down" width="45" height="45"></i>
                    </div>
        
                    {open && this.props.children}
                </div>
            </div>
        );
    }
}
