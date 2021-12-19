const { Schema, model } = require("mongoose");

const productSchema = Schema({
    title: {    
        type: String,
        required: true,
        // unique: true   
    },
    description: {
        type: String,
        required: true   
    },
    // "link_img": {
    //},
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true   
    },
    quantity_sold: {
        type: Number  
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject.password
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = model( 'Product', productSchema );