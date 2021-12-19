const { Router } = require('express')
const { allUsers, newUser } = require('../controller/user')

const router = Router();


router.get('/', allUsers)

router.post('/', newUser)

module.exports = router