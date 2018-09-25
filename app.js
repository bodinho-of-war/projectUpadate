let conn = {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'teste_update'
};

const knex = require('knex')( { client: 'mysql', connection: conn});

/******************************MOCK DE DADOS************************************

let pessoas = [
  {
      nome : 'Lucas',
      sobrenome: 'Portela'
  },
  {
      nome : 'Luana',
      sobrenome: 'Portela'
  },
  {
      nome : 'Luzia',
      sobrenome: 'Portela'
  },
  {
      nome : 'Luandra',
      sobrenome: 'Portela'
  }
];
*******************************************************************************/

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

/*******************************INSERT DE DADOS*********************************
pessoas.forEach( pessoa => {
  knex('pessoa')
    .insert(pessoa)
    .then(() => {
      knex.destroy();
      console.log(`${pessoa.nome} ${pessoa.sobrenome} gravado com sucesso`)
    });
});
*******************************************************************************/

knex('pessoa')
  .where('nome','=','Luan')
  .update({
    sobrenome : 'Bonitão'
  })
  .then(() => {
    knex.destroy();
    console.log(`1 item atualizados com sucesso`);
  });
