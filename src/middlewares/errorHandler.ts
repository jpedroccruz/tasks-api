import { NextFunction, Request, Response } from 'express'
import { ApiError } from './_error/apiErrors'

export default function errorHandler(error: Error & ApiError, _: Request, res: Response, next: NextFunction) {
  const statusCode = error.statusCode ?? 500
  const menssage = error.statusCode ? error.message : "Internal Server Error"
  res.status(statusCode).json({ menssage })
}