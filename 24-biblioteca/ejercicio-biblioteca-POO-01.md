### **Ejercicio Biblioteca**

Crea 2 clases:

* `Biblioteca`
* `Libro`

---

**Biblioteca:**

Propiedades de serie: `catalogo = []`

Propiedades privadas: `nombre`, `estaAbierta`

Métodos: 

* Método que añada un libro al catálogo.
* Método que imprima los títulos de los libros. -> `1.- Harry Potter`
* Método que imprima los libros que quedan disponibles.
* Método que imprima los libros por género.
* Método que alquiler un libro pasándole el número de libro.

---

**Libro:**

Propiedades de serie: `alquilado = false`

Propiedades privadas: `titulo`, `autor`, `paginas`, `genero`.

Métodos:

* Método prestado() que cambiará el estado de `alquilado` a true;
* Método devuelto() que lo cambiará a false.

---

`main.js`

1. Crear un objeto de biblioteca
2. Crear 10 libros.
3. Imprimir títulos de libro en pantalla
4. Alquilar dos o tres libros
5. Mostrar libros disponibles
6. Mostrar libros por género