const waitlistController = require("../controllers/waitlist.controller")

module.exports = (app) => {
    app.post("/api/waitlist", waitlistController.createNewWaitlist);
    app.get("/api/waitlist", waitlistController.getAllWaitlists);
    app.get("/api/waitlist/:id", waitlistController.getOneWaitlist);
    app.put("/api/waitlist/:id", waitlistController.updateWaitlist);
    app.delete("/api/waitlist/:id", waitlistController.deleteWaitlist)
};