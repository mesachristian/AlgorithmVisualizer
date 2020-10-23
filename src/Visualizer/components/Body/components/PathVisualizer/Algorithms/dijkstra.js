class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class MinPriorityQueue{
    constructor(){
        this.head = null;
    }

    addWithPriority(value , priority){
        let newNode = new Node(value, priority);

        if(this.head === null){
            this.head = newNode;
        } else {
            if(this.head.priority > priority){
              newNode.next = this.head;
              this.head = newNode;
            } else {
              let ptr = this.head;
              while(ptr.next != null){
                if(ptr.next.priority > priority){
                  break;
                }
                ptr = ptr.next;
              }
              newNode.next = ptr.next;
              ptr.next = newNode; 
            }
        }
    }

    extract_min(){
        let minPriority = this.head;
        this.head = this.head.next;
        return minPriority.value;
    } 

    decreasePriority(node, priority){
        let ptr = this.head;
        while(ptr.next !== null){
            if(ptr.next.value === node){
                ptr.next = ptr.next.next;
            }
            ptr = ptr.next;
            if(ptr === null){
                return;
            }
        }
        this.addWithPriority(node,priority);
    }

    isEmpty(){
        return this.head === null;
    }
}

export function dijkstra(grid, startNode, endNode){

    let minPriorityQueue = new MinPriorityQueue();

    let visitedNodes = [];

    let distances = new Map();
    let previous = new Map();

    distances.set(startNode, 0);

    for(const row of grid){
        for(const node of row){
            if(node !== startNode){
                distances.set(node, Infinity);
                previous.set(node, undefined);
            }
            minPriorityQueue.addWithPriority(node, distances.get(node));
        }
    }

    let endNodeFinded = false;
    let trapped = false;

    while(!minPriorityQueue.isEmpty() && !endNodeFinded){
        let bestVertex = minPriorityQueue.extract_min();
        visitedNodes.push(bestVertex); 
        const neighbors = getNeighbors(bestVertex, grid);
        
        if(bestVertex === endNode){
            endNodeFinded = true;
        }
        
        if(distances.get(bestVertex) === Infinity){
            trapped = true;
            break;
        }

        for(const neighbor of neighbors){
            let alt = distances.get(bestVertex) + 1;
            if(neighbor.isWall){
                continue;
            }
            if(alt < distances.get(neighbor)){
                distances.set(neighbor, alt);
                previous.set(neighbor, bestVertex);
                minPriorityQueue.decreasePriority(neighbor, alt);
            }
        }
    }
    
    let shortestPath = [];

    if(!trapped){
        let tempNode = endNode;
        while(tempNode !== startNode){
            shortestPath.push(tempNode);
            tempNode = previous.get(tempNode);
        }
        shortestPath.push(startNode);
    }

    return {visitedNodes : visitedNodes, shortestPath : shortestPath};
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