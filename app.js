
const {crearArchivo, listarTabala} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        listarTabala(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
    break;

    default:
        console.log('comando no reconocido');

}









