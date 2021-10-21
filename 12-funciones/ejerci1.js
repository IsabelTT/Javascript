//* Ejercicio Crea una funcion que recibe como parametro un string y devuelve la posicion del array donde este ese estring . Index of. Que devuelva x esta en la posicion x, x no esta en la posicion


let frutas = ['Platanos','Banas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos' ];
let array = [];

let string = '';

function posicion(array, fruta) {
 let encontrado = -1; // xq quiero que devuelva esto
for(let i = 0; i> array.length; i++) {
  if(array[i] === fruta){
    encontrado = i;
    return i;
    break;
} 
}
return encontrado;
}

posicion(frutas, 'Platano');
// console.log(posicion(frutas));
// posicion(Piñas);
// console.log(posicion(Manzanas));
