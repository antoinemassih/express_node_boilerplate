module.exports = app => {
    const transactions = require("../controllers/transactions.controller.js");
    var router = require("express").Router();

    router.get("/", transactions.findAll);

    app.use('/api/transactions', router);
};