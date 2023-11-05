const Waitlist = require ("../models/waitlist.model");

const createNewWaitlist = (req, res) => {
    Waitlist.create(req.body)
    .then(newWaitlist => {
        res.json(newWaitlist)
    })
    .catch(err => {
        res.status(400).json((err))
    })
}
const getAllWaitlists = (req, res) => {
    Waitlist.find()
    .then(allWaitlist => {
        res.json(allWaitlist)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const getOneWaitlist = (req, res) => {
    Waitlist.findOne({_id: req.params.id})
    .then(OneWaitlist => {
        res.json(OneWaitlist)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const updateWaitlist = (req, res) => {
    Waitlist.updateOne({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updatedWaitlist => {
        res.json(updatedWaitlist)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const deleteWaitlist = (req, res) => {
    Waitlist.deleteOne({_id: req.params.id})
    .then(deletedWaitlist => {
        res.json(deletedWaitlist)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports = {
    createNewWaitlist,
    getAllWaitlists,
    getOneWaitlist,
    updateWaitlist,
    deleteWaitlist

}