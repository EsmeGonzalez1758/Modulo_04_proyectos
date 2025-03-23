// Arreglo vacío para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto (evita duplicados)
const agregarProducto = (producto) => {
    // Verifica si el producto ya está en la lista
    if (!listaDeCompras.includes(producto)) {
        // Si no está, lo agrega al final del arreglo
        listaDeCompras.push(producto);
        console.log(`${producto} ha sido agregado a la lista.`);
    } else {
        // Si ya está, muestra un mensaje indicándolo
        console.log(`${producto} ya está en la lista.`);
    }
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
    // Busca el índice del producto en la lista
    const indice = listaDeCompras.indexOf(producto);
    // Si el producto existe en la lista
    if (indice !== -1) {
        // Lo elimina utilizando splice
        listaDeCompras.splice(indice, 1);
        console.log(`${producto} ha sido eliminado de la lista.`);
    } else {
        // Si no está en la lista, muestra un mensaje indicándolo
        console.log(`${producto} no está en la lista.`);
    }
};

// Función para mostrar la lista completa
const mostrarLista = () => {
    // Verifica si la lista está vacía
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        // Muestra un encabezado
        console.log("Lista de Compras:");
        // Recorre el arreglo e imprime cada elemento con su índice
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
};

// Ejemplo de uso
agregarProducto("1K Manzanas"); // Agrega "Manzanas" a la lista
agregarProducto("1L Leche"); // Agrega "Leche" a la lista
agregarProducto("Pan"); // Agrega "Pan" a la lista
agregarProducto("1K Huevos"); // Agrega "Huevos" a la lista
agregarProducto("1/2K Queso"); // Agrega "Queso" a la lista
agregarProducto("1 Jugo"); // Agrega "Jugo" a la lista
agregarProducto("1 Arroz"); // Agrega "Arroz" a la lista
agregarProducto("1 Pasta"); // Agrega "Pasta" a la lista
agregarProducto("4 Tomates"); // Agrega "Tomates" a la lista
agregarProducto("1 Pollo"); // Agrega "Pollo" a la lista

// Mostrar la lista después de agregar 10 productos
mostrarLista();

// Intentar agregar un producto duplicado
agregarProducto("1L Leche"); // "Leche" ya está en la lista

// Eliminar dos productos
eliminarProducto("1L Leche"); // Elimina "Leche" de la lista
eliminarProducto("Pan"); // Elimina "Pan" de la lista

// Mostrar la lista después de eliminar productos
mostrarLista();
