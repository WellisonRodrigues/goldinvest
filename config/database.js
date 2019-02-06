const secret = require('./secret');
module.exports = {
  "development": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "goldinvest",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "mymoney_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
