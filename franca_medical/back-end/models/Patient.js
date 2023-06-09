const mongoose = require('mongoose')

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    date_birth: {
        type: Date,
        required: true
    },

    id_document:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    phone_number:{
        type: String,
        required: false
    },

    //Subdocumento incorporado

    address:{
        street:{
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement:{
            type: String,
            required: false
        },
        district:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: {
            type: String,
            required: false
        }        
    }
   
})

module.exports = mongoose.model('Patient', schema, 'patients')