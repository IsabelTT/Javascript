//* Ejercicio 3 (filter) : escribe un Nuevo array sin el número 14.


const arrayNum = [ 14, 20, 15, 18];

const numeros = arrayNum.filter((numero) => numero !== 14)


console.log(numeros);

console.log(`El nuevo array sin el nro 14 es ${numeros}`); // 20,15,18


//Otra forma con la palabra function y sin funcion flecha :
// const numeros = arrayNum.filter(function(numero){ 
//   return numero ==! 14 })
