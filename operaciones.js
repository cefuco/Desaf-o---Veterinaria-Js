const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    const citas = leerCitas();
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log(`Cita registrada: ${JSON.stringify(nuevaCita)}`);
}

function leer() {
    const citas = leerCitas();
    console.log('Citas registradas:');
    citas.forEach(cita => console.log(JSON.stringify(cita)));
}

function leerCitas() {
    try {
        const citas = fs.readFileSync('citas.json', 'utf8');
        return JSON.parse(citas);
    } catch (err) {
        return [];
    }
}

module.exports = { registrar, leer };
