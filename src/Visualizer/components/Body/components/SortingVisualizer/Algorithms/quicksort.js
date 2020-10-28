export function quicksort(array){

    // Build an array with only the numeric values
    let numbers = [];
    
    for(let i = 0; i < array.length; i++){
        numbers.push(array[i].value);
    }

    let steps = [];

    actualQuickSort(numbers, 0, numbers.length - 1, steps);

    return steps;

}

function actualQuickSort(array, low, high, steps){

    if(low < high){

        let partitioningIndex = partition(array, low, high, steps);

        actualQuickSort(array, low, partitioningIndex - 1, steps);
        actualQuickSort(array, partitioningIndex + 1, high, steps);
    }

}

function partition(array, low, high, steps){
    // Make the partition at the last element
    let pivot = array[high];
    let smallerElementIndex = low - 1;
    
    for(let j=low; j < high; j++){
        if( array[j] < pivot ){
            smallerElementIndex++;
            if(j !== smallerElementIndex){
                steps.push({from: j, to : smallerElementIndex}); 
            }
            swap(array, j, smallerElementIndex);            
        }
    }

    steps.push({from: high, to : smallerElementIndex + 1});
    swap(array, smallerElementIndex + 1, high);
    return smallerElementIndex + 1;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
