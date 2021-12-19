const mongoose = require("mongoose");

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true  No se usa mas porque esta obsoleta a partir de moongose > 6.0
        });

        console.log('DB Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar BD');
    }

}



module.exports = {
    dbConnection
}