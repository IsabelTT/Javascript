//*ejercicio3 - Funciones 03.
//*Crea una función que reciba el array de frutas y que te devuelva un nuevo array al revés.


let array = ['a','b','c'];

function reverse(array){
let nuevoArray = []
for(let i = 0; i < array.length; i--) {

    nuevoArray.push(array[i])
   
}
return nuevoArray;
}

const arrayReverse= reverse(array));

console.log(arrayReversed);