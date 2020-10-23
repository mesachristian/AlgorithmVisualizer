import React, { Component } from 'react';
import './styles.css';

class SolveButton extends Component{
    render(){

        const {onClickListener} = this.props;

        return(
            <div className="solve_btn_container">
                <button className="solve_btn" onClick={(event) => onClickListener(event)}>
                    {this.props.children}
                </button>
            </div>
        );
    }
} 

export default SolveButton;