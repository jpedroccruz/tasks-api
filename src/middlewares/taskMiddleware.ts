import { Request, Response, NextFunction } from "express"

export function validateBody(req: Request, res: Response, next: NextFunction) {
  const { body } = req

  if (body.title === undefined || body.title === '') {
    res.status(400).json({ mensage: "Title field can't be undefined or empty."})
    return
  }

  if (body.description === undefined || body.description === '') {
    res.status(400).json({ mensage: "Descripntion field can't be undefined or empty."})
    return
  }

  next()
}

export function validateStatus(req: Request, res: Response, next: NextFunction) {
  const { body } = req

  if (body.status != 'pending' && body.status != 'completed') {
    res.status(400).json({ mensage: "Status field can only be pending or completed." })
    return
  }

  if (body.status === undefined || body.status === '') {
    res.status(400).json({ mensage: "Status field can't be undefined or empty." })
    return
  }

  next()
}