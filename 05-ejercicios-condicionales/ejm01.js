// *Pedir al usuario una nota de un examen de va de 0 a 10 :
// Si es mayor a 5 mostrar : Aprobado
// Si es igual a 5, mostrar el texto:  aprobado por los pelo
// Si es menor que 5 mostar suspendido


const usuario = prompt( '¿Cual es tu nota? ( que sea de 0 a 10)');
const nota = usuario;
// const numberUsuario = Number (usuario);8
if (nota > 5) {
  console.log('aprobado');
} else if (nota == 5){
  console.log('Aprobado por los pelos');
} else {
  console.log('suspendido');
}

