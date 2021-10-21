/* Cogiendo este string como inicial: "Plátanos, Bananas, Kiwis, Limones".

Crear el nuevo string "Bananas, Kiwis"

Utilizar slice() y substr()

Hacer un nuevo string sustituyendo Limones por Naranjas.

Crea un Array nuevo con cada una de las frutas como elemento del array.*/



let string = ['Platanos' , 'bananos', 'Kiwis', 'Limones'];
let nuevoString = [...string];
let slice = string.slice(1,-1);
// let subst = string.substr(1,2);

console.log('slice:' + slice);

console.log(string);
console.log(nuevoString);
// console.log(string.substr(1,2));


//3 Pide un string al usuario y devuelvo con solo na primera letra en mayusculas. Haz lo mismo pero con la primera letra de cada palabra