module.exports = {  //disponibiliza esse objeto para outros arquivos em javascript
development: {  //define o ambiente da aplicação 
client: 'sqlite3', //diz ao knex qual banco de dados ele vai usar
connection: { //O caminho do arquivo
filename: './db/database.sqlite3'
},
useNullAsDefault: true,  //configuração necessária quando se usa SQLite3, evita erros quando você tenta inserir valores NULL em colunas que não tem valor padrão
migrations: {
directory: './db/migrations'
},
seeds: {
directory: './db/seeds'
}
}
};