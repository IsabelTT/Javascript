//*Operador ternario

const num1= 10;
const num2 = 20;

if(num1>=num2){

}


num1>= num2 
? console.log('el primer numero es mayor o igual')
:console.log('El 2do numero es mayor') // si no es aplica esto

num2 <num1
? num2===5 // si numero 2 es igual a 5
 ? console.log('igual a 5') // si no es , devuelve en consola
 : console.log('distinto a 5')
: console.log('Num 2 es mayor que num1'); 

const nombre = 'Ivan';
const mujer = nombre === 'Ivan' ? 'jessica' : 'Otra mujer';
console.log(mujer);