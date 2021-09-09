import React from 'react';

// GIFS
import Dijkstra_Animation from './resources/Dijkstra_Animation.gif';
import Astar_Animation from './resources/Astar_Animation.gif';

// PSEUDOCODES
import a_star_pseudocode from './resources/a_star_pseudocode.PNG';

const ALGORITHMS = [
    'Dijkstra Algorithm' ,
    'A* Search',
    'Swarm Algoritm',
    'Depth-first Search',
    'Breadth-first Search',
    'Bidirectional Swarm',
    'Convergent Swarm',
    'Greedy Best-first Search'
];

var algorithms = new Map();

algorithms.set(ALGORITHMS[0], {
    title : ALGORITHMS[0],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n' + 
    'For a given source node in the graph, the algorithm finds the shortest path between that node and every'+
    'other.It can also be used for finding the shortest paths from a single node to a single '+
    'destination node by stopping the algorithm once the shortest path to the destination node has been '+
    'determined. For example, if the nodes of the graph represent cities and edge path costs represent driving '+
    'distances between pairs of cities connected by a direct road (for simplicity, ignore red lights, stop signs, '+
    'toll roads and other obstructions), Dijkstra\'s algorithm can be used to find the shortest route between '+
    'one city and all other cities. A widely used application of shortest path algorithm is network routing'+ 
    'protocols, most notably IS-IS (Intermediate System to Intermediate System) and Open Shortest Path First '+
    '(OSPF). It is also employed as a subroutine in other algorithms such as Johnson\'s.',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[1], {
    title : ALGORITHMS[1],
    description : AStartDescription(),
    logo : Astar_Animation,
    pseudocode : a_star_pseudocode,
    logo_src : 'https://en.wikipedia.org/wiki/A*_search_algorithm#Example'
});

algorithms.set(ALGORITHMS[2], {
    title : ALGORITHMS[2],
    description : '',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[3], {
    title : ALGORITHMS[3],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[4], {
    title : ALGORITHMS[4],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[5], {
    title : ALGORITHMS[5],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[6], {
    title : ALGORITHMS[6],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

algorithms.set(ALGORITHMS[7], {
    title : ALGORITHMS[7],
    description : 'Is an algorithm for finding the shortest paths between nodes in a graph,'+
    'which may represent, for example, road networks. It was conceived by computer scientist Edsger W.' +
    'Dijkstra in 1956 and published three years later.\n',
    logo : Dijkstra_Animation,
    pseudocode : null,
    logo_src : 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'
});

export function getAlgorithmsDescriptions(){
    return algorithms;
}

function AStartDescription(props){
    return (
        <div>
            <p>
            A* search es un algoritmo de busqueda el cual esta formulado en terminos de grafos con peso.
            Desde un nodo conocido como el inicial intenta encontrar el camino mas corto (con el menor
            costo en peso ). Este algoritmo es una version mejorada el algoritmo de Dijkstra ya que este
            implementa una función conocida como h(n) esta función de heuristica permite establecer un
            modo cuantitativo para medir la distancia entre el nodo final y un nodo n.
            </p>
            <p>Para implementar esta función se usan normalmente 3 metodos:</p>
            <ol>
                <AStarHeuristicMethod 
                    title="Distancia Manhattan"
                    description="Consiste en encontrar la suma del valor absoluto de la diferencia de la 
                    coordenanda 'x' y 'y' del nodo con respecto al nodo final."
                    formula="abs(current_node.x - final_node.x) + abs(current_node.y - final_node.y)"
                    uses="Cuando solo se permite moverse en dirección derecha, izquierda, arriba y abajo."
                />

                <AStarHeuristicMethod 
                    title="Distancia diagonal"
                    description="Descripcion: Es encontrar el maximo entre el valor absoluto de las diferencias entre las
                    coordenadas 'x' y 'y' del nodo y el nodo final."
                    formula="max(abs(current_node.x - final_node.x) , abs(current_node.y - final_node.y))"
                    uses="Cuando se puede mover unicamente en 8 direcciones (como el rey en un tablero de ajedrez)."
                />

                <AStarHeuristicMethod 
                    title="Distancia euclidiana"
                    description="Como su nombre lo indica usa la distancia minima entre el nodo actual y el nodo 
                    de llegada."
                    formula="sqrt ( (current_cell.x – goal.x)2 + (current_cell.y – goal.y)2 )"
                    uses="Cuando se puede mover en cualquier dirección."
                />
            </ol>
        </div>
    );
}

function AStarHeuristicMethod(props){
    return(
        <li>
            <h4>{props.title} :</h4>
            
            <ul>
                <li>
                    <p>Descripcion: {props.description}</p>
                </li>

                <li>
                    <p>Formula: {props.formula}</p>
                </li>

                <li>
                    <p>Usos: {props.uses}</p>
                </li>
            </ul>
        </li>
    );
}