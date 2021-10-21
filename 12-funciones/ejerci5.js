//*Ejercicio 05.
//*Haz una función que haga que la primera letra del string que le pasemos por parámetro sea mayúscula


let letra = 'hola';
let aski;
let mayuscula;

function asci(letras){
  // let aski = charCodeAt(0);
  for(let i = 0; i <=letras.length; i++){
   if(aski >= 64 && aski <= 91 ){
    aski= letra.charCodeAt(0);
    mayuscula = letra.replace((letra[0], aski)
   }
  }
   return mayuscula;
}


console.log(asci(letra));

// let mayuscula = letras.charCodeAt(0)