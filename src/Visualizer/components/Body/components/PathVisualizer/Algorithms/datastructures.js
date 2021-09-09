class Node{
    constructor(value, score){
        this.value = value;
        this.score = score;
    }
}

export default class MinHeap{
    constructor(){
        this.heap = [];
    }

    getHeapLenght(){
        return this.heap.length;
    }

    insertNode(node, score){
        
        this.heap.push(new Node(node, score));

        let lastNonLeafNode = this.getLastNonLeafNodeIndex();
        for(let i=lastNonLeafNode; i >= 0; i--){
            this.heapify(i);
        }

    }

    extractMin(){
        let minScoreItem = this.heap.shift();
        let lastNonLeafNode = this.getLastNonLeafNodeIndex();
        for(let i=lastNonLeafNode; i >= 0; i--){
            this.heapify(i);
        }
        return minScoreItem.value;
    }

    getLastNonLeafNodeIndex(){
        return Math.floor(this.heap.length / 2) - 1;
    }

    heapify(parentNode){
        let largest = parentNode;
        let left  = (2 * parentNode) + 1;
        let right = (2 * parentNode) + 2;

        if( left < this.heap.length && this.heap[left].score < this.heap[largest].score ){
            largest = left;
        }
    
        if( right < this.heap.length && this.heap[right].score < this.heap[largest].score ){
            largest = right;
        }

        if(largest != parentNode){
            this.swap(largest, parentNode);
            this.heapify(largest);
        }
    }

    swap(i, j){
        let temp = {...this.heap[i]};
        this.heap[i] = {...this.heap[j]};
        this.heap[j] = temp;
    }

    hasElement(node){
        for(let i=0; i < this.getHeapLenght(); i++){
            if({...this.heap[i].value} === {...node}){
                return true;
            }
        }
        return false; 
    }

    print(){

    }
}
