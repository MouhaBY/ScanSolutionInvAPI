const Product = require('../models/Product')

exports.add = (req, res, next) => {
    const product = new Product({
        code: req.body.code,
        name: req.body.name,
    })
    product.save()
    .then(()=> res.status(200).json({message: 'Product created'}))
    .catch(error => res.status(400).json({ error }))
}

exports.getProducts = (req, res, next) => {
    Product.find().then((products) => { res.status(200).json({results : products}) })
    .catch((error) => { res.status(400).json({ error }) })
}
