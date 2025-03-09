import { ServiceUnavaliable } from "../middlewares/_error/apiErrors"
import catchErrors from "../middlewares/catchErrors"
import connection from "../models/connection"

export async function getAll() {
  const [ tasksErr, tasksResult ] = await catchErrors(connection.query('SELECT * FROM task'))
  if (tasksErr) throw new ServiceUnavaliable("Query Database failed.")
  return tasksResult![0]
}

export async function getById(id: number) {
  const [ taskErr, taskResult ] = await catchErrors(connection.query(`SELECT * FROM task WHERE id = ${id}`))
  if (taskErr) throw new ServiceUnavaliable("Query Database failed.")
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
  if (postTaskErr) throw new ServiceUnavaliable("Query Database failed.")
}

export async function update(id: number, status: string) {
  const [ updateTaskErr ] = await catchErrors(connection.query(`UPDATE task SET status = '${status}' WHERE id = ${id}`))
  if (updateTaskErr) throw new ServiceUnavaliable("Query Database failed.")
}

export async function deleteById(id: number) {
  const [ deleteTaskErr ] = await catchErrors(connection.query(`DELETE FROM task WHERE id = ${id}`))
  if (deleteTaskErr) throw new ServiceUnavaliable("Query Database failed.")
}