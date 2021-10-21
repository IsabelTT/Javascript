//4to condicionales: crea un programa que te pregunte el dia de la semana y te devuelve el memu de ese dia

const diaSemana = prompt ('¿Que dia de la semana es?');
const menudia = diaSemana.toLocaleLowerCase().trim ();
if (diaSemana ==='lunes') {
  console.log('Este es el menu del dia lunes');
} else if ( diaSemana ==='martes') {
  console.log('Este es el menu del dia martes');
} else if ( diaSemana === 'miercoles' ) {
  console.log('Este es el menu del dia miercoles');
}else if ( diaSemana ==='jueves') {
  console.log('Este es el menu del dia Jueves');
} else if ( diaSemana ==='viernes') {
  console.log('Este es el menu del dia Viernes');
}else if ( diaSemana ==='sabado') {
  console.log('Este es el menu del dia Sabado');
}else {
  console.log('Este es el menu del dia Domingo');
}10
