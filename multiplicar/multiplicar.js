const fs = require('fs');
const colors = require('colors');

let listarTabala = (base, limit) => {
    return new Promise( (resolve, reject) => {
        if(!Number(base)) {
            reject(`${base} no es un numero`);
            return;
        }
        if(!Number(limit)) {
            reject(`${limit} no es un numero`);
            return;
        }

        let data = '';

        for(let i = 0; i <= limit; i++) {
            data += `${base} x ${i} = ${ base * i }\n`;
        }

        console.log(data.red);
    });
};

let crearArchivo = (base, limit) => {
    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject('No es un numero');
            return;
        }
        if(!Number(limit)) {
            reject(`${limit} no es un numero`);
            return;
        }
        let data = '';

        for(let i = 0; i <= limit; i++) {
            data += `${base} x ${i} = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            reject(err);
        }else{
            resolve(`taba-${base}.txt`);
        }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabala
};

