//*2. Pedir al usuario un numero entero. Cuando nos de el nro imprimir en consola:
/* >0 positivo*/ /*Si el valor es par o impar.
Si es múltiplo de cinco (que solo aparezca el mensaje si lo es). Si el valor es mayor que 100 o si es menor que 100.*/

const pregunta = Number(prompt ('Ingresa un numero entero'));
// const pregunta2 = prompt ('')
// const preguntaNumber = Number(pregunta) /* Si el valor es positivo o negativo.ç

const valor = pregunta;
//*modulo
const res = valor % 5;

if(valor >=0) {
  console.log('positivo');
} if (valor <0) {
 console.log('negativo');
} if (res == 0 ){
  console.log('Es multiplo de 5');
} if(valor > 100) {
  console.log('es mayor que 100');
} else if (valor < 100) {
 console.log('es menor que 100');
}
