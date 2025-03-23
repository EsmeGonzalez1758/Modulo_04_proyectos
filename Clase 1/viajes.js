
// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // Crear un nuevo objeto de viaje con destino, fecha, transporte y costo
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte) // Calcular costo del viaje
    };

    // Agregar el nuevo viaje al arreglo de destinos
    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        case "Tokio":
            costoBase = 800;
            break;
        case "Sídney":
            costoBase = 700;
            break;
        case "Berlín":
            costoBase = 450;
            break;
        case "Roma":
            costoBase = 300;
            break;
        case "Madrid":
            costoBase = 350;
            break;
        case "Dubai":
            costoBase = 900;
            break;
        default:
            costoBase = 300; // Costo base para destinos no especificados
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200; // Costo adicional para avión
    } else if (transporte === "Tren") {
        costoBase += 100; // Costo adicional para tren
    }

    return costoBase; // Retornar el costo total calculado
};

// Función para calcular descuentos
const calcularDescuento = (costoTotal, numeroPersonas) => {
    // Aplicar un descuento del 10% si hay más de 5 personas
    if (numeroPersonas > 5) {
        return costoTotal * 0.10; // 10% de descuento
    }
    return 0; // Sin descuento
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = (numeroPersonas) => {
    // Recorrer y mostrar información de cada viaje
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
    });

    // Calcular y mostrar el costo total y descuentos
    const costoTotal = destinos.reduce((total, viaje) => total + viaje.costo, 0);
    const descuento = calcularDescuento(costoTotal, numeroPersonas); // Calcular descuento
    const costoFinal = costoTotal - descuento; // Calcular costo final

    console.log("---------------------------");
    console.log(`Costo Total: $${costoTotal}`);
    if (descuento > 0) {
        console.log(`Descuento aplicado: $${descuento}`);
    }
    console.log(`Costo Final: $${costoFinal}`);
};
