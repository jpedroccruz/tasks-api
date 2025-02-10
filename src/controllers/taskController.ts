<<<<<<< HEAD
import { create, getAll, getById, update } from "../services/taskServices"
=======
import { create, update, getAll, getById } from "../services/taskServices"
>>>>>>> 88f1fe1d6cf564e0d89e47e34ffa6757282dce59

export async function getTasks(_: any, res: any) {
  const tasks = await getAll()
  res.status(200).json(tasks)
}

export async function getTask(req: any, res: any) {
  const { id } = req.params
  const task = await getById(id)
  res.status(200).json(task)
}

export async function createTask(req: any, res: any) {
  const { title, description } = req.body
  const created_at = (new Date).toLocaleDateString()

  create(title, description, 'pending', created_at)
  res.status(201).json({ mensage: "Task created." })
}

export async function updateTask(req: any, res: any) {
  const { status } = req.body
  const { id } = req.params

  update(id, status)
  res.status(200).json({ mensage: "Task status updated."})
}