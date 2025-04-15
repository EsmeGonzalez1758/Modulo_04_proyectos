const productos = [
    { nombre: "Teclado", precio: 90, categoria: "Tecnología" },
    { nombre: "Jeans Azules", precio: 200, categoria: "Ropa" },
    { nombre: "El principito", precio: 90, categoria: "Libros" },
    { nombre: "Raton Inalambrico", precio: 120, categoria: "Tecnología" },
    { nombre: "Cuaderno", precio: 45, categoria: "Papelería" }
    ];

  // 2. Filtrar productos con precio menor a $100
const productosFil = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosFil);

// 3. Ordenar alfabéticamente por nombre del producto
const productosOrdenados = [...productosFil].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);
console.log("Productos Alfabeticamente:", productosOrdenados);

  // 4. Obtener solo los nombres con map
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

  // 5. Calcular el total de los precios de los productos Filtrados
const totalPrecios = productosFil.reduce((total, producto) => total + producto.precio, 0);
console.log("Total del precio de productos filtrados:", totalPrecios);

  // 6. Verificar si hay algún producto en la categoría 'Tecnologia'
const hayTecnologia = productosFil.some(producto => producto.categoria === "Tecnología");
console.log("¿Hay productos de la categoría 'Tecnología'? ", hayTecnologia);

  // 7. Verificar si todos los productos filtrados cuestan menos de $100
const todosSonBaratos = productosFil.every(producto => producto.precio < 100);
console.log("¿Todos los productos filtrados cuestan menos de $100? ", todosSonBaratos);

  // 8. Verificar si "Teclado" está en la lista de nombres de productos
const incluyeTeclado = nombresProductos.includes("Teclado");
console.log("¿El producto 'Teclado' está en la lista? ", incluyeTeclado);
