import { NextFunction, Request, Response } from 'express'
import BadRequest from './_error/badRequest'

export default function errorHandler(error: any, _: Request, res: Response, next: NextFunction) {
  if (error instanceof BadRequest) {
    res.status(400).json({ mensage: error.message })
    return
  }

  res.status(500).json({ mensage: "Internal Server Error" })
}