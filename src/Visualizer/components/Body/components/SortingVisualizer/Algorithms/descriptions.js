import Bubble_sort from './resources/Bubble_sort.gif';
import Merge_sort from './resources/Merge_sort.gif';
import heapsort from './resources/heapsort.gif';
import Quicksort from './resources/Quicksort.gif';

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
    description : 'Quicksort es un algoritmo al igual que mergesort de la familia de divide and conquer. Este algoritmo fue inventado en 1959 '+
    'por Tony Hoare. Es un algoritmo que implementado de una manera correcta puede ser 3 veces más rapido que mergesort y heapsort.\n'+
    'La implementación de este algoritmo consiste en escoger un pivot (en el caso de la implementación de abajo es el elemento en la última '+
    'posición de la sublista) y lo que se busca es poner este elemento en la posición correcta dejando todos los elementos menores a la izquierda '+
    'y los elementos mayores a la derecha. Esto se implementa recursivamente haciendo un quicksort para la sublista a la izquierda del pivot y para '+
    'la sublista a la derecha del pivot.',
    logo : Quicksort,
    logo_src : 'https://en.wikipedia.org/wiki/Quicksort'
});


export function getAlgorithmsDescriptions(){
    return algorithms;
}