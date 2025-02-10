import { createNewTask, updateTaskStatus, getAllTasks, getUniqueTask } from "../services/taskServices"

export async function getTasks(_: any, res: any) {
  const tasks = await getAllTasks()
  res.status(200).json(tasks)
}

export async function getTask(req: any, res: any) {
  const { id } = req.params
  const task = await getUniqueTask(id)
  res.status(200).json(task)
}

export async function createTask(req: any, res: any) {
  const { title, description } = req.body
  const created_at = (new Date).toLocaleDateString()

  createNewTask(title, description, 'pending', created_at)
  res.status(201).json({ mensage: "Task created." })
}

export async function updateTask(req: any, res: any) {
  const { status } = req.body
  const { id } = req.params

  updateTaskStatus(id, status)
  res.status(200).json({ mensage: "Task status updated."})
}