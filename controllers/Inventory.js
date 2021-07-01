const Inventory = require('../models/Inventory')

exports.add = (req, res, next) => {
    let len = req.body.length
    for (let i = 0; i < len; i++) {
        const inventory = new Inventory({
            id: req.body[i].id,
            name: req.body[i].name,
            date: req.body[i].date,
            state: req.body[i].state,
        })            
        inventory.save().catch((error) => { })
    }
    res.status(200).json({ok: true})
}
  
exports.getInvs = (req, res, next) => {
    Inventory.find().then((invs) => { res.status(200).json({results : invs}) })
    .catch((error) => { res.status(400).json({ error }) })
}
