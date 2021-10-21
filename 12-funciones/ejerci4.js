//*Funciones 04.
//*Crea una función que le pasemos un array de números y nos devuelva cuál es el número mayor.

const arrNum = [-20,2,5,50,88,75,85];

function numeroMayor(arrayDeNumeros){

  let acc = arrayDeNumeros[0]; // creas la variable acumulador para utilizarla en el if
  for(let i = 0; i<= arrayDeNumeros.length; i++){
    console.log(i);
    if(arrayDeNumeros[i] > acc) { // El acumulador es en numero anterior.  Hay qye comparalo con el acumulador
    acc = arrayDeNumeros[i]  // Si el nro es mas grande se guarda en el acumulador
    }
  }
  return acc
  ;
}

console.log(numeroMayor(arrNum));
// const numGrande = numeroMayor(arrNum);
// console.log(numGrande);
// // arrayDeNumeros[i+1