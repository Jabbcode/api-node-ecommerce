const { Router } = require('express')
const { allTypeUser, type, newType } = require('../controller/typeUser')

const router = Router();


router.get('/', allTypeUser)

router.get('/:id', type)

router.post('/', newType)

module.exports = router