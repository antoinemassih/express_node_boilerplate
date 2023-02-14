module.exports = app => {
    const transactions = require("../controllers/transactions.controller.js");
    var router = require("express").Router();

    router.get("/", transactions.findAll);
    router.get("/:id", transactions.findOne);
    router.post("/", transactions.create);
    router.put("/:id", transactions.update);
    router.delete("/:id", transactions.delete);
    router.delete("/", transactions.deleteAll);
    router.get("/published", transactions.findAllPublished);

    app.use('/api/transactions', router);
};