import getAllTasks from "../services/taskServices"

export default async function getTasks(_: any, res: any) {
  const tasks = await getAllTasks()
  res.status(200).json(tasks)
}