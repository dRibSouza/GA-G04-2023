const mongoose = require('mongoose') 

/*
    Usa desestruturação para obter as variaves de 
    ambiente necessarias para realizar a conexão ao banco de dados
*/

const{
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function(){

    //Conecta ao banco de dados
    mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => console.log('=> MONGOSE! conectado com sucesso ao servidor')
    )

    mongoose.connection.on('desconnected', () => console.log('=> MONGOSE! desconectado ao servidor')
    )

    mongoose.connection.on('error', error => console.error('*** MONGOSE! ERRO ao conectar ao servidor: ' + error)
    )

    //Quando for detectado o comando de interrupção Ctrl+C
    process.on('SIGINT' , () => {
        console.log('=> MONGOSE! desconectando...')
        mongoose.connection.close()
        process.exit(0)
    })
}