import { Request, Response } from 'express'
import { create, deleteById, getAll, getById, update } from "../services/taskServices"

export async function getTasks(_: Request, res: Response) {
  const tasks = await getAll()
  res.status(200).json(tasks)
}

export async function getTask(req: Request, res: Response) {
  const { id } = req.params
  const task = await getById(id)
  res.status(200).json(task)
}

export async function createTask(req: Request, res: Response) {
  const { title, description } = req.body
  const created_at = (new Date).toLocaleDateString()

  create(title, description, 'pending', created_at)
  res.status(201).json({ mensage: "Task created." })
}

export async function updateTask(req: Request, res: Response) {
  const { status } = req.body
  const { id } = req.params

  update(id, status)
  res.status(200).json({ mensage: "Task status updated."})
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params
  deleteById(id)
  res.status(200).json({ mensage: "Task deleted." })
}