const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/User')
const configRoutes = require('./routes/Config')
const syncRoutes = require('./routes/Sync')
const productRoutes = require('./routes/Product')
const locationRoutes = require('./routes/Location')

mongoose.connect('mongodb+srv://sa:125@cluster0.retey.mongodb.net/ScanSolutionsInventaires?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connexion à MongoDB réussie !')).catch(() => console.log('Connexion à MongoDB échouée !'))

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())
app.use('/api/auth', userRoutes)
app.use('/api/configurations', configRoutes)
app.use('/api/synchronisations', syncRoutes)
app.use('/api/products', productRoutes)
app.use('/api/locations', locationRoutes)

module.exports = app
