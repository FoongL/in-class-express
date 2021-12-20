require(`dotenv`).config()
module.exports = {
    development: {
      username: process.env.PG_USER, // postgres
      password: process.env.PG_PASSWORD, // postgres
      database: process.env.PG_DB_NAME, // database namne
      host: process.env.PG_HOST, // host I.P.
      dialect: process.env.DB_DIALECT, // PG
    },
  };