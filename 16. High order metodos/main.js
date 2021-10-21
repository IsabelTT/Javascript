//?  High Order Methods

function miRecorredorDeArrays(arreglo, callback) { // el cdallback es la funcion que se pondra
  for(let i=0; i<arreglo.length; i++){
   callback(arreglo[i]); // le paso c/u elementos de los arreglos
  }
}

const libros = [
  'Harry Potter',
  'El señor de los anillos',
  'Dune',
  'Cien años de soledad',
  'Entrevista con el vampiro',
  'La Biblia'
];

miRecorredorDeArrays(libros, function(libro){ // que va a recibir x cada vuelta? un libro. colocar la variable que uno quiera o se relacione

console.log(libro);
})
let librosNombreCorto = [];
miRecorredorDeArrays(libros,function(libro){
 if(libro.length<=6) {
   librosNombreCorto.push(libro);
 }
})

console.log(librosNombreCorto);


//* for each() // sirve para recorrer un arreglo y hacer lo que quieras con cada iteracion. como el for of. Recorre de principio a fin, de 1 en 1, de principio a fin. Metodo del array
// llama al callbaack




//* Higth order function que devuelva UN elemento que cumpla con la condicion que le demos. ( es diferente al filter, es para devolver un solo item)No un arreglo , no es un acumulador


// 1ro recorreme el arreglo, length, para que recorras entero. Me haces un if si me cumple esa ocdndicion.

const muyFind = (arreglo, callback) => {
  let item;
  for(let i=0; i<arreglo.length; i++){
    if( /* Cumples esto*/){   // la condicion es el callback y le paso el elemento arreglo en i. El callback es una funcion que se escribe a mano
      item = arreglo[i]
    }
  }
}



// * HOF  que pueda modificar cada elemento del arreglo que le pase y me devuleva modificado un nuevo arreglo. No modifica arreglo original. A todos los elementos que te pase le vas a hacer algo., lo que se le pase con el callback. No requiere un if