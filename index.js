import express from 'express'
import Database from 'better-sqlite3'

import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo, getTodoById
} from './lib/todos_model.js'

const app = express()
const db = new Database('db.sqlite')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// LIST
app.get('/', (req, res) => {
  const todos = getAllTodos(db)
  res.render('index', { todos })
})

// CREATE - afficher formulaire
app.get('/add', (req, res) => {
  res.render('create')
})

// CREATE - traitement
app.post('/add', (req, res) => {
  createTodo(db, req.body)
  res.redirect('/')
})

// UPDATE - afficher formulaire
app.get('/edit/:id', (req, res) => {
  const todo = getTodoById(db, req.params.id)
  res.render('edit', { todo })
})

// UPDATE - traitement
app.post('/update/:id', (req, res) => {
  updateTodo(db, req.params.id, req.body)
  res.redirect('/')
})

// DELETE - supprimer
app.get('/delete/:id', (req, res) => {
  deleteTodo(db, req.params.id)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})