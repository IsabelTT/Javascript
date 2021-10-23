//? Métodos de los arrays

const arrNum = [4,6,-5,7,1,5,21];
const arrName = ['Ivan', 'Jess', 'Freya', 'Kira', 'Akira'];
// const arrNameChanged = [];

//* push() -> Añade lo de dentro del paréntesis como último elemento del array
//* pop() -> Elimina el último elemento del array
//* shift() -> Elimina el primer elemento del array
//* unshift() -> Añade lo de dentro del paréntesis como primer elemento del array
/*
// pop() y shift() además te devuelven ese último o primer elemento para que hagas con él lo que quieras
const ultimoElemento = arrName.pop();
console.log(ultimoElemento); 
console.log(arrName); 
arrName.shift();
arrNum.unshift();
console.log(arrName.push('Sarah'));
console.log(arrName.push('Javi'));
arrName.unshift('Carlos');

//* indexOf() -> te devuelve el índice del elemento que estás buscando. Si no lo encuentra te devuelve -1

console.log(arrName.indexOf('Kira'));


//* reverse() -> Invierte el orden del array
// ['Ivan', 'Jess', 'Freya', 'Kira', 'Akira']

arrName.reverse();
console.log(arrName); 

//* splice() -> Elimina elementos del array MUTÁNDOLO y te da la opción de añadir nuevos elementos
//* slice() -> Simplemente devuelve el trozo de array que le digas, pero NO MUTA el array original
const texto = 'frase cualquiera';
console.log(texto.slice(3, 8));

console.log('Recorte: ', arrName.splice(3)); // Elimina desde el 3 al final
console.log('Recorte 2: ', arrName.splice(0,1)); // Elimina desde el índice 0 y solo 1 elemento
console.log('Recorte 3: ', arrName.splice(arrName.indexOf('Freya'),1, 'Carlos', 'Javi')); // Elimina lo que digas y añade los elementos que le pases en la posición donde has recortado
console.log('Recorte 4: ', arrName.splice(1,0,'Carol'));
console.log('Arreglo: ', arrName);

const trozoArrName = arrName.slice(1,2);
console.log('Trozo: ', trozoArrName);
console.log('Arreglo: ', arrName);

console.log(texto);  
*/


//* join() ->
// ['Ivan', 'Jess', 'Freya', 'Kira', 'Akira']

let textoArray = arrName.join() // Me crea el string separado con comas
textoArray = arrName.join(' '); // Me añade un espacio entre cada elemento
textoArray = arrName.join('/'); // Lo mismo pero con una barra

console.log(textoArray); 