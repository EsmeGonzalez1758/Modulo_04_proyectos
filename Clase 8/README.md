# 📝 Gestor de Notas
El Gestor de Notas es una aplicación sencilla diseñada para facilitar la creación, visualización y eliminación de notas. Utiliza un archivo JSON para almacenar las notas de manera persistente, permitiendo a los usuarios gestionar sus recordatorios y tareas de forma eficiente. 
## 🎯 Objetivo

El objetivo principal de este proyecto es proporcionar una herramienta fácil de usar que permita a los usuarios:
- **➕ Agregar** notas con un título y contenido.
- **📜 Listar** todas las notas guardadas en el sistema.
- **❌ Eliminar** notas específicas por su título.

## ⚠️ Problemática

En la vida cotidiana, es común que las personas se enfrenten a la dificultad de recordar tareas, citas y otros compromisos importantes. Muchas veces, la falta de un sistema organizado para gestionar esta información puede llevar a olvidos y estrés. Este proyecto aborda esta problemática al ofrecer una solución simple y accesible que permite a los usuarios almacenar y gestionar sus notas de manera efectiva, minimizando el riesgo de olvidar tareas importantes.

## ⭐ Características

- 🗄️ Almacenamiento de notas en formato JSON.
- 💻 Interfaz de línea de comandos para interactuar con el gestor de notas.
- 🛠️ Funciones para agregar, listar y eliminar notas.

## 📦 Requisitos
- Node.js
- npm (Node Package Manager)
- Visual Studio Code


## 💻 Código
### 1. Importación del Módulo fs
Esta línea importa el módulo fs (File System) de Node.js, que permite interactuar con el sistema de archivos, como leer y escribir archivos.
[![image.png](https://i.postimg.cc/KvgrqZhb/image.png)](https://postimg.cc/1fsq41z7)

### 2. Ruta del Archivo
Aquí se define la ruta del archivo donde se almacenarán las notas. En este caso, el archivo se llama notas.json y está ubicado en la carpeta "Clase 8".
[![image.png](https://i.postimg.cc/7Lq3Z0GP/image.png)](https://postimg.cc/bZFD6G94)

### 3. Comentario de la Función agregarNota
Esta línea proporciona una breve descripción de lo que hace la función. Indica que la función se encarga de añadir una nueva nota a un archivo específico (en este caso, notas.json).
[![image.png](https://i.postimg.cc/L4gN7kjG/image.png)](https://postimg.cc/mhRY1HXS)

### 4. Función agregarNota
Esta función agrega una nueva nota al archivo notas.json. Se explicará cada Línea:    
**❖ Inicialización let notas = [];** Se inicializa un array vacío para almacenar las notas.    
**❖ Comprobación de Existencia if (fs.existsSync(filePath)) {...}** Verifica si el archivo notas.json ya existe.    
**❖ Lectura de Notas Existentes const data = fs.readFileSync(filePath, 'utf8');** Lee el contenido del archivo y lo almacena en data.     
**❖ Parseo de Datos notas = JSON.parse(data);** Convierte el contenido JSON del archivo en un array de objetos JavaScript.   
**❖ Creación de Nueva Nota const nuevaNota = { titulo, contenido };** Crea un objeto que representa la nueva nota con su título y contenido.    
**❖ Agregar Nueva Nota notas.push(nuevaNota);**Añade la nueva nota al array de notas.    
**❖ Sobrescribir el Archivo fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));** Convierte el array de notas de nuevo a formato JSON y lo escribe en el archivo, sobrescribiendo el contenido anterior.         
**❖ Mensaje de Éxito console.log('Nota agregada con éxito.');** Imprime un mensaje en la consola indicando que la nota se ha agregado correctamente.   
[![image.png](https://i.postimg.cc/52g3vsMQ/image.png)](https://postimg.cc/87FMgBcT)

### 5. Función listarNotas
Esta función lista todas las notas almacenadas en el archivo.Se explicará cada Línea:    
**❖ Comprobación de Existencia: if (fs.existsSync(filePath)) {...}** Verifica si el archivo notas.json existe.   
**❖ Lectura de Notas const data = fs.readFileSync(filePath, 'utf8');** Lee el contenido del archivo.   
**❖ Parseo de Datos const notas = JSON.parse(data);** Convierte el contenido JSON en un array de objetos.   
**❖ Impresión de Notas notas.forEach(nota => {...});** Itera sobre cada nota y muestra su título y contenido en la consola.   
**❖ Mensaje de No Hay Notas console.log('No hay notas guardadas.');** Si no hay notas, imprime un mensaje indicando que no hay notas guardadas.     
[![image.png](https://i.postimg.cc/dthy6tZj/image.png)](https://postimg.cc/hfqvPnrX)

### 6. Función eliminarNota
Esta función elimina una nota específica por su título. Se explicará cada Línea:   
**❖ @param {string} titulo** Esta línea indica de manera clara que la función tiene como propósito eliminar una nota específica, utilizando su título como referencia.   
**❖ Comprobación de Existencia if (fs.existsSync(filePath)) {...}** Verifica si el archivo notas.json existe.  
**❖ Lectura de Notas const data = fs.readFileSync(filePath, 'utf8');** Lee el contenido del archivo.   
**❖ Parseo de Datos const notas = JSON.parse(data);** Convierte el contenido JSON en un array de objetos.  
**❖ Filtrado de Notas const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);** Crea un nuevo array que contiene solo las notas que no coinciden con el título que se desea eliminar.   
**❖ Sobrescribir el Archivo fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));** Escribe las notas restantes en el archivo, eliminando la nota especificada.  
**❖ Mensaje de Éxito: console.log(Nota con título "${titulo}" eliminada.);** Imprime un mensaje en la consola indicando que la nota ha sido eliminada.  
[![image.png](https://i.postimg.cc/s2KWKnyt/image.png)](https://postimg.cc/JyDtz5sq)

### 7. Ejecución de Funciones
Estas líneas ejecutan las funciones siguientes:  
☸ Lista todas las notas.   
☸ Elimina la nota con el título "Compras".   
☸ Lista nuevamente las notas para mostrar el resultado después de la eliminación.   
[![image.png](https://i.postimg.cc/mD2fvyJx/image.png)](https://postimg.cc/94SnTZc1)

## 🔎 Resultado Final 
[![image.png](https://i.postimg.cc/MKjT3z17/image.png)](https://postimg.cc/YhMMhKn0)

[![image.png](https://i.postimg.cc/tR6J2X3h/image.png)](https://postimg.cc/LhHmsF0X)