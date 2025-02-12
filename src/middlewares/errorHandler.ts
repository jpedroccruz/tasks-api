import { Request, Response } from 'express'

export default function errorHandler(error: any, req: Request, res: Response) {

  res.status(500).json({ mensage: "Internal Server Error" })
}