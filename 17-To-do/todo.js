// *Ejercicio Guinda -> To do
// Es un programa para gestionar tareas
//Empazaremos con un array con un par de tareas basicas
// const tareas = [ 'Planchar camisas', 'Ir a comprar al super'];
// Creamos un menu en el que daremos las siguientes opciones: 
//(c) Create to-do -> añade un nuevo to do que pide por prompt  // push? // forech?
//(r) Read to-dos -> Muestra todos los to do que hay en consola ->1. Planchar camisas  // map ?
//(u) Update to-do -> Te pregunta que to-do quieres modificar y luego te pregunta por el nuevo texto del to-do   // splice ?   + filter ?
//(d) Delete to-do -> Te pregunta que to-do quieres borrar y te lo borra  // splice 
//(s) Search to-do -> Que te imprima por consola los to-dos que coincidan con tu busqueda ( planchar camisa, planchar pantalones)   // filter ?
//(x) Exit  // break ?
//Si puede ser todo con arrow functions const nombreFuncion = () => {}
//Pensando....  
// crear prompt para marcar opciones.
// un bucle para cada letra de do to / o if


//*variables 
const tareas = [ 'Planchar camisas', 'Ir a comprar al super', 'Planchar pantalones'];

const preguntaPrograma = prompt (`Elige las siguientes opciones: 
(c) Create to-do (añade un nuevo to do)  
(r) Read to-dos -> Muestra todos los to do que hay en consola 
(u) Update to-do -> Que todo quieres modificar, por que texto nuevo? 
(d) Delete to-do -> Que es lo que quieres borrar
(s) Search to-do -> Que to-do buscas?
(x) Exit  
  `)

let working = true;

  //*Funciones

// if( preguntaPrograma === 'x'){
//   break;}




//*Bucles
for( let i = 0; i>= tareas.length; i++){
}  
   if(preguntaPrograma ==='c'){
   let create = prompt('Escribe a continuacion la nueva tarea') 
   let  nuevaTarea= tareas.push(create);
    console.log(nuevaTarea);
  }

  const readToDos = () => {  // puede estar sin parametros
    console.clear()
  } 





