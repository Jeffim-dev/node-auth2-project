const bcrypt = require("bcryptjs")
const db = require('../database/dbconfig.js')

module.exports = {
  find,
  findBy,
  findById,
  add
}

function find() {
  return db('users')
  .select("id", "username", "password")
}

function findBy(filter) {
  return db('users')
    .select("id", "username", "password")
    .where(filter)
}

function findById(id) {
  return db('users')
    .select("id", "username")
    .where({ id })
    .first()
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 10)
  const [id] = await db('users').insert(user)
  return findById(id)
}