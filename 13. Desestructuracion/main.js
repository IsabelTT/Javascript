const arr1 = ['Ivan', 'jess', 'kira', 'freya'];

const imprimir = `${arr1[0] es el marido de ${arr1[1]`}

/*
const arr1 = ['Ivan', 'Jess', 'Kira', 'Freya'];
const name1 = arr1[0];
const name2 = arr1[1];


const imprimir = `${arr1[0]} es el marido de ${arr1[1]} y tiene dos perras: ${arr1[3]} y ${arr1[2]}`;

console.log(imprimir)


const [nombre1, nombre2, nombre3, nombre4] = arr1;

const imprimir2 = `${nombre1} es el marido de ${nombre2} y tiene dos perras: ${nombre4} y ${nombre3}`;

console.log(imprimir2);


// const [ivan, jess, kira, freya] = arr1;
// const imprimir3 = `${ivan} es el marido de ${jess} y tiene dos perras: ${kira} y ${freya}`;

// console.log(imprimir3);

//! Normas!
//! En desestructuración de arrays da igual el nombre que le pongamos a las variables. LO MÁS IMPORTANTE ES EL ORDEN EN QUE LAS CREAMOS

const [kira, freya, ivan, jess] = arr1;
const imprimir4 = `${ivan} es el marido de ${jess} y tiene dos perras: ${kira} y ${freya}`;

// Como puedes ver, salen todos desordenados
console.log(imprimir4)

//! Puedes desesctructurar los elementos que quieras, no hacefalta que sean todos. Si quieres elementos salteados, hay que añadir comas.

const [nombreIvan, nombreJess,    , nombreFreya] = arr1;

console.log(`${nombreIvan} es el marido de ${nombreJess} y su primera perra es ${nombreFreya}`);

*/


//* Operador ternario

const num1 = 10;
const num2 = 20;


// if normal
if(num1 >= num2) {
  console.log('El primer número es mayor o igual');
}else {
  console.log('El segundo número es mayor'); 
}

// Opción ternaria

num1 >= num2 
  ? console.log('El primer número es mayor o igual')
  : console.log('El segundo número es mayor');
  
num2 < num1
  ? num2 === 5
      ? console.log('igual a 5')
      : console.log('distinto de 5')
  : console.log('Num 2 es mayor que num1')

const nombre = 'Carlos';
const edad = 17;
const mujer = (nombre === 'Ivan') ? 'Jessica' : 'otra mujer';

const parImpar = (edad % 2 === 0) ? 'par' : 'impar';

console.log(`${nombre} está casado con ${mujer} y su edad es ${parImpar}, y además es ${(edad >= 18) ? 'mayor de edad' : 'menor de edad'}.`);


// Crea una variable que diga si el usuario está conectado o no.

// Crea otra variable que si el usuario está conectado guarde su nombre de usuario y si está desconectado guarde 'usuario desconectado'

// Crea otra variable más que si el usuario está conectado y además su usuario es "pepe" guarde un saludo especial para pepe, si está conectado pero no es pepe que guarde "Hola, amig@!" y si en caso contrario, está desconectado guarde "¡Hola!"

// Imprime en pantalla el saludo.

const isLogged = true;
const user = 'pepe';

const nombreUsuario = isLogged ? user : '';

const saludo = 
  isLogged 
    ? (nombreUsuario === 'pepe')
      ? '¡Hombre, Pepe! ¿Cómo estás?'
      : '¡Hola, amig@!'
    : '¡Hola!';

console.log(saludo);
