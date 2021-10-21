//* Ejercicio 3- Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya escribiendo.
// *Imprime el array por consola.
// *Cuando acabe, suma el total de todos los números.
// *Imprime en consola la suma total, la raíz cuadrada del total y también éste último pero redondeado al alta.
 

let array =[];
let numero;
let suma;
let cuadrado;
let redondeoAlto;


for( i = 1; i <= 5; i++) {
   // console.log(i);
  numero= prompt(`Dime 5 numeros: Nro ${i}`);
  array.push(numero); // push- agrega un valor al final del array y crea un nuevo array
  suma = array.reduce((a,b) => Number(a) + Number(b), 0);   // reduce - para sumar numeros. a = un acumulador, b= valor actual 0 = inicializador en 0 . Number para convertir el string en numero
  cuadrado = Math.sqrt(suma)  // Math.srqt - saca raiz cuadrada
  redondeoAlto = Math.ceil(cuadrado); //Math.ceil - redondea un numero a la cifra superior
}

console.log(`El array es:[${array}]`);
console.log(`La suma total del array es ${suma}`);
console.log(`La raiz cuadrada de ${suma} es: ${cuadrado}`);
console.log(`El redondeo de ${cuadrado} con Math.ceil es: ${redondeoAlto}`);





//*Otra forma:
// let array= [];
// let suma;

// numero = prompt('Dime 5 numeros distintos, escribe el 1ro');
// array.push(numero);

// numero2 = prompt('escrib4e el 2do numero');
// array.push(numero2);

// numero3 = prompt('escribe el 3er numero');
// array.push(numero3);
// numero4 = prompt('escribe el 4to numero');
// array.push(numero4);
// numero5 = prompt('escribe el 5o numero');
// array.push(numero5);


// suma = Number(numero) + Number(numero2) + Number(numero3) + Number(numero4) + Number(numero5);

// let raizCuadrada= Math.sqrt(suma);
// let redondeo = Math.ceil(Math.sqrt(suma));


// //consola :
// console.log(array);
// console.log(suma);
// console.log(raizCuadrada);
// console.log(redondeo);