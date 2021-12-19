const { Router } = require("express");
const { allProducts, product, newProduct } = require("../controller/product")

const router = Router();

router.get('/', allProducts)

router.get('/:id', product)

router.post('/', newProduct)


module.exports = router
