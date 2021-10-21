//*Funciones 08. - ¡Guinda!
//*Crear una calculadora:

//*Crea un bucle en el que el programa pregunta diferentes opciones (como si fuera un menú).

//*Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir.

//*La calculadora seguirá ejecutándose hasta que el usuario aprete la letra x que será salir.

//*Para cada letra entre las opciones, crear la función que se encargará de hacer cada operación.

///*Dentro de cada función, pediremos al usuario los datos necesarios para relizar esa operación.

//*Que se imprima por consola el resultado de cada operación.

//*No hace falta que las funciones devuelvan nada, solo que impriman por consola.

let pregunta =  prompt(
  'Dime que operacion quieres realizar!!  Marca (s) para sumar; (r) para restar; (m) para multiplicar; (d) para dividir; (e) para exponencial, (p) para porcentaje, (x) para salir')
    
let preguntaNumero1 = Number(prompt(' Escribe el 1er numero'));
let preguntaNumero2 = Number(prompt('Escribe el 2do numero'));
let suma;
let rest;
let multiplicar;
let dividir;
let exponente;
let porcentaje;
let salir;


// for(let i = 0; i< 7; i++ ){
//   pregunta = 
// }
//sumar

for(let i = 0; i>=pregunta.length; i++){
  if(pregunta === 'x'){
    break;
 }
}
 

function sumar(num1,num2){
  if(pregunta === 's') {
    console.log(`${num1} + ${num2} = ${Number(num1+num2)}`);
  } 
}
    



//restar
function restar(num1,num2){
  if(pregunta === 'r')
  console.log(`${num1} - ${num2} = ${Number(num1-num2)}`);

  } 
  
  //multiplicar
function multi(num1,num2){
  if(pregunta === 'm')

  console.log(`${num1} * ${num2} = ${Number(num1*num2)}`);

  return num1 * num2; 
  } 
  
   //dividir
function divi(num1,num2){
  if(pregunta === 'd')

  console.log(`${num1} / ${num2} = ${Number(num1/num2)}`);
  } 
  
     //exponencial
function expo(num1,num2){
  if(pregunta === 'e')
  console.log(`${num1} elevado al ${num2} = ${Number(num1**num2)}`);

  } 
  
     //porcentaje
function porc(num1,num2){
  if(pregunta === 'p')

  console.log(`${num1} % porciento de ${num2} = ${Number(num1*num2/100)}`); 
  } 
  
sumar(preguntaNumero1,preguntaNumero2);
restar(preguntaNumero1,preguntaNumero2);
multi(preguntaNumero1,preguntaNumero2);
divi(preguntaNumero1,preguntaNumero2);
expo(preguntaNumero1,preguntaNumero2);
porc(preguntaNumero1,preguntaNumero2);






// console.log(`La suma de ${preguntaNumero1} + ${preguntaNumero2} es ${sumar(preguntaNumero1, preguntaNumero2)}`);
// console.log(`La resta de ${preguntaNumero1} - ${preguntaNumero2} es ${restar(preguntaNumero1, preguntaNumero2)}`);
// console.log(`La multiplicacion de ${preguntaNumero1} * ${preguntaNumero2} es ${multi(preguntaNumero1, preguntaNumero2)}`);
// console.log(`La division de ${preguntaNumero1} / ${preguntaNumero2} es ${divi(preguntaNumero1, preguntaNumero2)}`);
// console.log(`El exponente de ${preguntaNumero1} al ${preguntaNumero2} es ${expo(preguntaNumero1, preguntaNumero2)}`);
// console.log(`El exponente de ${preguntaNumero1} al ${preguntaNumero2} es ${expo(preguntaNumero1, preguntaNumero2)}`);
