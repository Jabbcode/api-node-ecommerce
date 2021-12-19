const Category = require('../models/Category')

const allCategories = async (req, res) => {

    const categories = await Category.find()
    res.status(200).json(categories)
}

const category = async (req, res, next) => {

    try {
        const { id } = req.params
        const category = await Category.findById(id)

        category ? res.status(200).json(category) : res.status(404).send()
    } catch (error) {
        next(error)
    }
}

const newCategory = async (req, res) => {

    const { name, description } = req.body
    console.log(req.body)

    if(!name) {
        return res.status(400).json({
            error: 'name is missing'
        })
    }

    if(!description) {
        return res.status(400).json({
            error: 'description is missing'
        })
    }

    const newCategory = new Category({
        name: name,
        description: description,
    })

    console.log(newCategory)

    await newCategory.save()

    res.status(201).json({
        id: newCategory._id,
        name: name,
        description: description
    });
}


module.exports = {
    allCategories,
    category,
    newCategory
}