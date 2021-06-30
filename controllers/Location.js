const Location = require('../models/Location')

exports.add = (req, res, next) => {
    const location = new Location({
        code: req.body.code,
        name: req.body.name,
    })
    location.save()
    .then(()=> res.status(200).json({message: 'location created'}))
    .catch(error => res.status(400).json({ error }))
}

exports.getLocations = (req, res, next) => {
    Location.find().then((locations) => { res.status(200).json({results : locations}) })
    .catch((error) => { res.status(400).json({ error }) })
}