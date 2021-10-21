// Condicionales 08
// Escribe un programa que pida la hora al suario, perguntando las horas, minuots, y segundos. Se mostrara en pantalla la hora elegida por el usuario un segundo mas tarde.  Si no se pasa una hora correcta se mostrara al usuario


let hora = prompt('¿Que hora es? ');
let minutos = prompt('¿Con cuantos minutos?');
let segundos = prompt('¿Con cuantos segundos?');
var numeroHora = Number(hora);
var numeroMinutos = Number(minutos);
var numeroSegundos = Number(segundos);
myFunction();


// if (numeroHora > 1 && numeroHora <= 24  && numeroMinutos > 1 && numeroMinutos <=60  && numeroSegundos <1 && numeroSegundos <=60) {
//   console.log('son las' + numeroHora + ' horas' + numeroMinutos + 'minutos' + numeroSegundos);
// } 
  

function larotativa(){
  //console.log("ejecutando la rotativa");
  if (((numeroHora >= 0) && (numeroHora <= 24)) && ((numeroMinutos >=0) && (numeroMinutos <=60)) && ((numeroSegundos >=0) && (numeroSegundos <=60))) {  
    console.log('son las' + hora + ' horas' );
    console.log(' con ' + numeroMinutos+ 'minutos');
    console.log('con ' + numeroSegundos+ 'segundos');
    alert(`Son las ${hora} horas con ${minutos} minutos con ${segundos} segundos`);
  }
  else{
    console.log ('no se ingreso correctamente la hora')
    alert("no se ingreso correctamente la hora");
  }
}

function myFunction() {
     setTimeout(() => {
      larotativa();
    }, 1000);
}


// function tiempo() {
// setTimeout(function(){
//   console.log(`Es la ${hora} con ${minutos} con ${segundos} `);
// } 1000);
// }


