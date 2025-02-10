import connection from "../models/connection"

export async function getAll() {
  const [ results ] = await connection.query('SELECT * FROM task')
  return results
}

export async function getById(id: number) {
  const [ result ] = await connection.query(`SELECT * FROM task WHERE id = ${id}`)
  return result
}

export async function create(
  title: string,
  description:string,
  status:string,
  created_at:string
) {
  connection.query(
    `INSERT INTO task (title, description, status, created_at) VALUES ('${title}', '${description}', '${status}', '${created_at}')`
  )
}

export async function update(id: number, status: string) {
  connection.query(`UPDATE task SET status = '${status}' WHERE id = ${id}`)
}