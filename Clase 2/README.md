# Proyecto: Estructuras de Datos - Gestión de Lista de Compras

## Descripción
#### Este proyecto consiste en desarrollar una aplicación sencilla para gestionar una lista de compras. Los usuarios podrán agregar, eliminar y ver los productos que han añadido a su lista.

## Objetivo
##### Permitir que practique los conceptos básicos sobre cómo usar estructuras de datos sencillas, como arreglos y objetos, para resolver problemas del mundo real utilizando JavaScript.

## Características
#### - **Arreglo Dinámico:** Utiliza un arreglo para almacenar la lista de productos.
#### - **Funciones de Flecha:** Implementa funciones de flecha para mejorar la legibilidad del código.
#### - **Control de Duplicados:** Asegura que no haya productos duplicados en la lista.
#### - **Interacción Simple:** Proporciona una interfaz sencilla para agregar, eliminar y mostrar productos.

## Funcionalidades
### 1. Crear un Arreglo Vacío
[![image.png](https://i.postimg.cc/LXm81Hf8/image.png)](https://postimg.cc/hJ3nFRpk)

Esta línea inicializa un arreglo vacío que contendrá los productos de la lista de compras.

### 2. Función para Agregar un Producto
[![image.png](https://i.postimg.cc/Gh8SvvbH/image.png)](https://postimg.cc/kBCcm66m)
#### Esta función permite agregar un nuevo producto al final de la lista, verificando primero si el producto ya existe para evitar duplicados.

### 3. Función para Eliminar un Producto
[![image.png](https://i.postimg.cc/N0zdy0Z1/image.png)](https://postimg.cc/hJVL6KDj)
#### Esta función elimina un producto de la lista si existe, mostrando un mensaje correspondiente dependiendo de si el producto fue encontrado o no.

### 4. Función para Mostrar la Lista Completa
[![image.png](https://i.postimg.cc/YCSN1H68/image.png)](https://postimg.cc/zV9Rr4PR)
#### Esta función imprime todos los productos de la lista, indicando si está vacía. Utiliza forEach para enumerar los productos.

## Uso
[![image.png](https://i.postimg.cc/265FxfNC/image.png)](https://postimg.cc/4Kr9Jq30)

#### ☸ Se utilizan varias llamadas a la función agregarProducto para añadir diferentes elementos a la lista. Esto muestra la capacidad de la aplicación para almacenar múltiples productos y manejar la adición de elementos duplicados.

#### ☸ La función mostrarLista permite al usuario ver todos los productos que ha añadido hasta el momento. Esta función proporciona una vista clara de los elementos en la lista de compras.

#### ☸ La función eliminarProducto permite al usuario quitar un producto específico de la lista. Esto demuestra la funcionalidad de modificación de la lista, asegurando que el usuario pueda gestionar su contenido de manera efectiva.

#### ☸ Al volver a llamar a mostrarLista, se puede observar el estado actualizado de la lista después de realizar cambios. Esto ayuda a confirmar que las operaciones de adición y eliminación se realizaron correctamente.

## Conclusión
#### Este proyecto proporciona una funcionalidad básica para gestionar una lista de compras, utilizando características modernas de JavaScript y ECMAScript. Permite practicar la manipulación de arreglos y funciones, aplicando conceptos fundamentales de programación.