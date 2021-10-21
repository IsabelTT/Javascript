
  const peliculas = [
    {
       titulo: 'El señor de los Anillos',
        genero: ['Aventuras','Accion'],
        duracion :'250',
        year: 2001,
        director: 'Peter Jackson'
       },
    {
       titulo: 'Harry Potter', genero: 'Aventuras', duracion :'150',
       year: 2001, 
       director: ' Cris columbus' 
      },
    {
       titulo: 'Troya', 
       genero: ['Historica', 'Accion'],
       duracion :'132', year: 2004, director: 'Wolfgang Petersen' 
      },
    {
       titulo: 'Iron Man', 
       genero: 'Ciencia y ficcion',
       duracion :'150',
       year: 2001, 
       director: 'Peter Jackson' 
      },
    {
       titulo: 'E.T',
       genero: ['Aventuras','Ciencia Ficcion'], 
       duracion :'250',
       year: 2001, 
       director: 'Steven Spielberg '
       },
    {
       titulo: 'Algo pasa con Mary',
      genero: ['Comedia', 'Comedia Romantica'],
      duracion :'250',
      year: 2001, 
      director: 'Peter Jackson'
       },
    { 
      titulo: 'Hook',
      genero: ['Aventuras', 'fantasia'], 
      duracion :'250', 
      year: 2001, 
      director: 'Peter Jackson'
    },
  ]

  console.log(peliculas);
  for( let i = 0; i<peliculas.length; i++){ //* Es un arreglo de 8 peliculas
    console.log(peliculas[i].titulo);
    console.log(peliculas.duracion);
  }
// peliculas.forEach((pelicula) =>{  
//   if(pelicula.year < 2000)
// })

// peliculas.filter((peliculas)=>{ 
//   return(pelicula.year<2000);
// /* Filter devuelve un array nuevo
// })