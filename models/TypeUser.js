const { Schema, model } = require('mongoose')

const typeUserSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

typeUserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = model( 'typeUser', typeUserSchema )