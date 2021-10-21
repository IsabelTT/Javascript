//*Ejercicio 01
// Dame un nuevo array con todos los valores divididos por 3.Si ves que hay muchos decimales, haz que solo tengan 2


const arrNum = [5,14,68,75,98];


const nuevoArray = arrNum.map((num) => {
  let resultado = Number((num / 3).toFixed(2));
  
  return resultado;


})

console.log(`El nro es ${nuevoArray}`);