### **Ejercicio classes 01.**

Crea 2 archivos JavaScript, uno será el `main.js` y el otro el que contendrá la clase `User.js`.

Haz la importación de la clase dentro de `main.js`.

Crear la `class User`

* Todos los objetos tendrán la propiedad `isLogged = true` por defecto.
* Crea 3 propiedades privadas:
  * `firstName`
  * `lastName`
  * `email`

En `main.js` crea dos usuarios nuevos con datos distintos.

---

Cread el setter que modificará el email:

* No puede ser texto vacío o número 
* Tiene que contener por lo menos una arroba
* Si está mal imprimir error

---

Crea un setter para el `firstName` que pase un filtro básico de textos.

* Crear un método dentro de `User` que se llame `capitalize()` que le pases un texto y te lo devuelva capitalizado.

* Antes de guardar el texto en `firstName` tendremos que convertirlo en capitalizado con el método `capitalize()`.

---

Añade la propiedad que todos los objetos tendrán de serie -> `courses = []`

Añadiremos algunos cursos entro del array.

* Creamos un método que añada un curso al arreglo `courses`.
* Añadimos los cursos desde `main.js`

