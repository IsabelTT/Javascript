  
   class Piso {  
  #alquilado = false;
  fotos = [];
  #nombre; //* Creamos una propiedad privada. Cualquier persona que diga pisoPlaya.#nombre =`'dfa' no lo podra cambiar.

    
  constructor(nombre, direccion, precio) {
    this.#nombre = nombre;  //* # almohadllla para ponerlo privado, 1ro debe crearse - arriba
    this.direccion = direccion;
    this.precio = precio;
  }

  //* Para usar setter se coloca la propiedad de arriba # nombre que esta en privado
  get nombre(){     //*Para obtener valor de propiedad //recupera o consigue el valor para q sea utilizado + tarde. Imprime la propiedad
    return 'Piso: ' + this.#nombre;
  }
   
  set nombre(nuevoNombre) {     //*Para asignar valor a una propiedad //Cambio una propieda que la puse como privada
    if(!nuevoNombre || !isNaN(nuevoNombre)){   //* isNaN = que no sea un numero , y si le colocalmos! seria lo contrario.
      console.log('Tiene que ser un string válido')
      return;
    }
    this.#nombre = nuevoNombre;
  }

  addFoto(foto){
    this.fotos.push(foto);
  }  
  ocupado() {
    this.#alquilado = true;
  }
  desocupado() {
    this.#alquilado = false;
  }

  get alquilado(){
    return this.#alquilado ? 'El piso está alquilado' : '¡Está libre!';
  }

}

export { Piso };