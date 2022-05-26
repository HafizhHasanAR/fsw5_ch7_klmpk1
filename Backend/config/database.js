require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "msib_ch7",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
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
