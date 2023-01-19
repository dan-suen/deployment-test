require('dotenv').config()
module.exports = {
  "development": {
      "url": "postgres://bsmbdeql:umwK_R2sizW8iVs_hAegal5JWfT-ojaZ@ruby.db.elephantsql.com/bsmbdeql",
      "dialect": "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
  },
  "production": {
    url: process.env.DATABASE_URL ,
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
}
}