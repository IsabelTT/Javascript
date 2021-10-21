//* - Haz un programa que pida el número de DNI sin letra. Lo que hará el programa es devolver el mismo número con la letra que debería tener.

//* Revisar que el número no pueda ser negativo ni tener más de 8 dígitos.

//* Te doy un array de letras:

// *   const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','K','E','T'];
//* La posición de la letra que deberás añadir al DNI es la del resultado del MÓDULO del número de DNI introducido entre 23

let dni = prompt('Escribe tu DNI sin letras');
let numberDni = Number(dni);
let array = [];
let array2 = [];
const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','K','E','T'];
let suma;
let moduloPosicion;
suma = array.reduce((a,b) => Number(a) + Number(b), 0);



for(let i = 0; i < dni.length; i++){
// console.log(i);
// if(numberDni >= 1 && dni.length < 8 ){
  array.push(dni[i]);
  // suma = array.reduce((a,b) => Number(a) + Number(b), 0);
  moduloPosicion = numberDni % 23; 
}

for(let i = 0; i>=15; i++){
  if( letras[i] === modulo){
      array2.unshift(letras[i]);
  }
}


// for(let i = 0; i <letras.length; i++){
//   letras[i] === 
// }

console.log(numberDni);
console.log(suma);
console.log(moduloPosicion);
console.log(array);
console.log(array2);
console.log(letras);