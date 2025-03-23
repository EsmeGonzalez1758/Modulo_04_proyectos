// Arreglo de objetos con información de contactos
const contactos = [
    {
        nombre: "Esmeralda Imelda",
        puesto: "Ingeniera en sistemas",
        empresa: "oracle",
        correo: "esmeralda@gmail.com",
        telefono: "55 1234 5678"
    },
    {
        nombre: "Carlos López",
        puesto: "Ingeniero en Energías Renovables",
        empresa: "EcoTec Solutions",
        correo: "carlos@gmail.com",
        telefono: "55 9876 5432"
    },
    {
        nombre: "Ana Martínez",
        puesto: "licenciado en administracion",
        empresa: "Innovatech",
        correo: "ana@gmail.com",
        telefono: "55 1122 3344"
    }
];

// Función de flecha para generar la tarjeta de presentación
const generarTarjeta = contacto => `
------------------------------
${contacto.nombre}
${contacto.puesto}
${contacto.empresa}
${contacto.correo}
${contacto.telefono}
------------------------------
`;
// Mostrar las tarjetas en la consola
contactos.forEach(contacto => console.log(generarTarjeta(contacto)));
