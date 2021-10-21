console.log('hola desde mi archivo')

// variables

var  nombre; // declaracion de variable
nombre='Ivan'  //o inicializacion
console.log(nombre); // sentencia, voy a buscar la palabra nombre de mi almacen y lo coloca ahi. en lugar de nombre reemplaza y coloca x ejem  Ivan y lo imprime en pantalla

let nombre2 = 'Isabel';
let nombre3 = 'Victor';

// const numero2= 23;
// const PI = 3.1416;
// console.log(numero2);
// numero2 = 14;

//*maneras de mostrar en pantalla codigo javascript

// Escribe en la consola
//console.log(numero2)

//Muestra una alerta en mi web que hay que aceptar para que siga ejecutando el codigo
// window.alert(numero2);

//Escibe el codigo en mi HTML
// document.write(numero2);


//*Tipos de datos PRIMITIVOS que podemos almacenar

// String
// Las de toda la vida
let textoSimples= 'Esto es un texto con "comillas" simples';
let textoDobles = " Esto es un texto con comillas dobles";

//! ECMAScript 6 ->2015 ES6
//Permite hacer saltos de linea
let textoBackticks = `Esto es un texto con 
backticks`

console.log(textoSimples);
console.log(textoDobles);
console.log(textoBackticks);
//? Number
let Number
let numero = 2;
numero= 2.4;
numero =-5;
numero =-2.7

//?Boolean
let verdadero = true;
let falso = false;

//? Undefined
let variable= undefined; // redundante
let vaiable2;

console.log(variable); // --> undefined
console.log(variable2); //  undefined
// console.log(variable, variable2);

// let hola = 'hola';
// let Isabel = 'Isabel';
// console.log(hola, Isabel);


//?null
let valorNulo = null; // Tiene un valor, pero he querido darle ese valor null

//? Symbols




//? Ambito de las variables ->
let nombre = 'Ivan';
console.log(nombre);
if( 5> 3) {
  let edad = 23;
  console.log(nombre);
  console.log(edad);
}

console.log(edad);









// console.log(nombre);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);