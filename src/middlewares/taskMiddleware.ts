import { Request, Response, NextFunction } from "express"
import BadRequest from "./_error/badRequest"

export function validateTitle(req: Request, _: Response, next: NextFunction) {
  const { body } = req

  if (body.title === undefined || body.title === '') {
    throw new BadRequest("Title field can't be undefined or empty.")
  }

  next()
}

export function validateDescription(req: Request, _: Response, next: NextFunction) {
  const { body } = req

  if (body.description === undefined || body.description === '') {
    throw new BadRequest("Description field can't be undefined or empty.")
  }

  next()
}

export function validateStatus(req: Request, _: Response, next: NextFunction) {
  const { body } = req

  if (body.status === undefined || body.status === '') {
    throw new BadRequest("Status field can't be undefined or empty.")
  }

  if (body.status != 'pending' && body.status != 'completed') {
    throw new BadRequest("Status field can only be 'pending' or 'completed'.")
  }

  next()
}