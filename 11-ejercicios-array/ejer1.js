//Metodo arrays y math 
// Escribe un programa que pida un numero mayor que 1 y que devuelva si el numero es primo o no. Un nro primo es solo divisible por si mismo y por 1

const peticion = prompt('Escribe un numero mayor que 1, para saber si es un numero primo');
const peticionNumber = Number(peticion);

for (let i = 2; i<=peticionNumber; i++ ){
  if(peticionNumber % i === 0){
    console.log(`El numero ${peticionNumber} no es un numero primo`);
  } else{
    console.log(`El numero ${peticionNumber} es un numero primo`);
  }
}







