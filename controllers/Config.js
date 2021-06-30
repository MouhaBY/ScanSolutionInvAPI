const Config = require('../models/Config')

exports.add = (req, res, next) => {
        const config = new Config({
            key: req.body.key,
            state: req.body.state,
        })
        config.save()
        .then(()=> res.status(200).json({message: 'Configuration created'}))
        .catch(error => res.status(400).json({ error }))
}

exports.getOneConfig = (req, res, next) => {
    Config.findOne({ key: req.params.key })
    .then((config) => { res.status(200).json(config) })
    .catch((error) => { res.status(404).json({ error }) })
}

exports.modifyConfig = (req, res, next) => {
    const config = new Config({
      _id: req.params.id,
      key: req.body.key,
      state: req.body.state,
    });
    Config.updateOne({_id: req.params.id}, config)
    .then(() => { res.status(201).json({ message: 'Configuration updated successfully!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}

exports.deleteConfig = (req, res, next) => {
    Config.deleteOne({_id: req.params.id})
    .then(() => { res.status(200).json({ message: 'Config Deleted!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}
  
exports.getConfigs = (req, res, next) => {
    Config.find().then((configs) => { res.status(200).json({results : configs}) })
    .catch((error) => { res.status(400).json({ error }) })
}
