import MinHeap from './datastructures';

export function a_star(grid, startNode, endNode){
    var visitedNodes = [];
    var shortestPath = [];

    let openSet = new MinHeap();
    openSet.insertNode(startNode, h(startNode, endNode));

    let cameFrom = new Map();

    let gScore = new Map();

    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] == startNode){
                gScore.set(grid[i][j], 0);
            }else{
                gScore.set(grid[i][j], Infinity);
            }
        }
    }

    console.log(gScore);

    while( openSet.getHeapLenght() > 0 ){
        let currentNode = openSet.extractMin();
        
        console.log(currentNode);

        if(currentNode == endNode){
            buildShortestPath(startNode, endNode, cameFrom, shortestPath);
            return {
                visitedNodes : visitedNodes, 
                shortestPath : shortestPath
            }; 
        }

        visitedNodes.push(currentNode);

        for(const neighbor of getNeighbors(currentNode, grid)){
            
            if(neighbor.isWall){
                continue;
            }

            let tentativeGScore = gScore.get(currentNode) + 1;
            let key = grid[neighbor.row][neighbor.col]; 
            if(tentativeGScore < gScore.get(neighbor)){
                gScore.set(neighbor, tentativeGScore);
                cameFrom.set(neighbor, currentNode);
                if(!openSet.hasElement(neighbor)){
                    openSet.insertNode(neighbor, tentativeGScore + h(neighbor, endNode));
                }
            }
        }  

    }
    return {visitedNodes : visitedNodes, shortestPath : shortestPath};
}

function h(node, endNode){
    //return Math.sqrt( Math.pow(Math.abs(node.row - endNode.row),2) + Math.pow(Math.abs(node.col - endNode.col),2) );
    return Math.abs(node.row - endNode.row)+ Math.abs(node.col - endNode.col); 
}

function getNeighbors(node, grid){
    let neighbors = [];
    const {row,col} = node; 

    if(row > 0){
        neighbors.push(grid[row - 1][col]);
    }
    if(row < grid.length - 1){
        neighbors.push(grid[row + 1][col]);
    }
    if(col > 0){
        neighbors.push(grid[row][col - 1]);
    }
    if(col < grid[0].length - 1){
        neighbors.push(grid[row][col + 1]);
    }

    return neighbors;
}

function buildShortestPath(startNode, endNode, cameFrom, shortestPath){
    let tempNode = endNode;
    while(tempNode !== startNode){
        shortestPath.push(tempNode);
        tempNode = cameFrom.get(tempNode);
    }
    shortestPath.push(startNode);
}