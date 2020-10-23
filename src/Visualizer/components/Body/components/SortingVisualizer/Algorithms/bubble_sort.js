export function bubble_sort(array){
    var steps = [];
    let swapped = true;
    let n = array.length;
    var newArray = array.map((element) => {return element});
    
    while(swapped){
        swapped = false;
        for(let i=1; i < n; i++){
            if(newArray[i - 1].value > newArray[i].value){
                let temp = newArray[i -1];
                newArray[i -1] = newArray[i];
                newArray[i] = temp;
                steps.push(i);
                swapped = true;
            }
        }
        n = n - 1;
    }

    return steps;
}