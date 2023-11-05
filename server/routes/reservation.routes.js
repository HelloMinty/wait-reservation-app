const reservationController = require("../controllers/reservation.controllers")

module.exports = (app) => {
    app.post("/api/reservation", reservationController.createNewReservation);
    app.get("/api/reservation", reservationController.getAllReservations);
    app.get("/api/reservation/:id", reservationController.getOneReservation);
    app.put("/api/reservation/:id", reservationController.updateReservation);
    app.delete("/api/reservation/:id", reservationController.deleteReservation)
};