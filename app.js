let conn = {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'teste_update'
};

let pessoa = {
    nome : 'Luan',
    sobrenome: 'Portela'
};

const knex = require('knex')( { client: 'mysql', connection: conn});

knex('pessoa')
  .insert(pessoa)
  .then(() => {
    knex.destroy();
    console.log(`${pessoa.nome} ${pessoa.sobrenome} gravado com sucesso`)
  });

/**************************CREATE DATA BASE*************************************

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

*******************************************************************************/
