// Condicionales 07
// Pide al usuario 3 numeros y luego imprimelos ordenamos de mayor  a menos

let numero1 = Number(prompt('Escribe el primer numero'));
let numero2 = Number(prompt('Escribe el 2do numero'));
let numero3 = Number(prompt('Escribe el tercer numero'));

let array1 = [numero1,numero2,numero3];
let array2= array1.sort();
array2= array2.reverse();
console.log(array2);

