import { NextFunction, Request, Response } from 'express'
import BadRequest from './_error/badRequest'

export default function errorHandler(error: Error, _: Request, res: Response, next: NextFunction) {
  if (error instanceof BadRequest) {
    res.status(400).json({ mensage: error.message })
    return
  }

  res.status(500).json({ mensage: error.message || "Internal Server Error" })
}