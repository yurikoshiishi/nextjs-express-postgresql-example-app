const pgp = require('pg-promise')();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;

const DB_KEY = Symbol.for('app.db');
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = globalSymbols.indexOf(DB_KEY) > -1;
if (!hasDb) {
  global[DB_KEY] = pgp(
    `postgres://${user}:${password}@${host}:${port}/${database}`
  );
}

pgp.pg.types.setTypeParser(1700, function (value) {
  return parseFloat(value);
});

pgp.pg.types.setTypeParser(20, function (value) {
  return parseInt(value);
});

const db = {instance: global[DB_KEY]};

Object.freeze(db);

export default db;
