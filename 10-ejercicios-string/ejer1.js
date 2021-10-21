
//* Ejer 1 : Cogiendo una frase cualquiera, quiero que :
/*
 Crea un programa que busque si existe una letra dentro de esta frase.
    Si esta la letra, imprirmir true. Sino esta la letra, false
    Si esta, imprimir posicion. Si no esta imprimir -1
*/

// crear const frase
// condicional if
// Si esta true, si no false
// Si esta console log - posicion
// Si no esta console log -1
let frase = ' Estamos con las temperaturas cada vez mas frias';
let pregunta = prompt('Coloca una letra de la a la z para buscar dentro de la frase secreta')
let letra = pregunta;
let fraseI = frase.includes(letra);
console.log(fraseI);


for(i= 0; i <= frase.length ; i++ && frase.includes(letra)) {
  if (fraseI === true ) {
    console.log('La posicion de la letra + i + es ' + frase.indexOf[i]);
  } else {
    console.log('El resultado es -1');
  }
}



// if(fraseI){
//   console.log('true ' + '[' + frase.indexOf(letra)+ ']');
// }else {
//   console.log('false' + '[' + frase.indexOf(letra) + ']');
// }

//   console.log(`La letra ${letra} ${frase.includes(t)} ? 'esta incluido' : 'o no esta incluida'`);


// console.log(programa);
