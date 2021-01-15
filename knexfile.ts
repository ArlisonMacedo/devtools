import path from 'path'

module.exports = {
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
}