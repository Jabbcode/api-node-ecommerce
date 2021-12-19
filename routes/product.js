const { Router } = require("express");
const { check } = require("express-validator");
const { allProducts, product, newProduct } = require("../controller/product");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get('/', allProducts)

router.get('/:id', product)

router.post('/', [
	check('title', 'El titulo del producto es obligatorio').not().isEmpty(),
	check('description', 'La descripcion del producto es obligatoria').not().isEmpty(),
	check('price', 'El precio del producto es obligatorio').not().isEmpty(),
	check('stock', 'La cantidad de productos es obligatoria').not().isEmpty(),
	check('categoryId', 'La categorial producto es obligatorio').not().isEmpty(),
	validarCampos
], newProduct)


module.exports = router
