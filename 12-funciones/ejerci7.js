//*ejercicio 7 Crea una función que reciba dos números y devuelva true si los números son iguales.



function iguales(num1, num2) {
 if(num1 === num2){
   return true
 } else {
   return false
 }
}

console.log(iguales(5,6));



const areEqual = (num1,num2) =>{
  const equal = num1===num2; // es una expresion una pregunta. Siempre evalua un true o false
  return equal;
}   // las funciones que empiezan con is o are, es una pregunta, esta logeado, esta igual?


console.log(areEqual(4,4));
// num1 > num2 // siempre es una pregunta