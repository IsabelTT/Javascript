//*Ejercicio 4-Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos incluídos).

// *Luego elimina del array todos los números pares y en lugar de ellos ponemos el string "los impares molan".
//Math.random()*(max-min) + min;
// El maximo excluido
//El minino incluido

var arrayOrig = [];
let random;
var arrayImp = [];

for(let i = 0; i <10; i++){
  // console.log(i);
  random= Math.floor(Math.random()*(34 - 23) + 23);// Nro ramdon del 23 hasta el 33, ya que el valor max no esta incluido
  arrayOrig.push(random);  // agregando el valor random a un array 
  
  arrayImp.push(random);

  if(random % 2 === 0){
    arrayImp.splice(i,1, 'Los numeros impares molan'); // cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
  }
}

console.log(arrayOrig);
console.log(`Este es el array reemplazando todos los numeros pares!! [ ${arrayImp} ]`);

console.log(`Este es el numero random entre 23 y 33 : ${random}`);
console.log(`Este es el array original : [ ${arrayOrig}]`);







// function aleatorio(){
//   return Math.floor(Math.random()*(34-23) + 23);
