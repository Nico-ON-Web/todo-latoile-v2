// base de donnée
const Database = require('better-sqlite3')
const db = new Database('db.sqlite')
db.prepare(`
  CREATE TABLE IF NOT EXISTS dossiers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT,
    description TEXT,
    date DATE
    priorite INTEGER
  )
`).run()