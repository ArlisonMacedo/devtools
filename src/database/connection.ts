import knex from 'knex'
import path from 'path'


const connection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'devtools',
    port: 5433,
    user: 'postgres',
    password: 'root'
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'database', 'migrations')
  }

})

export default connection;