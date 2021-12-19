const Category = require("../models/Category")
const Product = require("../models/Product")

const allProducts = async (req, res) => {
    const products = await Product.find().populate('category')

    res.status(200).json(products)
}

const product = async (req, res) => {
    
    const { id } = req.params

    const productFind = await Product.findById(id).populate('category')

    res.status(200).json(productFind)
}

const newProduct = async (req, res) => {
    const {
        title, 
        description, 
        price, 
        stock, 
        quantity_sold, 
        categoryId
    } = req.body

    const category = await Category.findById(categoryId)
    console.log(category)

    if(!title) {
        return res.status(400).json({
            error: 'title is missing'
        })
    }

    if(!description) {
        return res.status(400).json({
            error: 'description is missing'
        })
    }

    if(!price) {
        return res.status(400).json({
            error: 'price is missing'
        })
    }

    const newProduct = new Product({
        title: title,
        description: description,
        // link_img: '',
        price: price,
        stock: stock,
        quantity_sold: quantity_sold,
        category: category
    })

    newProduct.save()

    res.status(201).json({
        id: newProduct._id,
        title: title,
        description: description,
        // link_img: '',
        price: price,
        stock: stock,
        quantity_sold: quantity_sold,
        category: category
    });
}

module.exports = {
    allProducts,
    product,
    newProduct
}