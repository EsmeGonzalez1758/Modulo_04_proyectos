# 🎁 Proyecto de Búsqueda de Regalos
Este proyecto tiene como objetivo implementar una función recursiva que permita buscar un regalo específico en una lista de regalos. Utiliza la técnica de recursión para dividir el problema en partes más pequeñas y determinar si un regalo está presente en la lista.

## 🎯 Objetivos
- Practicar el uso de la recursión para resolver problemas de búsqueda en arreglos.
- Familiarizarse con la manipulación de arreglos y el uso de índices en JavaScript.

## 📝 Descripción del problema 
El problema consiste en buscar un regalo específico en un arreglo de regalos. La solución debe ser capaz de verificar cada elemento del arreglo y determinar si el regalo buscado está presente. Si el regalo se encuentra, se debe devolver su posición; si no, se debe indicar que no está disponible. La búsqueda debe realizarse de manera recursiva, utilizando una función que itere sobre el arreglo.e.

## 💻 Código
[![image.png](https://i.postimg.cc/T3HgZsnX/image.png)](https://postimg.cc/nXBXm0dd)
Se define un arreglo llamado gifts que contiene una lista de nombres de regalos. Este arreglo es el conjunto de datos sobre el cual se realizará la búsqueda.

[![image.png](https://i.postimg.cc/wvF6GCsX/image.png)](https://postimg.cc/G88wBSKt)
Se declara la función findGift, que toma tres parámetros: gifts que es el arreglo de regalos , giftName que es el nombre del regalo que se busca y index que es un índice que se utiliza para rastrear la posición actual en el arreglo, inicializándose en 0 por defecto.

[![image.png](https://i.postimg.cc/zDSd9JvZ/image.png)](https://postimg.cc/Wtz6Zc0X)   
Aquí se verifica si el índice actual es igual a la longitud del arreglo. Si esto es cierto, significa que hemos revisado todos los elementos y el regalo no se encuentra en la lista. En este caso, se devuelve un mensaje que indica que el regalo no está disponible.

[![image.png](https://i.postimg.cc/RCst38bJ/image.png)](https://postimg.cc/F1Sz8Pvh)
En esta parte se comprueba si el regalo en la posición actual del arreglo es igual al regalo que estamos buscando. Si coincide, se devuelve un mensaje que indica que el regalo ha sido encontrado y muestra su posición en el arreglo.

[![image.png](https://i.postimg.cc/T372QMgn/image.png)](https://postimg.cc/75zyYRBL)
Si no se cumple ninguno de los casos anteriores, se realiza una llamada recursiva a la función findGift, pasando el mismo arreglo y el nombre del regalo, pero incrementando el índice en 1. Esto permite continuar la búsqueda en el siguiente elemento del arreglo.

[![image.png](https://i.postimg.cc/Gh5yFvsm/image.png)](https://postimg.cc/fJYyZtKG)  
En esta sección, se define una variable giftToFind con el valor "Lego" y se llama a la función findGift para buscar este regalo en el arreglo gifts. Se espera que la función devuelva un mensaje indicando que "Lego" está en la posición 3 del arreglo.

[![image.png](https://i.postimg.cc/hPpHptSj/image.png)](https://postimg.cc/tYnSgynQ)   
Finalmente, se redefine la variable giftToFind con el valor "Camión" y se llama nuevamente a la función findGift para buscar este regalo. Se espera que la función devuelva un mensaje indicando que "Camión" no está en la lista de regalos.

## 🔎 Resultado Final 
[![image.png](https://i.postimg.cc/9QZRT054/image.png)](https://postimg.cc/pmVLM2dx)