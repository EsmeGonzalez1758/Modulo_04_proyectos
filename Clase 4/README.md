# 🎉 Proyecto de Encontrar Pares de Invitados

Este proyecto en JavaScript tiene como objetivo encontrar pares de invitados cuyos nombres comienzan con la misma letra. Utiliza un enfoque simple para identificar estos pares en un arreglo de nombres.

## 🎯 Objetivo

El objetivo de este proyecto es proporcionar una solución para agrupar nombres de invitados que comparten la misma inicial. Esto puede ser útil en situaciones como la organización de eventos donde se desea identificar rápidamente a los invitados que tienen nombres similares.

## 📜 Descripción del Problema

En muchas ocasiones, al gestionar listas de invitados, puede ser útil identificar rápidamente aquellos que tienen nombres que comienzan con la misma letra. Esto puede ayudar en la organización de asientos, en la creación de etiquetas o simplemente para facilitar la identificación de grupos de personas. Este proyecto aborda este problema al proporcionar una función que toma un arreglo de nombres y devuelve los pares de nombres consecutivos que comparten la misma inicial.

## 💻 Código
### ☆ 1. Arreglo de Invitados
◉ Aquí estamos definiendo un arreglo llamado invitados que contiene una lista de nombres.  
◉ Usamos const para declarar la variable, lo que significa que no se puede reasignar, aunque sí podemos modificar el contenido del arreglo.
[![image.png](https://i.postimg.cc/3Jt8hP90/image.png)](https://postimg.cc/ppnbYcwP)

### ☆ 2. Función
Se define una función llamada encontrarPares que toma un parámetro arreglo, que se espera que sea un arreglo que es el de invitados
[![image.png](https://i.postimg.cc/3wvYgWh2/image.png)](https://postimg.cc/06PTvkbN)

### ☆ 3. Inicialización de Variables
Se inicializan dos variables: inicio (que apunta al primer nombre) y siguiente (que apunta al segundo nombre). Estas variables actúan como punteros para comparar los nombres.
[![image.png](https://i.postimg.cc/JnxgJWsb/image.png)](https://postimg.cc/ygJv4tXd)

### ☆ 4. Bucle while para Iterar a Través del Arreglo
Se utiliza un bucle while que continuará mientras siguiente sea menor que la longitud del arreglo. Esto asegura que no se intentará acceder a un índice fuera de los límites del arreglo.
[![image.png](https://i.postimg.cc/ZnDM7FFn/image.png)](https://postimg.cc/kRKsDSHP)

### 5. Condición para Comparar Iniciales
Dentro del bucle, se compara la inicial del nombre en la posición inicio con la inicial del nombre en la posición siguiente.
arreglo[inicio][0] accede al primer carácter del nombre en la posición inicio.
[![image.png](https://i.postimg.cc/y6ft8s4K/image.png)](https://postimg.cc/0rwctgyX)

### 6. Devolver el Par Encontrado
Si las iniciales son iguales, se devuelve un arreglo que contiene el par de nombres encontrados.
[![image.png](https://i.postimg.cc/mg95j9cZ/image.png)](https://postimg.cc/jDscdLQB)

### ☆ 7. Avanzar los Punteros
Si las iniciales no coinciden, ambos punteros se incrementan para comparar el siguiente par de nombres.
[![image.png](https://i.postimg.cc/wvq49bw3/image.png)](https://postimg.cc/bG59TLcj)

### ☆ 8. Retornar null si No se Encuentra Ningún Par
Si el bucle termina sin encontrar ningún par, se retorna null.
[![image.png](https://i.postimg.cc/qqY1XB4C/image.png)](https://postimg.cc/dZ2RJY7q)

### 9. Llamar a la Función y Mostrar Resultados
Finalmente, se llama a la función encontrarPareja pasando el arreglo invitados como argumento y se imprime el resultado en la consola.
[![image.png](https://i.postimg.cc/5NhPXtsh/image.png)](https://postimg.cc/3dZj6351)

## 🔎 Resultado Final 
[![image.png](https://i.postimg.cc/CxbckVtz/image.png)](https://postimg.cc/0z2G1h9s)


