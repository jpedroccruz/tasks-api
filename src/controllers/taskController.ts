import { Request, Response } from 'express'
import { create, deleteById, getAll, getById, update } from "../services/taskServices"
import BadRequest from '../middlewares/_error/badRequest'

export async function getTasks(_: Request, res: Response) {
  const tasks = await getAll()

  if (!tasks) throw new BadRequest('There are no tasks registered')

  res.status(200).json(tasks)
}

export async function getTask(req: Request, res: Response) {
  const { id } = req.params
  const task = await getById(parseInt(id))

  if (!task) throw new BadRequest(`There are no tasks registred with id ${id}`)

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
  update(parseInt(id), status)
  res.status(200).json({ mensage: "Task status updated."})
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params
  deleteById(parseInt(id)) 
  res.status(200).json({ mensage: "Task deleted." })
}