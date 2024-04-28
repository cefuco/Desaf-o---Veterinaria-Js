const { registrar, leer } = require('./operaciones.js');
const operacion = process.argv[2];
const args = process.argv.slice(3);

if (operacion === 'registrar') {
    const [nombre, edad, tipo, color, enfermedad] = args;
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida');
}
