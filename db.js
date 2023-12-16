//fichier contenant les informations confidentielles de la base de donnees

const mongoose = require('mongoose')
const dbUri = 'mongodb+srv://(entrer your username):(enter your password)@cluster0.ptfku0u.mongodb.net/employee_db?retryWrites=true&w=majority'
module.exports = () => {
    return mongoose.connect(dbUri)

}
