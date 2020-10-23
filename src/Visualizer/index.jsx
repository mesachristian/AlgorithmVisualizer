import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Body from './components/Body';

class Visualizer extends Component{

    render(){
        const navbarProps = {
            appName : 'Visualizador de algoritmos',
            items : buildNavbarItems()
        };

        return(
            <div id="visualizer">
                <Router>
                    <Navbar {...navbarProps}/>
                    <Body/>
                </Router>
            </div>
        );
    }
}

function buildNavbarItems(){

    let items = [];
    let element_1 = { name : 'Buscador de caminos' , iconName : '', hasIcon : false, isSelected : false, url: "/path-finder" };
    let element_2 = { name : 'Ordenador de listas' , iconName : '', hasIcon : false, isSelected : false, url: "/sort-list" };
  
    items.push(element_1);
    items.push(element_2);
    
    return items;
}

export default Visualizer;

/*
import React, { Component } from 'react';
import './styles.css';

class Visualizer extends Component{

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Visualizer;
*/
