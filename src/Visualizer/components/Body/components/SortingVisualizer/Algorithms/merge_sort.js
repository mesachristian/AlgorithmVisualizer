export function merge_sort(array){
    let steps = [];

    /*let numbers = [
        {value : 6, index : 0},
        {value : 5, index : 1},
        {value : 3, index : 2},
        {value : 1, index : 3},
        {value : 8, index : 4},
        {value : 7, index : 5},
        {value : 2, index : 6},
        {value : 4, index : 7}
    ];*/

    let numbers = [6,5,3,1,8,7,2,4];

    actualMerge(numbers);

    console.log(steps);

    return [];
}

function actualMerge(array){
    if(array.length == 1){
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = actualMerge(array.slice(0, middle));
    let right = actualMerge(array.slice(middle));

    console.log(left, right);
    //let steps = merge(left, right);

    //console.log(steps);
}

function merge(left, right){

    let steps = [];

    // Get min index
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

    // Merge
    let leftIdx = 0;
    let rightIdx = 0;

    let result = [];
    let resultIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length){

        let leftElement = left[leftIdx];
        let rigthElement = right[rightIdx];

        if( leftElement.value < rigthElement.value ){
            steps.push({from : leftElement.index, to : minIndex + resultIdx});
            leftElement.index = minIndex + resultIdx;
            result[resultIdx] = {...leftElement};
            leftIdx++;
        }else{
            steps.push({from : rigthElement.index, to : minIndex + resultIdx});
            rigthElement.index = minIndex + resultIdx;
            result[resultIdx] = {...rigthElement};
            rightIdx++;
        }
        resultIdx++;
    }

    while(leftIdx < left.length){
        let leftElement = left[leftIdx];
        steps.push({from : leftElement.index, to : minIndex + resultIdx});
        leftElement.index = minIndex + resultIdx;
        result[resultIdx] = {...leftElement};
        leftIdx++;
        resultIdx++;
    }

    while(rightIdx < right.length){
        let rigthElement = right[rightIdx];
        steps.push({from : rigthElement.index, to : minIndex + resultIdx});
        rigthElement.index = minIndex + resultIdx;
        result[resultIdx] = {...rigthElement};
        rightIdx++;
    }

    return steps;
}