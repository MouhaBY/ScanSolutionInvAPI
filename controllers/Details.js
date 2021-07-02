const Details = require('../models/Details')

exports.add = (req, res, next) => {
    let len = req.body.length
    for (let i = 0; i < len; i++) {
        const details = new Details({
            id: req.body[i].id,
            inventory_id: req.body[i].inventory_id,
            location: req.body[i].location,
            barcode: req.body[i].barcode,
            quantity: req.body[i].quantity,
            user_id: req.body[i].user_id,
            date: req.body[i].date
        })            
        details.save().catch((error) => { })
    }
    res.status(200).json({ok: true})
}
  
exports.getDetails = (req, res, next) => {
    Details.find().then((details) => { res.status(200).json({results : details}) })
    .catch((error) => { res.status(400).json({ error }) })
}
