import React, { Component } from 'react';
import './styles.css';

class AlgorithmDescription extends Component{

    render(){

        const {currentAlgorithm, algorithms} = this.props;

        const {title, description, logo, logo_src} = algorithms.get(currentAlgorithm);
                
        return(
            <div className="algorithm-description">
                
                <div className="algorithm-description-title">
                    <h1>{title}</h1>
                </div>

                <div className="algorithm-description-description">
                    <p>{description}</p>
                </div>

                <div className="algorithm-description-gif">
                    <img src={logo} onClick={()=> window.open(logo_src, "_blank")}/>
                </div>
            </div>
        );
    }
}

export default AlgorithmDescription;