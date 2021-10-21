

/*condicion 06 : Escribe un programa que pida al usuario el número del mes (un número entre 1 y 12) y que muestre el número de días que tiene ese mes. 
/*No tendremos en cuenta los años bisiestos.` 
Si se introduce un número mayor que 12 o menor que 1, se mostrará un mensaje indicando al usuario que el mes elegido es incorrecto*/

const mes = prompt('¿Que numero del mes? ( del 1 al 12)')

if( mes > 12 && mes < 1) {
  console.log('es incorrecto, escriba un numero del 1 al 120');
}

switch(mes) {
  case '1' : {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '2': {
    console.log('Este mes tiene 28 dias');
    break;
  }
  case '3': {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '4': {
    console.log('Este mes tiene 30 dias');
    break;
  }
  case '5': {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '6': {
    console.log('Este mes tiene 30 dias');
    break;
  }
  case '7': {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '8': {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '9': {
    console.log('Este mes tiene 30 dias');
    break;
  }
  case '10': {
    console.log('Este mes tiene 31 dias');
    break;
  }
  case '11': {
    console.log('Este mes tiene 30 dias');
    break;
  }
  case '12': {
    console.log('Este mes tiene 317 dias');
    break;
  }
}

