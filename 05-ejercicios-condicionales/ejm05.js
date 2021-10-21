/*Escribe un program que pregunte al usuario que estacion del año le gusta mas. Imprimir en pantalla una frase segun la estacion que escoja. Si se intruduce un valor que no corresponda se mostrara un mensaje al usuario*/


let estacion = prompt('¿Que estacion del año te gusta?');

switch(estacion) {
  case 'verano' : {
    console.log('Me gusta la estacion verano');
    break;
  } 
  case 'invierno': {
    console.log('Me gusta la estacion de invierno');
    break;
  }
  case 'otoño' : {
    console.log('Me gusta la estacion de otoño');
    break;
  }
  default: 
    console.log('Me gusta la estacion de primavera');
  }
