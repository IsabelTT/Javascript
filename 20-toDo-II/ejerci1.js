// Array de tareas
const toDos = [
  {task: 'Planchar Camisas', done: false },
  {task: 'Ir a comprar al súper', done: false },
  {task: 'Planchar Pantalones', done: false },
];

//Functions

const createToDo = () => {
  const newToDo = prompt('Introduce la nueva tarea.');
      
  if(!newToDo || !isNaN(newToDo)) {
    console.log('Introduce algo válido.')
    return;
  }
  const toDo = {
    task: newToDo,
    done: false
  }
  toDos.push(toDo);
  console.clear();
  console.log(`La tarea: "${newToDo}" ha sido añadida correctamente.`)
}


const readToDos = () => {
  // 1.- Planchar camisas ❌
  // 2.- Mercadona ❌
  console.clear()
  toDos.forEach( (toDo, index) => {
    const toDoDone = toDo.done ? '✔' : '❌';
    console.log(`${index + 1}.- ${toDo.task} ${toDoDone}`)
  } )
}

const updateToDo = () => {
  console.clear();
  readToDos();

  const toDoIndex = prompt('Dime el número del toDo a borrar.');

  if(isNaN(toDoIndex) || !toDoIndex) {
    console.log('Necesito un número.');
    return;
  }
  const toDoIndexNumber = Number(toDoIndex)
  const toDoExists = toDos.some(( _ , index) => {    
    return toDoIndexNumber === index + 1
  });

  if(!toDoExists){
    console.log('No hay ninguna tarea con ese número.')
    return;
  }

  const newToDo = prompt('Dime el texto nuevo que tendrá la tarea');
  if(!newToDo || !isNaN(newToDo)) {
    console.log('Introduce algo válido.')
    return;
  }

  const newObjectToDo = {task: newToDo, done: false}
  toDos.splice(toDoIndexNumber - 1, 1, newObjectToDo)
  readToDos();
   
}


const deleteToDo = () => {
  console.clear();
  readToDos();

  const toDoIndex = prompt('Dime el número del toDo a borrar.');

  if(isNaN(toDoIndex) || !toDoIndex) {
    console.log('Necesito un número.');
    return;
  }
  const toDoIndexNumber = Number(toDoIndex)
  const toDoExists = toDos.some(( _ , index) => {    
    return toDoIndexNumber === index + 1
  });

  if(!toDoExists){
    console.log('No hay ninguna tarea con ese número.')
    return;
  }

  toDos.splice(toDoIndexNumber - 1, 1);
  readToDos();
}


const searchToDo = () => {
  
}



// Menú
let working = true;
while(working) {
  const respuesta = prompt(
    `¡Welcome to your To-Do List versión 2.0!
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

//* Añadir la opción de ordenar los ToDos alfabéticamente
//* Añadir la opción de completar un toDo. Revisar que despues se haya marcado con ✔
//* Añadir la opción de imprimir solo las tareas pendientes