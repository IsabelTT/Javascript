// *Ejercicio 2 map()Crea Un nuevo array con todos los valores sumándole 2 y al cuadrado.

const arrNum = [5,14,68,75,98];

const nuevoArray = arrNum.map((numero) =>{
  return (numero + 2) ** 2;
})


console.log(nuevoArray);