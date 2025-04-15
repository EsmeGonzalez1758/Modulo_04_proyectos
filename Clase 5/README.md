# 🌟 Encontrar la Palabra Más Larga
Este proyecto ofrece una herramienta para identificar la palabra más larga en un texto. Es útil para escritores, estudiantes y cualquier persona interesada en analizar textos.

## 🎯 Objetivo

El objetivo de este proyecto es crear una función que permita identificar la palabra más larga en un texto dado. Esta herramienta es útil para escritores, estudiantes y cualquier persona interesada en analizar textos.

## 📜 Descripción

La función `findLongestWord` toma un párrafo de texto como entrada y devuelve la palabra más larga encontrada en ese texto. Utiliza el método de división de cadenas y un bucle para comparar las longitudes de las palabras. Es una solución simple y efectiva para este problema.

## 💻 Código

A continuación se presenta la explicación del codigo:

### ☸ 1. Función
Esta línea define la función llamada findLongestWord que tiene como parámetro text donde se le pasa una cadena de encuentro que se debe analizar.
[![image.png](https://i.postimg.cc/gjYxS3cC/image.png)](https://postimg.cc/xJ4jqJz5)

### ☸ 2. Division del Texto en Palabras
divide la cadena de texto en el método . split(‘’) para un arreglo de palabra se divide al separar la palabra por espacios Por ejemplo; “JavaScript es un lenguaje” pasa a “JavaScript, es, un, lenguaje”.
[![image.png](https://i.postimg.cc/4364Dn0s/image.png)](https://postimg.cc/p9dt8Vx6)

### ☸ 3. Inicializar la Palabra Más Larga
variable llamada longestWordiniciador dinámico vacío; usada para que contenga la palabra que más “larga es el texto encontrado” en el recorrido del arreglo.
[![image.png](https://i.postimg.cc/1tyRssx6/image.png)](https://postimg.cc/zLPYkmGX)

### ☸ 4. Recorrido del Arreglo de Palabras
se inicia un bucle for que recorrerá cada palabra del arreglo words, la variable i se pone para que acceda cada palabra.
[![image.png](https://i.postimg.cc/qq5psKNX/image.png)](https://postimg.cc/9wy3Vrtr)

### ☸ 5. Comprobar las Longitudes
Tu palabra de dentro del loop está comparando si la longitud de la palabra actual es mayor que la de longestWord; entonces, words[i] es la nueva palabra más larga.
[![image.png](https://i.postimg.cc/NfKsgdnN/image.png)](https://postimg.cc/HVCDz9d5)

### ☸ 6. Actualizar la Palabra Mas Larga
Si la condición anterior se da, establece la variable longestWord a la palabra actual, porque es más larga que la mejor palabra que se llevaba en el recorrido
[![image.png](https://i.postimg.cc/qvnpKz4y/image.png)](https://postimg.cc/SnS0FQXx)

### ☸ 7. Retornar la Palabra Más Larga
después de que el bucle, retorna sea un cual es el ambargo de retorno; en este caso es la variable que mas largo es que coincidará.
[![image.png](https://i.postimg.cc/qM6rfztS/image.png)](https://postimg.cc/ppv4zVJJ)

## 🔎 Resultado Final 
constante de text que tendra el ejemplo de string; recibe findLongestWords pasado por parámetros encontrar y se imprima en consola
[![image.png](https://i.postimg.cc/W3zKMHgC/image.png)](https://postimg.cc/mzx84Vdy)

[![image.png](https://i.postimg.cc/V6hh4WF6/image.png)](https://postimg.cc/34g9xpV5)
