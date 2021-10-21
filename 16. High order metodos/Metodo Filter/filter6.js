//*Ejercicio 6 ( filter). Crea un array nuevo con los elementos del array de nombres que sean impares.


const numArray = [7,8,42,77,2];

const filter = numArray.filter((impares) => 
{
  return impares % 2 !== 0
  
})

console.log(`Los numeros impares son ${filter}`);