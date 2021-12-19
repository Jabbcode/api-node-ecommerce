const TypeUser = require('../models/TypeUser');

const allTypeUser = async(req, res) => {

    const type = await TypeUser.find();
    res.status(200).json(type)
}

const type = async (req, res) => {
    
    const { id } = req.params

    const typeFind = await TypeUser.findById(id)

    res.status(200).json(typeFind)
}

const newType = async (req, res) => {

    const { name } = req.body

    if(!name) {
        return res.status(400).json({
            error: 'name is missing'
        })
    }

    const newType = new TypeUser({
        name: name
    })

    await newType.save()

    res.status(201).json({
        name: name
    });
}


module.exports = {
    allTypeUser,
    type,
    newType
}