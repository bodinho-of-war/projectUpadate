const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'sa',
    password : '123@abcd',
    database : 'UpdateTest'
  }
});
