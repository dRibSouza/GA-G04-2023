require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')

const User = require('./models/User')

const path = require('path')

const templatePath = path.join(__dirname, '../templates')


const indexRouter = require('./routes/index');


mongoose.connect('mongodb+srv://clinicauser:oyqWZLroNVtfIYXF@cluster0.notixwg.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`Conectado ao MongoDB`)
    
    app.listen(5000, () => {
        
        console.log(`Rodando na porta 5000`)
    })
}).catch((error) => { 
    console.log(error)
})


app.use(express.json())
app.set('view engine', 'hbs')
app.set("views", templatePath)
app.use(express.urlencoded({ extended: false }))


//Registrar User
app.post('/auth/register', async (req, res) =>{
    const {name, email, password, confirmarpassword } = req.body

    if(name) {
    return res.status(422).json({ msg: "Campo nome é obrigatório"})
    }
})


//login user
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email })

        if (check.senha === req.body.senha) {
            res.render('home')
        } else {
            res.send('Senha Incorreta')
        }
    } catch (error) {
        res.send('Login inválido')
    }
})


const usuarioRouter = require('./routes/users')
app.use('/user', usuarioRouter)

//Rotas

const patientsRouter = require('./routes/patients')
app.use('/patients', patientsRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const dentistsRouter = require('./routes/dentists')
app.use('/dentists', dentistsRouter)

module.exports = app;
