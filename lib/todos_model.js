

export function getAllTodos(db) {
  return db.prepare('SELECT * FROM todos').all()
}

export function getTodoById(db, id) {
  return db.prepare('SELECT * FROM todos WHERE id = ?').get(id)
}

export function createTodo(db, { nom, description, date, priorite }) {

  return db.prepare(`
    INSERT INTO todos (nom, description, date, priorite)
    VALUES (?, ?, ?, ?)
  `).run(nom, description, date, priorite)
}

export function updateTodo(db, id, { nom, description, date, priorite }) {
  return db.prepare(`
    UPDATE todos
    SET nom = ?, description = ?, date = ?, priorite = ?
    WHERE id = ?
  `).run(nom, description, date, priorite, id)
}

export function deleteTodo(db, id) {
  return db.prepare('DELETE FROM todos WHERE id = ?')
    .run(id)
}