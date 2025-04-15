# 🛍️ Proyecto: Métodos de Arreglos en JavaScript

## 📌 Objetivo

Este proyecto tiene como propósito practicar algunos de los métodos más comunes para manipular arreglos en JavaScript, incluyendo `filter()`, `sort()`, `map()`, `reduce()`, `some()`, `every()` e `includes()`.

A través de un proyecto práctico una tienda online con productos se explora cómo filtrar, ordenar, transformar y analizar datos utilizando estos métodos.

---

## 🧠 Descripción del Problema

Eres la persona encargada de gestionar los productos de una tienda en línea. Cuentas con un listado de productos que contienen propiedades como nombre, precio y categoría. La meta es:

✧Filtrar los productos por precio.
✧Ordenarlos alfabéticamente.
✧Obtener solo sus nombres.
✧Realizar algunos análisis adicionales para los productos

---

## 📦 Tecnologías utilizadas

- Lenguaje: **JavaScript**
- Entorno: **Node.js**
- Herramientas: Visual Studio Code, consola del navegador.

---

## 🧩 Funcionalidades implementadas

❥ ✅ Crear un arreglo de objetos que representan productos.'   
❥ ✅ Usar `filter()` para obtener productos con precio menor a $100.
❥ ✅ Usar `sort()` para ordenarlos alfabéticamente por nombre.  
❥ ✅ Usar `map()` para generar un nuevo arreglo con solo los nombres. 
❥ ✅ Mostrar los resultados en la consola.  
❥ ✅ Usar `reduce()` para calcular el total del precio de los productos filtrados.  
❥ ✅ Usar `some()` para verificar si hay al menos un producto de la categoría "Tecnologia".  
❥ ✅ Usar `every()` para confirmar si todos los productos filtrados cuestan menos de $100.  
❥ ✅ Usar `includes()` para saber si un producto específico (como "Teclado") está en la lista.

---
## 📝 Código implementado
### 🔸 1. Arreglo
Creación de un arreglo de objetos, donde cada objeto representa un producto de la tienda. Cada producto tiene:

◈ **Nombre:** el nombre del producto.

◈ **Precio:** el valor numérico en pesos.

◈ **Categoria:** tipo o sección a la que pertenece.

[![image.png](https://i.postimg.cc/MZRqcn5w/image.png)](https://postimg.cc/YjpJZqTD)

### 🔸 2. Filtrar productos con precio menor a $100
📌 `filter()` recorre el arreglo productos y devuelve solo aquellos que cumplan la condición que su precio sea menor a 100.
[![image.png](https://i.postimg.cc/nLgfrxQM/image.png)](https://postimg.cc/xkv4pW5S)

### 🔸 3. Ordenar los productos por nombre (alfabéticamente)
📌 Usamos `sort()` para ordenar los productos alfabéticamente por su nombre.

🔧 .localeCompare() compara dos cadenas de texto según el alfabeto.

📌 Usamos [...productosFiltrados] para crear una copia y no modificar el original.

[![image.png](https://i.postimg.cc/gJhF67vs/image.png)](https://postimg.cc/WFsfBXYq)

### 🔸 4. Obtener solo los nombres
📌 `map()` crea un nuevo arreglo donde solo extraemos el nombre de cada producto del arreglo ordenado.
[![image.png](https://i.postimg.cc/Bb5rm171/image.png)](https://postimg.cc/LgXQXhpH)

### 🔸 5. Sumar el precio de todos los productos que fueron filtrados
💠 `reduce()` acumula un valor. En este caso, estamos sumando el precio de todos los productos filtrados.

💠 total comienza en 0.

💠 En cada paso se suma el precio del siguiente producto.

[![image.png](https://i.postimg.cc/BZyP3P6G/image.png)](https://postimg.cc/qgsvXRym)
### 🔸 6. Verificar si hay algún producto en la categoría "Tecnología"
📌 `some()` devuelve true si al menos uno de los productos cumple la condición: que la categoría sea "Tecnología".
[![image.png](https://i.postimg.cc/s2Vvmpn5/image.png)](https://postimg.cc/4YSfNhR3)

### 🔸 7. Verificar si todos cuestan menos de $100'
📌 `every()` devuelve true solo si todos los productos cumplen la condición: precio menor a 100.
[![image.png](https://i.postimg.cc/rzXprW00/image.png)](https://postimg.cc/K3fFX15x)

### 🔸 8. Verificar si “Teclado” está en la lista
📌`includes()` verifica si "Teclado" está dentro del arreglo nombresProductos.

[![image.png](https://i.postimg.cc/KcKrt23x/image.png)](https://postimg.cc/MXSQ8gYF)
---
## 🔎 Resultado Final 
[![image.png](https://i.postimg.cc/2jPdwKnv/image.png)](https://postimg.cc/nMGQVTRc)