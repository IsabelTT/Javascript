//*Imprimir en consola un listado de Películas y directores de esta forma:
//*El señor de los Anillos -> Peter Jackson

//*Hook -> Steven Spielberg
//Variable: 
const peliculas = [

  {
    titulo: 'El señor de los Anillos',
    genero: ['Aventuras', 'Acción'],
    duracion: 250,
    year: 2001 ,
    director: 'Peter Jackson'
  },

  {
    titulo: 'Harry Potter',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 150,
    year: 2001 ,
    director: 'Chris Columbus'
  },

  {
    titulo: 'Troya',
    genero: ['Histórica', 'Acción'],
    duracion: 132,
    year: 2004 ,
    director: 'Wolfgang Petersen'
  },

  {
    titulo: 'Iron Man',
    genero: ['Ciencia Ficción', 'Acción'],
    duracion: 126,
    year: 2008 ,
    director: 'Jon Favreau'
  },

  {
    titulo: 'E.T.',
    genero: ['Aventuras', 'Ciencia Ficción'],
    duracion: 115,
    year: 1982 ,
    director: 'Steven Spielberg'
  },

  {
    titulo: 'Los Goonies',
    genero: ['Aventuras', 'Comedia'],
    duracion: 114,
    year: 1985 ,
    director: 'Richard Donner'

  },

  {
    titulo: 'Algo Pasa con Mary',
    genero: ['Comedia', 'Comedia Romántica'],
    duracion: 119,
    year: 1998 ,
    director: 'Bobby Farrelly'
  },

  {
    titulo: 'Hook',
    genero: ['Aventuras', 'Fantasía'],
    duracion: 142,
    year: 1991 ,
    director: 'Steven Spielberg'
  }

]

// 1. Tengo que recorrer arreglos con un forEach

 const director  = peliculas.map(pelicula => {  //* debe tener un return , devuelve un nuevo array
  return (`Pelicula: ${pelicula.titulo} ---> Director: ${pelicula.director}`);
})
  console.log(director);  


//*2 ejercicio Ejercicio Array de objetos 02.
//*Imprimir en consola los títulos de las películas más largas que dos horas y media.

 const titulo = peliculas.filter(pelicula => 
   pelicula.duracion > 150); 

   titulo.forEach((pelicula) => console.log(pelicula.titulo))
 // se utiliza for echa por que titulo es un arreglo.No podria hacerse solo pelicula.titulo, xq no reconoceria ya que forEach va a lado de un array. 
// console.log(`Estas son las peliculas con + de 2 horas de duracion : ${peliTitulo}`);


//*3  Ejercicio: Tener un arreglo nuevo que contenga las películas más modernas, de más del 2000.Ejercicio Array de objetos

const modernas = peliculas.filter(pelicula => pelicula.year > 2000);

console.log(modernas);

//* 04.Encuentra la película que tenga como director Bobby Farrelly y guarda esa película en una variable a parte. (Usa el find())Ejercicio Array de objetos

 const directosUno = peliculas.find(persona => persona.director === 'Bobby Farrelly');
 
 console.log(directosUno);

//*Ejercicio 05.Encuentra en el array la primera película que tenga a Steven Spielberg como director.Ejercicio Array de objetos 
 
const encontrar = peliculas.find(peli=>{
 return peli.director === 'Steven Spielberg';
})
console.log(encontrar);

//*Ejercicio 06 Consigue un array filtrado con todas las películas que sean de género Aventuras.Ejercicio Array de objetos 


const encontrar2 = peliculas.filter(pelicula => {
  //  pelicula.genero === 'Aventuras')
   return pelicula.genero.includes('Aventuras');
  });
  console.log(encontrar2);




  //* 07.Crea un nuevo array donde todas las películas tengan 20 minutos más de los que tienen en realidad. Usa el map()Ejercicio Array de objetos  ******No

const aumentar = peliculas.map(incremento => {
const nueva = {...incremento}; // tenemos que crear otra array con spread, no hay trabajar con incrimento parametro xq se modifica el array original

  //  const dura = incremento.duracion + 20;
  //  const nombre = incremento.titulo;
  
  //  console.log('La pelicula '+ nombre + ' tiene una duracion ( de 20 minutos +) ' + dura);
})
   //* 08.Crea un nuevo array y hac que todas las películas pasen a ser del año 2000.Ejercicio Array de objetos

   const anio1 = peliculas.filter(function(anio){
     anio.duracion = 2000;
   })
   console.log(anio1);

//*9 09.Recorre el array de películas y luego Imprime en consola el título y todos sus géneros.El señor de los anillos: Aventuras Acción **********
let nombre;
let gener;
const generos = peliculas.map(generito => {
    nombre = generito.titulo;
    gener = generito.genero;
  return (generito.titulo);
 })
console.log('titulo ' + titulo + ':' + 'genero' +  generos);
// for( let i = 0; i<peliculas.length; i++){

//   console.log(peliculas[i].director[i])
//   console.log(peliculas[i]);
// }

// peliculas.forEach((pelicula)=>{
//   if(pelicula.)
// })



//*10 Ejercicio Array de objetos 10.
//*Crea un nuevo array con el map() y modifica solo las //películas que tengan género de "Acción" para que tengan una nueva propiedad llamada armas: true;

const peliculaModificada = 
peliculas.map((pelicula) =>({...pelicula, genero: pelicula.genero, armas: true}));


console.log ('Modificado', peliculaModificada)


//*11 Orderna peliculas segun su duracion de menor a mayor


const ordenPeliculas = peliculas.sort((a,b)=> a.duracion < b.duracion ?-1 : 1);


console.log(ordenPeliculas);

//* Ejercicio 12. Elimina del array de peliculas aquel