//* ejercicio6. Crea una función a la que le pasamos 2 números y imprime por consola cual es el mayor de los dos o si son iguales.


let number =[5,8]

function numero(number){
  let acc = number[0];
  for (i=0; i< number.length; i++) {
    if(number [i] > acc || number[i] === acc) {
      acc = number[i];
    }
  }
  return acc
}


console.log(`El numero mayor es  ${numero(number)}`);