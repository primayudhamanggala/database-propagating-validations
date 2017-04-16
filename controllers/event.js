const db = require('../models')

module.exports = {
  create : (req, res) => {
    db.Event.create(req.body)
    .then((event) => {
      res.send(event)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  getAll : (req, res) => {
    db.Event.findAll()
    .then((event) => {
      res.send(event)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  update : (req, res) => {
    db.Event.update(req.body, {where: req.params.id})
    .then((event) => {
      res.send(event)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  delete : (req, res) => {
    db.Event.destroy({where: req.params.id})
    .then((event) => {
      res.send(event)
    })
    .catch((err) => {
      res.send(err.message)
    })
  }
}
