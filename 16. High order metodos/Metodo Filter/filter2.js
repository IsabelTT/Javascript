//*Ejercicio 2 (filter) Devuelve un nuevo array con los números que sean múltiplos de 5.


arrayNum = [45,80,25,4,3];

const multiplo = arrayNum.filter(function(multi){
  return multi % 5 === 0;
})


// 2da opcion con funcion flecha : el parametro multi, directamente si la palabra function.
// const multiplo = arrayNum.filter((multi) => multi % 5 ===0)



console.log(`Los numero multiplos de 5 son ${multiplo}`);
