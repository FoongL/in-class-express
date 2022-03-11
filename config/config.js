require(`dotenv`).config()


let development
let production

if (process.env.DATABASE_URL) {
  development = {
    "use_env_variable": "DATABASE_URL",
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  },
  production = {
    "use_env_variable": "DATABASE_URL",
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
  
} else {
  development = {
    username: process.env.PG_USER, // postgres
    password: process.env.PG_PASSWORD, // postgres
    database: process.env.PG_DB_NAME, // database namne
    host: process.env.PG_HOST, // host I.P.
    dialect: process.env.DB_DIALECT, // PG
  },
  production = {
    username: process.env.PG_USER, // postgres
    password: process.env.PG_PASSWORD, // postgres
    database: process.env.PG_DB_NAME, // database namne
    host: process.env.PG_HOST, // host I.P.
    dialect: process.env.DB_DIALECT, // PG
  }
}


module.exports = {
  development,
  production
};