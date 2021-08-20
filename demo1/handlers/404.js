'use strict'

module.exports = (req, res) => {
    res.status(404).send({
        code: 404,
        route: req.path,
        message:'page not found'
    })
}