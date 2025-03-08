import { NextFunction, Request, Response } from 'express'
import { create, deleteById, getAll, getById, update } from "../services/taskServices"
import catchErrors from '../middlewares/catchErrors'

export async function getTasks(_: Request, res: Response, next: NextFunction) {
  const [ tasksErr, tasksResult ] = await catchErrors(getAll())
  if (tasksErr) return next(tasksErr)
  res.status(200).json(tasksResult)
}

export async function getTask(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const [ taskErr, taskResult ] = await catchErrors(getById(parseInt(id)))
  if (taskErr) return next(taskErr)
  res.status(200).json(taskResult)
}

export async function createTask(req: Request, res: Response, next: NextFunction) {
  const { title, description } = req.body
  const created_at = (new Date).toLocaleDateString()
  const [ postTaskErr ] = await catchErrors(create(title, description, 'pending', created_at))
  if (postTaskErr) return next(postTaskErr)
  res.status(201).json({ mensage: "Task created." })
}

export async function updateTask(req: Request, res: Response, next: NextFunction) {
  const { status } = req.body
  const { id } = req.params
  const [ updateTaskErr ] = await catchErrors(update(parseInt(id), status))
  if (updateTaskErr) return next(updateTaskErr)
  res.status(200).json({ mensage: "Task status updated."})
}

export async function deleteTask(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const [ deleteTaskErr ] = await catchErrors(deleteById(parseInt(id)))
  if (deleteTaskErr) return next(deleteTaskErr)
  res.status(200).json({ mensage: "Task deleted." })
}