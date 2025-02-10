import connection from "../models/connection"

export default async function getAllTasks() {
  const [ results ] = await connection.query('SELECT * FROM task')
  return results
} 