import Bubble_sort from './resources/Bubble_sort.gif';
import Merge_sort from './resources/Merge_sort.gif';

const ALGORITHMS = ['Bubble Sort', 'Merge Sort', 'Heap Sort', 'Quick Sort'];
var algorithms = new Map();

algorithms.set( ALGORITHMS[0], {
    title : ALGORITHMS[0],
    description : 'sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly '+ 
    'steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass '+
    'through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named '+
    'for the way smaller or larger elements "bubble" to the top of the list.\n'+
    'This simple algorithm performs poorly in real world use and is used primarily as an educational tool. '+
    'More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries '+
    'built into popular programming languages such as Python and Java.',
    logo : Bubble_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Bubble_sort'
});

algorithms.set( ALGORITHMS[1], {
    title : ALGORITHMS[1],
    description : 'Merge Sort es un algoritmo tipico de divide and conquer. Basicamente su implementación ' + 
    'consiste en dividir la lista en sublistas para organizar estas. Una lista de un elemento se considera '+
    'ordenada.\nLuego se empieza a hacer un "merge" de las sublistas creando una nueva lista ordenada',
    logo : Merge_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Merge_sort'
});

algorithms.set( ALGORITHMS[2], {
    title : ALGORITHMS[2],
    description : 'sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly '+ 
    'steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass '+
    'through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named '+
    'for the way smaller or larger elements "bubble" to the top of the list.\n'+
    'This simple algorithm performs poorly in real world use and is used primarily as an educational tool. '+
    'More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries '+
    'built into popular programming languages such as Python and Java.',
    logo : Bubble_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Bubble_sort'
});

algorithms.set( ALGORITHMS[3], {
    title : ALGORITHMS[3],
    description : 'sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly '+ 
    'steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass '+
    'through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named '+
    'for the way smaller or larger elements "bubble" to the top of the list.\n'+
    'This simple algorithm performs poorly in real world use and is used primarily as an educational tool. '+
    'More efficient algorithms such as quicksort, timsort, or merge sort are used by the sorting libraries '+
    'built into popular programming languages such as Python and Java.',
    logo : Bubble_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Bubble_sort'
});


export function getAlgorithmsDescriptions(){
    return algorithms;
}