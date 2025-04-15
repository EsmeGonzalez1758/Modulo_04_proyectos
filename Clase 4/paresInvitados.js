const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arreglo) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arreglo.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arreglo[inicio][0] === arreglo[siguiente][0]) {
            return [arreglo[inicio], arreglo[siguiente]]; // Devuelve el par
        }

        // Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
