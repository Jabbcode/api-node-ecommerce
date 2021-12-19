const User = require('../models/User')
const bcrypt = require('bcryptjs')


const allUsers = async(req, res) => {

    const users = await User.find();
    res.status(200).json(users)
}

const newUser = async (req, res) => {

    const { name, email, password } = req.body
    console.log(req.body)

    if(!name) {
        return res.status(400).json({
            error: 'name is missing'
        })
    }

    if(!email) {
        return res.status(400).json({
            error: 'email is missing'
        })
    }

    if(!password) {
        return res.status(400).json({
            error: 'password is missing'
        })
    }

    const newUser = new User({
        name: name,
        email: email,
        password: password
    })

    // Hashear la contraseña
    const salt = bcrypt.genSaltSync()
    newUser.password = bcrypt.hashSync( password, salt )

    await newUser.save()

    res.status(201).json({
        id: newUser._id,
        name: name,
        email: email
    });
}


module.exports = {
    allUsers,
    newUser
}