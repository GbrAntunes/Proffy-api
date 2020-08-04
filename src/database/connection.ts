import knex from 'knex'
import path from 'path'

const db = knex({
  client: 'sqlite3',
  connection: {
    // __dirname: Referencia o diretório em que se encontra o arquivo atual, no caso, database
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  // Necessário passar, já que o sqlite não sabe o que colocar por padrão nos campos
  useNullAsDefault: true
})

export default db