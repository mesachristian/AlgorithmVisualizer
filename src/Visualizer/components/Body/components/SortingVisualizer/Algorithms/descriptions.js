import Bubble_sort from './resources/Bubble_sort.gif';
import Merge_sort from './resources/Merge_sort.gif';
import heapsort from './resources/heapsort.gif';

const ALGORITHMS = ['Bubble Sort', 'Merge Sort', 'Heap Sort', 'Quick Sort'];
var algorithms = new Map();

algorithms.set( ALGORITHMS[0], {
    title : ALGORITHMS[0],
    description : 'El algoritmo burbuja es uno de los más simples e intuitivos que existe aunque poco eficiente '+ 
    'este algoritmo consiste en empezar a recorrer la lista elemento por elemento comparandolo con el elemento '+
    'anterior para organizarlos si es necesario. Esto hará que por cada iteración  j una lista en n elementos se'+
    'encuentre ordenada desde el elemento n-j hasta n.',
    logo : Bubble_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Bubble_sort'
});

algorithms.set( ALGORITHMS[1], {
    title : ALGORITHMS[1],
    description : 'Merge Sort es un algoritmo tipico de divide and conquer. Basicamente su implementación ' + 
    'consiste en dividir la lista en sublistas para organizar estas. Una lista de un elemento se considera '+
    'ordenada.\nLuego se empieza a hacer un "merge" de las sublistas creando una nueva lista ordenada.\n' +
    'Lo normal es que este algoritmo se implemente de una manera recursiva.', 
    logo : Merge_sort,
    logo_src : 'https://en.wikipedia.org/wiki/Merge_sort'
});

algorithms.set( ALGORITHMS[2], {
    title : ALGORITHMS[2],
    description : 'Heap sort es un metodo que hace uso de una estructura de datos en forma de arbol binario '+
    'completo la cual permite implementar sobre ella un algoritmo para construir una max heap.' + 
    ' Con la max heap lo siguiente es sacar el node raiz y enviarlo al final y volviendo a ordenar el max heap ' + 
    'hasta n - 1 de los nodos que ya se hayan colocado al final.\n'+
    'Peor caso: O(nlog(n))\n' + 
    'Mejor caso: O(nlog(n)) para llaves distintas y O(n) para llaves iguales\n'+
    'Peor caso memoria: O(n)\n',
    logo : heapsort,
    logo_src : 'https://en.wikipedia.org/wiki/Heapsort'
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