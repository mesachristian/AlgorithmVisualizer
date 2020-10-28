export function heap_sort(array){

    let numbers = [];
    
    // Build the array only with the values
    for(let i = 0; i < array.length; i++){
        numbers.push(array[i].value);
    }

    let steps = [];

    // Create max-heap
    let lastNonLeafNode = Math.floor(numbers.length / 2) - 1; 
    
    for(let i=lastNonLeafNode; i >= 0; i--){
        heapify(numbers, numbers.length, i, steps);
    }

    // Extract each node and re organize the tree
    for (let i = numbers.length - 1; i > 0; i--){ 

        // Move current root to end
        steps.push({from : i, to : 0}); 
        swap(numbers, 0, i); 
  
        // call max heapify on the reduced heap 
        heapify(numbers, i, 0, steps); 
    }

    return steps;
}

function heapify(array, arraySize, parentNode, steps){
    
    let largest = parentNode;
    let left  = (2 * parentNode) + 1;
    let right = (2 * parentNode) + 2;

    if( left < arraySize && array[left] > array[largest]){
        largest = left;
    }

    if( right < arraySize && array[right] > array[largest]){
        largest = right;
    }

    if(largest !== parentNode){
        
        if(parentNode > largest){ // NOTE : 'from' must be grater than 'to'
            steps.push({from : parentNode, to : largest});
        }else{
            steps.push({from : largest, to : parentNode});
        }

        swap(array, largest, parentNode);
        heapify(array, arraySize, largest, steps); // Verificar que el arbol quede organizado hacia abajo.
    }
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
