//* 1.Metodo filter-
//* Devuelve un nuevo array con todos los números que no son pares.
// array.filter(funtion(element)){
 // return element.  ;
//}) ;

const arrayNum = [5,9,58,48,1];
let arrayNuevo=[];


const filter =  arrayNum.filter(function(impar){
  return impar % 2 ==!0;
})


console.log(`Los numeros impares son: ${filter}`); //Los numeros impares son: 5,9,1










// const impares = (impares) => {
  //   if(impares % 2 !==0){
  // let resultado= arrayNuevo.push(impares)
//     return impares;
//   }
// }