import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// STYLES
import './styles.css';

// COMPONENTS
import PathVisualizer from './components/PathVisualizer';
import SortingVisualizer from './components/SortingVisualizer';
import Home from './components/Home';

class Body extends Component{

    render(){
        return(
            <div className="body">
                <Switch>
                    <Route path="/sort-list">
                        <SortingVisualizer/>
                    </Route>
                    
                    <Route path="/path-finder">
                        <PathVisualizer/>
                    </Route>

                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Body;