import { Inmobiliaria  } from './classes/Inmobiliaria.js';
import { Piso } from './classes/Piso.js';



const pisosIvan = new Inmobiliaria('Pisos Ivan');

const pisoPlaya = new Piso('Playa 1', 'calle Oveja, 2', 700);
const pisoCiudad = new Piso('Ciudad 1', 'calle Marinero, 1', 900);
const pisoPueblo = new Piso('Pueblo 1', 'calle Vaca, 1', 60);
const pisoPueblo2 = new Piso('Pueblo 2', 'calle Vaca, 2', 600);

console.log(pisoPlaya);

//console.log(pisoPlaya.precio);

pisosIvan.addPiso(pisoPlaya);
pisosIvan.addPiso(pisoCiudad);
pisosIvan.addPiso(pisoPueblo);
pisosIvan.addPiso(pisoPueblo2);
casaVict.addPiso(pisoPueblo)