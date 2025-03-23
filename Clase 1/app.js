// Importar la función y el array desde viajes.js
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    const numeroPersonas = 6; // Ejemplo de número de personas

    // Registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-08-10", "Avión");
    registrarDestino("Tokio", "2024-09-05", "Avión");
    registrarDestino("Sídney", "2024-10-10", "Tren");
    registrarDestino("Berlín", "2024-11-20", "Avión");
    registrarDestino("Roma", "2024-12-25", "Tren");
    registrarDestino("Madrid", "2025-01-15", "Avión");
    registrarDestino("Dubai", "2025-02-10", "Avión");

    // Mostrar el itinerario de los viajes
    mostrarItinerario(numeroPersonas); // Llamar a la función para mostrar itinerario
};

// Ejecutar la aplicación
iniciarApp(); // Iniciar la aplicación
