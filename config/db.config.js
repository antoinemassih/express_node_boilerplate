module.exports = {
    HOST: "localhost",
    USER: "antoinemassih",
    PASSWORD: "Monkeyhero69",
    DB: "expense_tracker",
    dialect: "postgres",
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};