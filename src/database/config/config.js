require("dotenv").config();
module.exports = {
  development: {
    username:process.env.USERNAME_DB_DEV,
    password: null,
    database: process.env.DATABASE_DB_DEV,
    host: process.env.HOST_DB_DEV,
    dialect: "mysql",
  },
  test: {
    username:process.env.USERNAME_DB_TEST,
    password: process.env.PASSWORD_DB_TEST,
    database:process.env.DATABASE_DB_TEST,
    host: process.env.HOST_DB_TEST,
    port: process.env.PORT_DB_TEST,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
