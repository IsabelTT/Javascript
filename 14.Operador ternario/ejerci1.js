
// Crea una variable que diga si el usuario esta conectado o no
// Crea otra variable que si el usuario esta concectado guarde su nombre de usuario  y si esta desconectado guarde usuario desconectado
let conectado = true;
let usuario= (conectado ===true) ? 'Estas conectado' : 'Estas desconectado';

console.log(usuario);





// Crea otra variable mas que si el usuario esta conectado y ademas su usuario es pepe guarde un saludo especial para pepe, si esta conectado pero no es pepe que guarde Hola amigo y si en caso contrario, esta desconectado guarde Hola



let conectado2 = true;
let nombre = 'pepe';
let saludo = (conectado2 === true &&nombre ==='pepe') ? 'Saludo especial: Hola pepe' : 'no eres pepe'; 
let saludo2 = (conectado ===true && nombre !== 'pepe') ? 'Hola amigo' : 'Hola'

//Imprime el saludo en pantalla
console.log(saludo);
console.log(saludo2);