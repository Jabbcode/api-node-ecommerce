const { validatorResult } = require('express-validator')

const validarCampos = ( req, res, next ) => {

    const errors = validatorResult( req ) 

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            erros: errors.mapped()
        })
    }

    next()
}


module.exports = {
    validarCampos
}