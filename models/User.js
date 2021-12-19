const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject.__v
        delete returnedObject._id
    }
})

module.exports = model('User', userSchema);