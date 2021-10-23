class User {
  isLogged = false;
  courses = [];
  #email;
  #firstName;
  #lastName;

  constructor(firstName, lastName, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
  }

  get completeName(){
    return `${this.#firstName} ${this.#lastName}`;
  }
  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if(newEmail === false || isNaN(newEmail) === false || newEmail.includes('@') === false) {
      console.error('Inserta un email válido');
    }else {
      this.#email = newEmail;
    };
  }
  // Versión más cortita y con el return.
  // set email(newEmail) {
  //   if(!newEmail || !isNaN(newEmail) || !newEmail.includes('@')){
  //     console.error('Inserta un email válido.');
  //     return;
  //   }

  //   this.#email = newEmail;
  // }

  set firstName(newName){
    if(this.#isString(newName)){
      this.#firstName = this.#capitalize(newName);
    }
  }

  addCourse(course){
    if(this.#isString(course)){
      this.courses.push(course)
    }
  }


  // Helpers
  #capitalize(text) {
    return text[0].toUpperCase() + text.substr(1).toLowerCase();
  }
  #isString(text) {
    if(!text || !isNaN(text)) {
      console.error('¡Pásame un string!')
      return false;
    }else{
      return true;
    }
  }


}

export { User };