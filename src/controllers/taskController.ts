import { getAllTasks, getUniqueTask } from "../services/taskServices"

export async function getTasks(_: any, res: any) {
  const tasks = await getAllTasks()
  res.status(200).json(tasks)
}

export async function getTask(req: any, res: any) {
  const { id } = req.params
  const task = await getUniqueTask(id)
  res.status(200).json(task)
}