//Student
//name
//age
//programmingLanguage
//code()
//console.log('Estoy escribiendo codigo"programmingLanguage)


// 1ro crear clase
class Student {

  constructor(name, age, programmingLanguage){
    this.name = name;
    this.age= age;
    this.programmingLanguage = programmingLanguage;
  }
  code(){
    console.log(`Estoy escribiend codigo ${this.programmingLanguage}`);
  }
}

//2 do intanciar
const alumno1 = new Student ('santiago', 12, 'javascript' );