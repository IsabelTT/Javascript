/*Pide un string al usuario y devuélvelo con SOLO LA PRIMERA LETRA en mayúsculas.
Haz lo mismo pero con la primera letra de cada palabra.*/

let stringLetra = prompt('Escribe una frase');
let letra = stringLetra;



for (i = 0; i <= stringLetra.length; i++){
  if(stringLetra.charAt(i) === ' '){
    stringLetra = stringLetra.slice(0,i+1) +stringLetra.charAt(i+1).toUpperCase() + stringLetra.slice(i+2);
  };
}

letra = stringLetra.charAt(0).toUpperCase() + stringLetra.slice(1);
//letra[0]=stringLetra.charAt(0).toUpperCase();
console.log(letra);
   // console.log('encontre un espacio en blanco');

   // let stringChart = letra.charAt(0).toUpperCase();
// console.log(stringChart);



for (i = 0; i <= stringLetra.length; i++){
  if(stringLetra.charAt(i) === ' '){
    stringLetra = stringLetra.slice(0,i+1) +stringLetra.charAt(i+1).toUpperCase() + stringLetra.slice(i+2);
  };
}

letra = stringLetra.charAt(0).toUpperCase() + stringLetra.slice(1);
//letra[0]=stringLetra.charAt(0).toUpperCase();
console.log(letra);