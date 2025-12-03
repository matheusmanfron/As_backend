exports.up = function(knex) {
return knex.schema.createTable('tarefas', (table) => {
table.increments('id').primary(); 
table.string('descricao').notNullable(); 
table.string('status').notNullable();
table.integer('id_usuarios').references('usuarios.id').notNullable();
table.timestamps(true, true);
});
};
exports.down = function(knex) {
// 'down' desfaz o que 'up' fez, neste caso, deleta a tabela
return knex.schema.dropTable('tarefas');
};