// base de donnée
import Database from 'better-sqlite3'
const db = new Database('db.sqlite')
db.prepare(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT,
    description TEXT,
    date DATE,
    priorite INTEGER
  )
`).run()