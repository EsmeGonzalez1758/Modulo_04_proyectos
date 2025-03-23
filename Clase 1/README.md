# Proyecto: Introducción a ECMAScript
#### Este proyecto es un planificador simple de viajes que permite a los usuarios registrar destinos y fechas, así como calcular el costo total de un viaje. En este proyecto, practicarás los conceptos relacionados con ECMAScript que has visto hasta este momento.

## Descripción
#### El planificador de viajes permite a los usuarios:

#### ✤ Registrar destinos de viaje.
#### ✤ Especificar la fecha del viaje.
#### ✤ Calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte elegidas.

## Objetivo
#### El objetivo de este proyecto es mejorar mis habilidades en JavaScript y aplicar las nuevas características de ECMAScript (ES6 y posteriores) para desarrollar un código más limpio y eficiente. Además, busca crear una aplicación funcional que me permita entender mejor la gestión de datos y la interacción con el usuario.

## Características de ECMAScript Utilizadas
#### Este proyecto hace uso de varias características de ECMAScript que mejoran la legibilidad y la funcionalidad del código:
#### ✤ Funciones de flecha: Simplifican la sintaxis de las funciones.
#### ✤ Desestructuración: Permite extraer valores de arreglos y objetos de manera más sencilla.
#### ✤ Plantillas literales: Facilitan la creación de cadenas de texto que incluyen variables.
#### ✤ Módulos ES6: Permiten organizar el código en diferentes archivos, mejorando la modularidad y reutilización.

## Estructura del Proyecto
#### El proyecto está dividido en dos archivos principales:
#### ✤ viajes.js: Contiene la lógica para registrar destinos, calcular costos y mostrar el itinerario.
#### ✤ app.js: Archivo principal que inicia la aplicación y registra varios destinos.

## Funcionalidades
### 1. Registrar Destinos
[![image.png](https://i.postimg.cc/XYGjWkDk/image.png)](https://postimg.cc/w1z8cLz1)
#### Esta función permite registrar un nuevo destino de viaje. Crea un objeto nuevoViaje que incluye el destino, la fecha, el transporte y el costo calculado mediante la función calcularCosto. Luego, este objeto se agrega al arreglo destinos.

### 2. Calcular Costos
[![image.png](https://i.postimg.cc/B6gpvDwm/image.png)](https://postimg.cc/WFdgWDVZ)

[![image.png](https://i.postimg.cc/htDdS6qR/image.png)](https://postimg.cc/HVNxzSx6)
#### Esta función calcula el costo del viaje basado en el destino y el medio de transporte. Utiliza un switch para establecer un costo base dependiendo del destino. Luego, agrega un costo adicional según el medio de transporte elegido (Avión o Tren) y devuelve el costo total.
### 3. Calcular Descuentos
[![image.png](https://i.postimg.cc/j5cjkdLW/image.png)](https://postimg.cc/HcJHrm0H)
#### Esta función calcula un descuento del 10% si el número de personas que viajan es mayor a 5. Si no, no aplica ningún descuento.
### 4. Mostrar itineario de viajes
[![image.png](https://i.postimg.cc/MTwGZfh3/image.png)](https://postimg.cc/rdhTQsy5)
#### Esta función muestra un resumen de todos los viajes registrados. Utiliza forEach para imprimir detalles de cada viaje. Luego, calcula el costo total de todos los viajes, aplica cualquier descuento y muestra el costo final.
## Uso
[![image.png](https://i.postimg.cc/0QzVQrDm/image.png)](https://postimg.cc/62NrbWH5)
#### Este bloque de código inicia la aplicación. Define un número de personas y registra varios destinos. Finalmente, llama a la función visualizarResumenViajes para mostrar un resumen de los viajes registrados.