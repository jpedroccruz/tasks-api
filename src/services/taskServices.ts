import connection from "../models/connection"

export async function getAllTasks() {
  const [ results ] = await connection.query('SELECT * FROM task')
  return results
}

export async function getUniqueTask(id: number) {
  const [ result ] = await connection.query(`SELECT * FROM task WHERE id = ${id}`)
  return result
}