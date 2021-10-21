
//* 3ro: Crea un programa que te pregunta la edad y te da el precio de la entrada que tienes que pagar. menores de 6 entran gratis, de 6 a 14 años pagan 4 euros, 14 a 65 años pagan 7 euros, mayores de 65 entran gratis :


const edad = prompt ('¿Cual es tu edad?');
const numberEdad = Number (edad);


if (numberEdad < 6) {
  console.log('Entran gratis');
} else if (numberEdad >= 6 && edad <= 14){
  console.log( ' Tienen que pagar 4 euros');
} else if (numberEdad >= 14 && edad <=65 ) {
  console.log('Pagan 7 euros');
} else {
  console.log('Entran gratis');
}
