export function merge_sort(array){
    let steps = [];

    let mappedArray = mapArray(array);
    actualMerge(mappedArray, steps);

    return steps;
}

function mapArray(array){
    let temp = [];

    for(let i = 0; i < array.length; i++){
        temp.push({value : array[i].value, index : i});
    }

    return temp;
}

function actualMerge(array, steps){
    if(array.length === 1){
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = actualMerge(array.slice(0, middle), steps);
    let right = actualMerge(array.slice(middle), steps);

    let result = merge(left, right, steps);
    
    return result;
}

function merge(left, right, steps){

    let minIndex = getMinIndex(left, right);

    let leftIdx = 0;
    let rightIdx = 0;

    let result = [];
    let resultIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length){

        let leftElement = left[leftIdx];
        let rigthElement = right[rightIdx];

        if( leftElement.value < rigthElement.value ){
            addNewStep(steps, leftElement, minIndex + resultIdx, right, left);
            result[resultIdx] = {...leftElement};
            leftIdx++;
        }else{
            addNewStep(steps, rigthElement, minIndex + resultIdx, right, left);
            result[resultIdx] = {...rigthElement};
            rightIdx++;
        }
        resultIdx++;
    }

    while(leftIdx < left.length){
        let leftElement = left[leftIdx];
        addNewStep(steps, leftElement, minIndex + resultIdx, right, left);
        result[resultIdx] = {...leftElement};
        leftIdx++;
        resultIdx++;
    }

    while(rightIdx < right.length){
        let rigthElement = right[rightIdx];
        addNewStep(steps, rigthElement, minIndex + resultIdx, right, left);
        result[resultIdx] = {...rigthElement};
        rightIdx++;
        resultIdx++;
    }

    return result;
}

function getMinIndex(left, right){
    let minIndex = Infinity;

    for(let i=0; i < left.length; i++){
        let temp = left[i];
        if(minIndex > temp.index){
            minIndex = temp.index;
        }
    }

    for(let i=0; i < right.length; i++){
        let temp = right[i];
        if(minIndex > temp.index){
            minIndex = temp.index;
        }
    }

    return minIndex;
}

function addNewStep(steps, changeElement, toIndex, right, left){

    if(changeElement.index !== toIndex){
        for(let i=0; i < left.length; i++){
            let leftElement = left[i];
            if(leftElement.index === toIndex){
                steps.push({from : changeElement.index, to : toIndex});
                leftElement.index = changeElement.index;
                changeElement.index = toIndex;
            }
        }
    }
}