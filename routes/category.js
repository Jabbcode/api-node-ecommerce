const { Router } = require("express");
const { check } = require('express-validator');
const { allCategories, category, newCategory } = require("../controller/category");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get('/', allCategories)

router.get('/:id', category)

router.post('/', [
	check('name', 'El nombre de la categoria es oblitario').not().isEmpty(),
	check('descripcion', 'La descripcion de la categoria es oblitaria').not().isEmpty(),
	validarCampos
], newCategory)

router.use( (req, res)  => {
    res.status(404).end()
})

router.use( (error, req, res) => {
	console.log(error)
	console.log(error.name)

	if(error.name === 'CastError') {
		res.status(400).send({ error: 'id used is malformed'})
	} else {
		res.status(500).end()
	}
})

module.exports = router