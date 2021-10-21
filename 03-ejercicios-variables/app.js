//Escribe un programa que calcule el nro de segundos que existen en un dia. Para ello debemos crear 3 variables, horas, minutos y segundos. Multiplicaresmos los segundos de un minuto por los minutos de una hora, por las horas de un dia. El resultado lo guardaremos dentro de otra variable.
// Un dia tiene 86400 segundos
// *Crea 3 variables
//*Multiplicalas entre ellas
//*Guarda el resultado de la multiplicacion e n otra variables
//*Imprime por pantalla el resultado

const HORAS = 24;
const MINUTOS = 60;
const SEGUNDOS = 60;

const resultadoMultiplicacion = (SEGUNDOS * MINUTOS * HORAS);

console.log ( 'Un dia tiene: ' + resultadoMultiplicacion );

// **Variables 02.**- Hacer un conversor de euros a dólares. Crearemos una variable llamada "euros" con un valor inicial de 7. Tenemos que calcular ese valor en dólares. Supondremos que un euro son dos dólares.

const eurosCambio = 2;
const euros = 7;
const resultadoDolar = (euros * eurosCambio)


console.log ('El cambio de 7 euros a dolares es ' + resultadoDolar  + ' euros');


// ---
// **Variables 03.**- El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una variable precio inicializada con valor 100, calcule el precio con IVA añadiendo el símbolo de euros al final.

const IVA = 21;
const numeroInicial = 100;
const porcentaje = (IVA/100 )*100;
const precionMasIva = porcentaje + numeroInicial;

console.log('El precio del articulo con IVA es = ' + precionMasIva+ ' Euros' );
// (100*21) /100
// (precio*IVA) / 100


// ---
// **Variables 04.**- Realiza un programa que a partir de los valores ancho=4 y alto=7, calcule el área de un triángulo en metros cuadrados.  // area triangulo = b*h/2
const altura = 7;
const base = 4;
const resultado = altura*base/ 2

console.log('El area del triangulo es: ' + resultado);


// ---
// **Variables 05**.- Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar por 9/5 y sumar 32. 
// Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.  F = 9/5*C + 32

const centigrados = 20;
const NUM1 = 9/5
const NUM2 = 32
const farenheith = (centigrados * NUM1) + NUM2;

// console.log( centigrados + ' grados centigrados es igual a ' + farenheith + ' grados farenheith');
console.log( `${centigrados} grados centigrados es igual a  ${farenheith}  grados farenheith`);


// ---
// **Variables 06.**- Vamos a mandar a un usuario una caja. Para ello, partiremos de unos valores y los concatenaremos. Hay que obtener por consola el siguiente mensaje:
// *[nombre] ha pedido una caja de [material] con unas dimensiones [dimensiones]. Y añade: [comentario].*
// Con los siguientes datos:

const nombre = 'Isabel';
const material = 'madera';
const dimensiones1 = 5;
const dimensiones2 = 6;
const unidadMedida = 'metros'
const comentario =  'Quiero que sea de color rosado'


console.log(`La cliente ${nombre} ha pedido una caja de ${material} con unas dimensiones de ${dimensiones1} ${unidadMedida} de ancho y ${dimensiones2} ${unidadMedida} de largo y agrega como comentario que : ${comentario}.`);

console.log('La cliente ' + nombre + ' ha pedido una caja de ' + dimensiones1 + 'x' + dimensiones2 + ' y deja un comentario: " ' + comentario + '".');



