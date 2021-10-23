class Inmobiliaria {
  pisos = [];

  constructor(nombre) {
    this.nombre = nombre;
  }
 /////////////////////////////////////////////////////////////////
  
 addPiso(piso) {   // *metodo ,que me haga                            lo siguiente:  que a                  
    this.pisos.push(piso);
  }

  quitarPiso(nombrePiso) {
    const indexPiso = this.pisos.findIndex((piso) => {return nombrePiso === piso.nombre});
    this.pisos.splice(indexPiso, 1);
  }

  mostrarPisos(array=this.pisos){  //* si me pasan parametro que primero tomen array, y si no me pasan nada que el parametro sea this.piso
    array.forEach( (piso) => {
      console.log(piso.nombre);
    } )
  }
  mostrarOcupados() {
    const arrOcupados = this.pisos.filter((piso) => piso.alquilado); //* recorrer cada elemento con filters
    this.mostrarPisos(arrOcupados);
  }

}
export {Inmobiliaria};  