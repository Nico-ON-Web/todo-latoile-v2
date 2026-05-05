const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// base de donnée
const Database = require('better-sqlite3')
const db = new Database('db.sqlite')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})