//obtener un numero random ejemplo github copilot
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//ejemplo midu dev curso JS
function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random() // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10 // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied) // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1 // -> 7

  // devolvemos el resultado
  return result
}

//ejemplo midu dev curso JS
// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const RestarFlecha = (a, b) => {
  return a - b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b

/*
El comportamiento es muy similar al de una función declarada con la palabra clave function. 
Sin embargo, hay una diferencia muy importante entre ambas que debes conocer: el hoisting.

Hoisting
El hoisting es un término que se usa para describir cómo JavaScript parece que mueve 
las declaraciones funciones al principio del código, de forma que las puedes usar incluso antes de declararlas. Por ejemplo:

Las funciones declaradas utilizan hoisting, mientras que las expresiones de función no.
*/

const maxNumberInArray = (array) => {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max
}

//Recursividad: Función que se llama a sí misma
function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1)
  }
}

function multiplosDeCinco(n) {
  if (n === 0) {
    return 0
  } else {
    return n + multiplosDeCinco(n - 1)
  }
}

const sumaEnteros = (numInicial) => {
  if(numInicial === 0){
      return numInicial
  }else{
      return numInicial + sumaEnteros(numInicial - 1)
  }
}
console.log(sumaEnteros(3))