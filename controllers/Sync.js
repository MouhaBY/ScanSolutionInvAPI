const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Sync = require('../models/Sync')

exports.add = (req, res, next) => {
        const sync = new Sync({
            key: req.body.key,
        })
        sync.save()
        .then(()=> res.status(200).json({message: 'Synchronisation created'}))
        .catch(error => res.status(400).json({ error }))
}

exports.getOneSync = (req, res, next) => {
    Sync.findOne({ key: req.params.key })
    .then((sync) => { res.status(200).json(sync) })
    .catch((error) => { res.status(404).json({ error }) })
}

exports.modifySync = (req, res, next) => {
    const sync = new Sync({
      _id: req.params.id,
      key: req.body.key,
    });
    Sync.updateOne({_id: req.params.id}, sync)
    .then(() => { res.status(201).json({ message: 'Synchronisation updated successfully!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}

exports.deleteSync = (req, res, next) => {
    Sync.deleteOne({key: req.params.key})
    .then(() => { res.status(200).json({ message: 'Sync Deleted!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}
  
exports.getSyncs = (req, res, next) => {
    Sync.find().then((syncs) => { res.status(200).json({results : syncs}) })
    .catch((error) => { res.status(400).json({ error }) })
}
