//* 5- Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.

//*Elimina todas las vocales de la frase y imprime la nueva frase por consola.

let frase = prompt('Escribe una frase.....');
let minuscula = frase.toLowerCase()
let array = [];
let arrata = [];
let vocales = ['a', 'e', 'i', 'o', 'u'];
let busquedaVocales;

//bucle:
for(let i = 0; i<frase.length; i++){
  array.push(frase[i]);
  arrata.push(frase[i]);
}

for(let i = 0; i<= array.length; i++){
  for(let j = 0; j <= vocales.length; j++){
    if(array[i] === vocales[j]){
       array.splice(i,1)
    }
  }
  
}

// if( array[i])

console.log(`Esta es la frase original: ${frase}`);
console.log(`Este es el array sin vocales [${array}]`);
console.log( `Este es el array completo [${arrata}]`);

// if( array.indexOf(vocales)){
//   array.splice(i,1,);



// for(let i = 0; i<=frase.length; i++){

// if(frase === vocales) {
//   array.push(frase);
//   array.splice (i,1)
// }

//   }

// console.log(busquedaVocales);

// if( busquedaVocales !== -1)
// frase.indexOf(vocales(i));

// for  (let i = 0; i < frase.length; i++){
//   // console.log(i); 
// if(frase ===  a || frase === e || frase ===i || frase ===o || frase === u){
// frase.split(i,1);
// }
// }
