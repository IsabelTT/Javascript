// los bucles sirven para repetir un codigo un numero deternminado de veces

/*
blucle(condicion) {
  codigo que se va a repetir
}


*/
//*Bucle -> for
// se da siempre en 3 partes
// i : con el nro que quieras para empezar
// 2da : cuantas vueltas va a dar ( da tantas vueltas hasta que i sea menor que 10) 
// 3ra : Incrementar o decrementar en cada vuelta
for (let i = 1; i <10; i+=3) {
  debugger;
  console.log('Vuelta numero ' + i + ' desde el bucle for');
}

// for(var i = 0; i < 10: i++)
// Los bucles sirven para repetir un código un número determinado de veces

/*

Bucle(condición) {
  código que se va a repetir
}

*/
/*
//* Bucle -> for

// Bucle for normal
for(let contador=1; contador<=10; contador++) {
  console.log( contador );
}

// // Bucle con una condición if dentro
for(let i=1; i<=10; i++) {
  if(i % 2 !== 0) {
    console.log(i); 
  }
}

// Bucle for para recorrer un array
const arr1 = ['Ivan', 'Soraya', 'Guillermo', 'Cristina'];

arr1[4] = 'Xavi'; 
arr1[5] = 'Javier';

for(let i=0; i<arr1.length; i++) {
  console.log( arr1[i] );
}

const arrNum = [ 1, 2, 3, 4, 5 ];

for(let i=0; i<arrNum.length; i++) {
  console.log( arrNum[i] * 2 )
}


// Bucle recorriendo un array y comprobando los valores que tiene
const arrNombres = ['Ivan', 'Soraya', 'Guillermo', 'Cristina'];

for(let i=0; i<arrNombres.length; i++) {
  if(arrNombres[i] === 'Sergio' ) {
    console.log('Soraya está dentro del array.')
  }
}


// Bucle utilizando "break;" y "continue;";
const arrNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for(let i=0; i<=arrNum.length; i++) {
  if(i === 3){
    console.log('Aquí paro el bucle por completo'); 
    break;
  }
  console.log(`Número ${i+1}`)
}

console.log('*************'); 


for(let i=0; i<arrNum.length; i++) {
  if(arrNum[i] === 5) {
    console.log('Me salto solo esta vuelta del bucle'); 
    continue;
  }
  console.log(`Número ${arrNum[i]}`);
}


//? Ejemplo calculando un número primo

const num = Number(prompt('Dime un número y te digo si es primo.'));

let esPrimo = true;
for(let i=2; i<num && esPrimo === true ; i++){
  
  if(num % i === 0) {
    esPrimo = false;
  }
}

// Podemos usar el if simplemente poniendo una variable que va a devolver true or false. No hace falta poner siempre los iguales "==="
if(esPrimo){
  console.log(`El número ${num} es primo.`);
} else{
  console.log(`El número ${num} no es primo.`);
}

//* Bucle -> for.....in

const numbers = [1,2,3,4];

const texto = '¿hola cómo estás?'

for(let index in numbers){  
  console.log(numbers[index]);
}

for(let index in texto) {
  console.log(texto[index]);
}

//* Bucle -> for.....of

for(let number of numbers) {
  console.log(number);
}
for(let letra of texto) {
  console.log(letra)
}

*/

//* Bucle ->  while
/*
    while(condición) {
      repite este código
    }

*/


// let contador = 25;
// while(contador < 10) {
//   console.log('Hola desde un while');
//   contador++;
// }

//* Bucle -> do...while
/*

    do{
      haz este código una vez
    }while(condición) // y si se cumple la condición repítela

*/

// let acc = 50;
// do{
//   console.log('Hola desde el do while'); 
//   acc++;
// }while(acc <= 20)



