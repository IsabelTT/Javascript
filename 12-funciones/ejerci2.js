
//*ejerc2 Crea una función que reciba el array de frutas y devuelva un string con todas las frutas separadas por comas.

//*¡¡¡No tiene que haber una coma al final del string!!!


// let arrayFrutas = ['Platanos','Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos' ];
let arrayFrutas = [];
let arrayNuevo = [];


function separacion(frutas) {
  let stringDeFrutas = ''; // creo un string antes del for para que no lo haga varias veces
  for(let i=0; i>=arrayFrutas.length; i++){
    stringDeFrutas =stringDeFrutas.arrayFrutas[i];  // Le sumas lo que hay en el array de frutas en la posicion i

    arrayNuevo= arrayFrutas.push(frutas);
    return frutas.split('');
  }
}
console.log(arrayFrutas);
console.log(arrayNuevo);
console.log(separacion('platano', 'pera'));
