import catchErrors from "../middlewares/catchErrors"
import connection from "../models/connection"

export async function getAll() {
  const [ tasksErr, tasksResult ] = await catchErrors(connection.query('SELECT * FROM task'))
  if (tasksErr) throw new Error("Query Database failed.")
  return tasksResult![0]
}

export async function getById(id: number) {
  const [ taskErr, taskResult ] = await catchErrors(connection.query(`SELECT * FROM task WHERE id = ${id}`))
  if (taskErr) throw new Error("Query Database failed.")
  return taskResult![0]
}

export async function create(
  title: string,
  description:string,
  status:string,
  created_at:string
) {
  const [ postTaskErr ] = await catchErrors(connection.query(
    `INSERT INTO task (title, description, status, created_at) VALUES ('${title}', '${description}', '${status}', '${created_at}')`
  ))
  if (postTaskErr) throw new Error("Query Database failed.")
}

export async function update(id: number, status: string) {
  const [ updateTaskErr ] = await catchErrors(connection.query(`UPDATE task SET status = '${status}' WHERE id = ${id}`))
  if (updateTaskErr) throw new Error("Query Database failed.")
}

export async function deleteById(id: number) {
  connection.query(`DELETE FROM task WHERE id = ${id}`)
}