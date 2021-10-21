// Array de tareas
const toDos = ['Planchar camisas', 'Ir a comprar al súper', 'Planchar pantalones'];


//Functions

const createToDo = () => {
  const newToDo = prompt('New To-Do:');
  toDos.push(newToDo);

  console.clear();
  console.log(`La tarea: "${newToDo}" se ha añadido correctamente.`)
}


const readToDos = () => {
  console.clear();
  console.log('Estas son tus tareas pendientes:');
  toDos.forEach( (toDo, index) => {
    console.log(`${index + 1}.- ${toDo}`);
  } )
}

const updateToDo = () => {
  readToDos();
  const toDoIndexPrompt = prompt('Dime el número de la tarea que quieres modificar.');
  if(toDoIndexPrompt === null){
    return;
  }
  if(isNaN(toDoIndexPrompt)){
    console.log('Tienes que escribir un número.')
    return;
  }
  const toDoIndex = Number(toDoIndexPrompt);
  if(toDoIndex <= 0 || toDoIndex > toDos.length){
    console.log(`No existe un ToDo con el número ${toDoIndex}`);
    return;
  }  

  const updatedToDo = prompt('¿Cómo se llama ahora la nueva tarea?');    
  toDos.splice(toDoIndex -1, 1, updatedToDo);  
}


const deleteToDo = () => {
  readToDos();
  const toDoIndexPrompt = prompt('Dime el número de la tarea que quieres eliminar.');
  if(toDoIndexPrompt === null){
    return;
  }
  if(isNaN(toDoIndexPrompt)){
    console.log('Tienes que escribir un número.')
    return;
  }
  const toDoIndex = Number(toDoIndexPrompt);
  if(toDoIndex <= 0 || toDoIndex > toDos.length){
    console.log(`No existe un ToDo con el número ${toDoIndex}`);
    return;
  }  

  toDos.splice(toDoIndex -1, 1);
  console.log(`La tarea ${toDoIndex} se ha eliminado correctamente.`)

}


const searchToDo = () => {
  console.clear();
  const searchText = prompt('Escribe las palabras que quieras buscar en tus ToDos.');
  if(searchText === null){
    return;
  }
  if(searchText === '' || !isNaN(Number(searchText))) {
    console.log('Tienes que escribir alguna palabra.');
    return;
  }

  const filteredToDos = toDos.filter( (toDo) => {
    return toDo.toLowerCase().includes(searchText.toLowerCase())
  } );
  console.log('Estos son los ToDos que contienen tu búsqueda.'); 
  filteredToDos.forEach( (toDo, index) => {
    console.log(`${index + 1} ${toDo}`);
  } )

  // const filteredToDos = toDos.map( (toDo, index) => {
  //   if(toDo.includes(searchText)){
  //     return { index: index + 1, toDo, error: false }
  //   }
  //   return {error: true}
  // } )
  // console.log('Estos son los ToDos que contienen tu búsqueda.'); 
  // filteredToDos.forEach( (toDo) => {
  //   if(!toDo.error)
  //     console.log(`${toDo.index}.- ${toDo.toDo}`);
  // } )
  
}



// Menú
let working = true;
while(working) {
  const respuesta = prompt(
    `¡Welcome to your To-Do List!
        (c) Create To-Do
        (r) Read To-Dos
        (u) Update To-Do
        (d) Delete To-Do
        (s) Search To-Dos
        (x) Exit
    `);


    if(respuesta === 'c'){
      createToDo();
    }else if(respuesta === 'r'){
      readToDos();
    }else if(respuesta === 'u'){
      updateToDo();
    }else if(respuesta === 'd'){
      deleteToDo();
    }else if(respuesta === 's'){
      searchToDo();
    }else if(respuesta === 'x' || respuesta === null){
      working = false;
    }
    else {
      console.log('Opción incorrecta, escoge otra.')
    }
}