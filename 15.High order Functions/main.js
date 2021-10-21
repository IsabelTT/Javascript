//Transforma el array de numeros para tener un array nuevo con cada numero al que le restamos 5
// transfoma el array de numero en un nuevo array en el que en cada posicion me pone si el numero del array de numeros es par o impar -> resultado final ['impar', 'impar', ''par, ]

const arrNum = [5, 7, 14, 23]

function transform(arreglo, cb){
  const acc = [];

  for(let i =0; i< arreglo.length; i++){
   const result = cb(arreglo[i]);
   acc.push(result);
  }
  return acc;
}


const rest = function(num){
  return num - 5;
}

console.log(transform(arrNum,rest));