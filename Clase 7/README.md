# Búsqueda del Máximo en un Arreglo con Divide y Vencerás

## 📝 Introducción
El paradigma de **Divide y Vencerás** es una técnica fundamental en la programación que permite abordar problemas complejos dividiéndolos en subproblemas más manejables. Este enfoque es ampliamente utilizado en algoritmos eficientes y se aplica en diversas áreas de la informática.

## 🎯 Objetivo
El objetivo de este proyecto es implementar una función que utilice el enfoque de **Divide y Vencerás** para encontrar el número máximo en un arreglo de números. A través de esta práctica, se busca familiarizar al alumno con la técnica de dividir un problema en partes más pequeñas y resolverlo recursivamente.

## 📊 Descripción del Problema
Dado un arreglo de números, se requiere implementar una función que encuentre el número máximo utilizando el enfoque de **Divide y Vencerás**. Los pasos a seguir son:

1. **Dividir** el arreglo en dos mitades.
2. **Resolver** el problema recursivamente para encontrar el máximo en cada mitad.
3. **Combinar** las soluciones comparando los máximos de ambas mitades.
4. **Devolver** el número máximo encontrado.

## 💻 Código
### 1.- función
Se declara la función findMax que toma un parámetro arr, que es el arreglo de números en el que se buscará el máximo.
[![image.png](https://i.postimg.cc/9MFrvB4T/image.png)](https://postimg.cc/67gWZnf5)

### 2.- si el arreglo tiene un solo elemento, devuélvelo
Se verifica si el arreglo tiene solo un elemento (arr.length === 1). Si es cierto, se devuelve ese único elemento (arr[0]) como el máximo, ya que no hay otros elementos que comparar.
[![image.png](https://i.postimg.cc/s23XhJ48/image.png)](https://postimg.cc/qNZ4fyYX)

### 3.- Cálculo del Punto Medio
Se calcula el índice del punto medio del arreglo usando Math.floor(arr.length / 2), que divide la longitud del arreglo por 2 y redondea hacia abajo. Esto se utiliza para dividir el arreglo en dos mitades.
[![image.png](https://i.postimg.cc/bvLvH26v/image.png)](https://postimg.cc/xkJY9qVr)

### 4.- Obtener la Primera Mitad
Se utiliza el método slice para crear un nuevo arreglo left, que contiene los elementos desde el inicio del arreglo hasta el índice mid (sin incluirlo).
[![image.png](https://i.postimg.cc/QM6TNPZS/image.png)](https://postimg.cc/KKMzJ0zg)

### 5.- Obtener la Segunda Mitad
Similar al paso anterior, se crea un nuevo arreglo right que contiene todos los elementos desde el índice mid hasta el final del arreglo.
[![image.png](https://i.postimg.cc/SKtnbMcv/image.png)](https://postimg.cc/7C0Hgbs3)

### 6.- Llamar Recursiva para la Primera Mitad:
Se llama a la función findMax de manera recursiva con el arreglo left, y se almacena el resultado en la variable leftMax, que contendrá el máximo de esa mitad.
[![image.png](https://i.postimg.cc/Twzhpv7j/image.png)](https://postimg.cc/Q9qjywrV)

### 7.- Llamar Recursiva para la Segunda Mitad:
 Se hace lo mismo para el arreglo right, llamando a findMax y almacenando el resultado en rightMax.
 [![image.png](https://i.postimg.cc/ZKhCmZy4/image.png)](https://postimg.cc/BtMq5rgV)

 ### 8.- Combinar Resultados: 
 Se utiliza Math.max para comparar leftMax y rightMax, y se devuelve el mayor de los dos como el resultado de la función. Esto garantiza que se obtenga el máximo del arreglo completo.
 [![image.png](https://i.postimg.cc/rwD6YRFm/image.png)](https://postimg.cc/5XWkX0zd)

 ### 9.- Entrada y salida
 Se define un arreglo numbers con algunos valores numéricos que se utilizarán como entrada para probar la función. Se llama a findMax con el arreglo numbers y se imprime el resultado en la consola. 
 [![image.png](https://i.postimg.cc/63wmw8wC/image.png)](https://postimg.cc/3ySBFJkw)

 ## 🔎 Resultado Final 
 [![image.png](https://i.postimg.cc/Hx2PLTsR/image.png)](https://postimg.cc/N9KxJqXk)