import { User } from './classes/User.js';

const ivan = new User('Ivan', 'Luengo', 'ivluengo@gmail.com');
const carol = new User('Carolina', 'Montero', 'carolina@montero.com');

console.log(ivan); 
console.log(carol); 

console.log(ivan.email)
console.log(ivan.completeName)

ivan.email = 'ivan@email.com';
ivan.firstName = 'pePe';
const curso1 = prompt('Dime el curso al que te apuntas');
ivan.addCourse(curso1);
const curso2 = prompt('Dime el curso al que te apuntas');

ivan.addCourse(curso2);

console.log(ivan); 
