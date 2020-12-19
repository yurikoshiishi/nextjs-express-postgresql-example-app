const pgp = require('pg-promise')();

const user = 'postgres';
const password = 'melnikov';
const host = 'localhost';
const port = 5432;
const database = 'protein_review';

const db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`);

export default db;
