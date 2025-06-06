const fs = require('fs');

// Ruta del archivo de notas
const filePath = 'Clase 8/notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];
    if (fs.existsSync(filePath)) {
    // Leer las notas existentes antes de agregar la nueva.
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

  // Sobrescribir el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
    // Leer y parsear el contenido del archivo.
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    
    console.log('Notas guardadas:');
    notas.forEach(nota => {
    console.log(`Título: ${nota.titulo}, Contenido: ${nota.contenido}`);
    });
} else {
    console.log('No hay notas guardadas.');
}
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
if (fs.existsSync(filePath)) {
    // Leer todas las notas.
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    // Filtrar las notas y eliminar la que coincida con el título.
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // Sobrescribir el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
    console.log('No hay notas para eliminar.');
    }
}

agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Habito', 'Levantarse Temprano' )
agregarNota('Comida','Frutas')
listarNotas();
eliminarNota('Compras');
listarNotas();
