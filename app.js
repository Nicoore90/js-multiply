const fs = require('fs');
//const { argv } = require('process');
const { number } = require('yargs');
const { crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require ('colors')


console.clear()

//console.log(process.argv)
//console.log(argv)


//console.log('base: yargs', argv.base)

//const [,,arg3 = 'base=5'] = process.argv
//const [, base ] = arg3.split('=')


//let base = 10

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(err => console.log(err.underline.red))
