
//*Recorre el array de libros y solo imprime en consola aquellos que estén en una posición impar.


const libros = [
  'Harry Potter',
  'El señor de los anillos',
  'Dune',
  'Cien años de soledad',
  'Entrevista con el vampiro',
  'La Biblia'
];
//recorrer arreglo. Por cada libro. Que quieres que haga : que imprima nro impar. Utilzo el otro parametro de forEach - Index . Lo llamaos i en este caso. Tomarlo como si fuera un for
libros.arrayEach((libro, i) => {
  if( i % 2 !==0 ) {
    console.log(libro);
  }
})



//* High order funcion que filtre un arreglo como yo le diga

function myFilter(arr, callback ){   // lo que recibe, en este caso libros o nros. Que me devuelva un nuevo arreglo
const acc = [];

for(let i=0; i<arreglo.length; i++){
  if(callback(arr[i])){ // tengo q devolver true o false para que realize lo de abajo
    acc.push(arreglo[i])    // por cada iteracion le vas colocando el arreglo . Si pasa el if
  }  /*algo */
}

}