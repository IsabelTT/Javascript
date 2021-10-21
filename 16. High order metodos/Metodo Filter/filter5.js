
//*Ejercicio 5 con filter.  imprime un array nuevo con los elementos que terminen con n.



const nombres = ['Carol', 'Guillermo', 'Irene', 'Javi', 'Cristina', 'Ivan', 'Adrian', 'Jose Carlos', 'Soraya', 'Isabel', 'Xavi'];



const filter = nombres.filter((nombre) => {

for(let i = 0; i< nombres.length; i++){
 // Se trabaja con el parametro nombre. Quieres la posicion ultima dle parametro que vas a recibir ( nombre[nombre.length-1])let ultimo = nombre[nombre.length-1] 
if(nombre[nombre.length-1] === 'n'  ){  // si nonmbre en su posicion ultima es igual a n , retornar nombre en la posicion que la encuentre.
  return nombre [i];
}
} 
  
})

console.log(filter); //(2) ['Ivan', 'Adrian']