exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    {id: 1, email: 'yuri@email.com', senha: 'remo4323'},
    {id: 2, email: 'maria@email.com', senha: 'j43tre'},
    {id: 3, email: 'rodrigo@email.com', senha: 'lka212'}
  ]);
};
