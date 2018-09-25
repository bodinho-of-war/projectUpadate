let conn = {
    host : '127.0.0.1',
    user : 'root',
    password : 'password'
};

let knex = require('knex')( { client: 'mysql', connection: conn});

knex.raw('CREATE DATABASE teste_update')
  .then(() => {
    knex.destroy();

    conn.database = 'teste_update';
    knex = require('knex')( { client: 'mysql', connection: conn});

    knex.schema.createTable('pessoa', table => {
      table.string('nome');
      table.string('sobrenome');
    }).then(() => {
        knex.destroy();
    });
  });
