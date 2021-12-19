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
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'TypeUser'
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject.__v
        delete returnedObject._id
        delete returnedObject.password
    }
})

module.exports = model('User', userSchema);