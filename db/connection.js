// PG database client/connection setup
const { Pool } = require('pg');
//require('dotenv').config({ path: require('find-config')('.env') })

const dbParams = {
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
},
};

const proParams = {
  connectionString : process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
},
};

const db = new Pool(process.env.NODE_ENV);

db.connect();
console.log(process.env.DB_HOST)

module.exports = db;
