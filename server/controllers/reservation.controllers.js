const Reservation = require ("../models/reservation.models");

const createNewReservation = (req, res) => {
    Reservation.create(req.body)
    .then(newReservation => {
        res.json(newReservation)
    })
    .catch(err => {
        res.status(400).json((err))
    })
}
const getAllReservations = (req, res) => {
    Reservation.find()
    .then(allReservation => {
        res.json(allReservation)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const getOneReservation = (req, res) => {
    Reservation.findOne({_id: req.params.id})
    .then(OneReservation => {
        res.json(OneReservation)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const updateReservation = (req, res) => {
    Reservation.updateOne({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updatedReservation => {
        res.json(updatedReservation)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}
const deleteReservation = (req, res) => {
    Reservation.deleteOne({_id: req.params.id})
    .then(deletedReservation => {
        res.json(deletedReservation)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports = {
    createNewReservation,
    getAllReservations,
    getOneReservation,
    updateReservation,
    deleteReservation
}