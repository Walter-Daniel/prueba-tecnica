//Se crea una variable en la cual se almacena el conteo de iteraciones en cada ciclo
let iteracionesEnAlgoritmo1 = 0; 
let iteracionesEnAlgoritmo2 = 0;

//Se crea un arrayDeNumeros que contiene 50 números aleatorios.
//En a variable X guardamos el valor que queremos obtener de la suma de dos elementos del array.
const arrayDeNumeros = Array.from({ length: 50 }, (_, index) => index + 1);
const x = 98;


/*
1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.
*/

//ALGORITMO UTILIZANDO BUCLE FOR

function sumaDeElementos(array, x) {
  for (let i = 0; i < array.length; i++) { //n
    for (let j = i + 1; j < array.length; j++) { //n²
      iteracionesEnAlgoritmo1++; //n²
      if (array[i] + array[j] === x) { //n²
        return true; //n²
      }
    }
  }
  return false; //1
}

//NOTACIÓN BIG 0(n²) del primer algorítmo.

console.log(sumaDeElementos(arrayDeNumeros, x));
console.log("Cantidad de iteraciones en el bucle for: " + iteracionesEnAlgoritmo1);

/* 
2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
*/

function sumaDeElementos2(array, X) {
    //Se crea un conjunto de valores únicos con Set y el arreglo que se pasa por parametros, y se los guarda en la variable numSet
    const numSet = new Set(array);
    //En el siguiente for of se itera cada elemento del arreglo para luego calcular el complemento
    for (let num of array) {
        const complemento = X - num;
        console.log(`Número en array: ${num}, el complemento resultante es: ${complemento}`)
        iteracionesEnAlgoritmo2++
        //Con el método has podemos saber si el complemento se encuentra dentro del conjunto numSet.
        //Si encuentra dentro de numSet retorna 'true' ya que hemos encontrado el par que sumado al 'num' nos dara el valor que buscamos,
        //es decir: num + complemento = X.
        if (numSet.has(complemento)) {
            return true;
        }
    }
    return false;
}
//NOTACION BIG O(n) del segundo algorítmo.

console.log(sumaDeElementos2(arrayDeNumeros, x)); 
console.log("Cantidad de iteraciones en el bucle formula3: " + iteracionesEnAlgoritmo2); 

 /*Si bien la función sumaDeElementos2 es más compleja a la hora de formularla, es más eficiente ya que realiza una menor cantidad de iteraciones al buscar el resultado de la suma esperada y no está sujeta a bucles anidados que crecen cuadráticamente con el tamaño del conjunto de datos. Tiene una Notación Asintotica BIG O(n) lo que nos indica que tiene una mayor velocidad de ejecución y ahorro de recursos que la primera función que tiene una BIG O(n²). La función sumaDeElementos compara todos los pares posibles de elementos del arreglo y al tener bucles anidados disminuye su eficiencia con arreglos de mayor tamaño. */