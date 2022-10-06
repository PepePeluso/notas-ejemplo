const pgPromise = require("pg-promise")

const config = {
    host: "dpg-ccqvhjun6mpt37ud27p0-a.oregon-postgres.render.com",
    port: "5432",
    database: "notas_ejemplo",
    user: "pjrobalinol",
    password: "SgI6ZRLl7enBkBB0uVl6F3eqXDuD7Qrb",
    ssl: true
}

const configLocal = {
    host: "localhost",
    port: "5432",
    database: "notas_ejemplo",
    user: "postgres",
    password: "MC2$*cig7d3NgezxS7"
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db