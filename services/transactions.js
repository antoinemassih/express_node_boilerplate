const db = require('./db');
const helper = require('../helper');
const config = require('../config/db.config');
const transactions = require('../models/raw_transaction.model');

async function getMultiple(page = 1) {
    const transactions =  transactions.findAll();
}

module.exports = {
    getMultiple
}