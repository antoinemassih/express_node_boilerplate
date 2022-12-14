const db = require("../models");
const transactions = db.transactions;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    transactions.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};