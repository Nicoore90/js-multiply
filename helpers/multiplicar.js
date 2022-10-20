const fs = require('fs');

/*const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log("====================")
        console.log(`   tabla del ${base}`)
        console.log("====================")
        let salida = ''
        for(let i = 0; i <= 10; i++ ) {
            salida += `${base} x ${i} = ${base*i}\n`
        
        }

        console.log(salida)
        /*fs.writeFile('tabla-5.txt', salida, (err) => {
            if (err) throw err;
            console.log('tabla-5.txt creado')
        })*/


        /*fs.writeFileSync(`tabla-${base}.txt`, salida)
        resolve(`tabla-${base}.txt`)
    })
}*/

const crearArchivo = async(base, listar = false, hasta) => {

    try {
        if (listar){
            console.log("====================")
            console.log(`   tabla del ${base}`)
            console.log("====================")
        }
        let salida = ''
        for(let i = 0; i <= hasta; i++ ) {
            salida += `${base} x ${i} = ${base*i}\n`
        
        }
        if(listar){
            console.log(salida)
            /*fs.writeFile('tabla-5.txt', salida, (err) => {
                if (err) throw err;
                console.log('tabla-5.txt creado')
            })*/
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return(`tabla-${base}.txt`)
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo
}