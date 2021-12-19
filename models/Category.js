const { Schema, model } = require("mongoose");

const categorySchema = Schema({
    name: {
        type: String,
        required: true   
    },
    description: {    
        type: String,
        required: true    
    },
    // products: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    // }
});

categorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = model( 'Category', categorySchema );