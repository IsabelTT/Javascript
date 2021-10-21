// Crea un bucle que imprima por consola la lista de números del 1 al 30, incrementándose de 3 en 3.
 let numero = [];

 for (let i=1; i <30; i +=3 ) {
   console.log([i]);
 }


// Utiliza un bucle for para imprimir por la consola la tabla de multiplicar del 8.

// let numero8 = Number (prompt('Escribe un numero a multiplicar * 8'));


console.log('***Tabla del 8 ****');
for ( let i = 1; i<=10; i++ ) {
  // console.log([i]);
    console.log('8x${i} = ${8*i}' );
 }




//Escribe un programa que saque una lista de números del 1 al 20 y que indique si el número es par o impar.
 

 for (let i=1; i<=20 ; i++){
  // console.log([i]);
  if ( i % 2 === 0) {
  console.log('El numero' + i + 'es par');
} else {
  console.log('El numero' + i + 'es impar');
}
 }
// }
//   // if (i % 2 === 0) {
//   //   console.log('Es un numero par');
//   // 