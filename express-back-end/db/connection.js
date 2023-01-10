// PG database client/connection setup
const { Pool } = require('pg');
//require('dotenv').config({ path: require('find-config')('.env') })

const dbParams = {
  connectionString : 'postgres://vyybmdqcukzutt:8ec8b94667c4f88c0a452e628fa7c846f1cf52e6de8997d2e2b91cbe99202ec6@ec2-54-157-79-121.compute-1.amazonaws.com:5432/d4mcojm2fndubn',
  ssl: {
    rejectUnauthorized: false,
},
};

const proParams = {
  connectionString : 'postgres://vyybmdqcukzutt:8ec8b94667c4f88c0a452e628fa7c846f1cf52e6de8997d2e2b91cbe99202ec6@ec2-54-157-79-121.compute-1.amazonaws.com:5432/d4mcojm2fndubn',
  ssl: {
    rejectUnauthorized: false,
},
};

const db = new Pool(process.env.NODE_ENV === "production" ? proParams : dbParams);

db.connect();
console.log(process.env.DB_HOST)

module.exports = db;
