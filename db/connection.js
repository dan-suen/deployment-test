// PG database client/connection setup
const { Pool } = require('pg');
//require('dotenv').config({ path: require('find-config')('.env') })

const dbParams = {
  connectionString : "postgres://bsmbdeql:umwK_R2sizW8iVs_hAegal5JWfT-ojaZ@ruby.db.elephantsql.com/bsmbdeql",
  ssl: {
    rejectUnauthorized: false,
},
};

const db = new Pool(dbParams);

db.connect();
console.log(process.env.DB_HOST)

module.exports = db;
