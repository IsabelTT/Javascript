//*ejercicio 4 const nombres = ['Carol', 'Guillermo', 'Irene', 'Javi', 'Cristina', 'Ivan', 'Adrian', 'Jose Carlos', 'Soraya', 'Isabel', 'Xavi'];

//* Con el array de nombres crea un array nuevo con los nombres que tengan más de una a.

const nombres = ['Carol', 'Guillermo', 'Irene', 'Javi', 'Cristina', 'Ivan', 'Adrian', 'Jose Carlos', 'Soraya', 'Isabel', 'Xavi'];

const filter = nombres.filter((nombre)=>{
  let contadora = 0;
  for(let i = 0; i < nombre.length; i++){
    if(nombre[i] === 'a' || nombre[i] === 'A'){
      contadora ++; // cuando encuentre una ' a' le sume un valor mas a contadora
    }
    // } if( contadora === 2){
    //   return true;
    // }
  }
  return contadora >1
});


console.log(`Los nombres con mas de una letra 'a' son : ${filter}`); //Adrin, Soraya