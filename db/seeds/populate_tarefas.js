exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tarefas').del()
  await knex('tarefas').insert([
    {id: 1, descricao: 'tomar banho', status: 'Concluida', id_usuarios: 2},
    {id: 2, descricao: 'buscar os filhos na escola', status: 'Em aberto', id_usuarios: 3},
    {id: 3, descricao: 'arrumar tv da sala', status: 'Atrasada', id_usuarios: 1}
  ]);
};
