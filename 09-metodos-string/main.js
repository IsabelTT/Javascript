const frase = '¡Hola gente!';
let fraseCambiada = '';

//* toUpperCase() & toLowerCase()

fraseCambiada = frase.toUpperCase(); // ¡HOLA GENTE!
fraseCambiada = frase.toLowerCase(); // ¡hola gente!



//* trim() -> quita espacios delante y detrás
const fraseEspacios = '    Hola     ';
const fraseSinEspacios = fraseEspacios.trim(); // 'Hola'
console.log(fraseEspacios);
console.log(fraseSinEspacios);  



//* indexOf -> Devuelve la posición donde está el texto que hemos puesto dentro del paréntesis

console.log(frase.indexOf('a')); // 4
console.log(frase.indexOf('z')); // -1 -> cuando no encuentra coincidencias
console.log(frase.indexOf('gente')); // 6




//* replace() -> Busca el primer parámetro de los paréntesis y lo cambia por el segundo
fraseCambiada = frase.replace('gente', 'people'); // ¡Hola people!


//* slice() & substr()
// El segundo parámetro de slice() me dice en qué índice quieres acabar de cortar
fraseCambiada = frase.slice(2); // ola gente!
fraseCambiada = frase.slice(2, 4); // ol
fraseCambiada = frase.slice(2, -2); // ola gent

// El segundo parámetro de substr() me dice qué longitud de caracteres quiero que tenga.
fraseCambiada = frase.substr(2); // ola gente!
fraseCambiada = frase.substr(2, 2); // ol 
fraseCambiada = frase.substr(2,5); // ola g


//* split() -> Convierte el string en un ARRAY 
  // Como parámetro tenemos que poner qué caracteres en concreto quieres que partan el string para convertirlo en array

  fraseCambiada = frase.split(' '); // ['¡Hola', 'gente!']

  // Si ponemos unas comillas vacías, entenderá que queremos hacer un nuevo array con cada letra del string
  
  fraseCambiada = frase.split('');

  // Si no ponemos nada como parámetro, pondrá el string entero como el primer elemento del arreglo

  fraseCambiada = frase.split(); // ['¡Hola gente!']

  fraseCambiada = frase.split('e'); // ['¡Hola g', 'nt', '!']

  const frase2 = 'perros,gatos,pájaros,ovejas,cabras,vacas,gallinas,pollitos';
  const arrayAnimales = frase2.split(',');
  console.log(arrayAnimales); 


  //* includes() -> devuelve true or false según encuentre el string que le pides o no
    // el segundo parámetro le diría desde dónde queremos que empiece a contar

  fraseCambiada = frase.includes('a'); // true
  fraseCambiada = frase.includes('a', 5); // false



console.log('Frase:          ' , frase);
console.log('Frase cambiada: ' , fraseCambiada);