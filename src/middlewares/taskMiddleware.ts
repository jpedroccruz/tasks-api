export function validateBody(req: any, res: any, next: any) {
  const { body } = req

  if (body.title === undefined || body.title === '') {
    return res.status(400).json({ mensage: "Title field can't be undefined or empty."})
  }

  if (body.description === undefined || body.description === '') {
    return res.status(400).json({ mensage: "Descripntion field can't be undefined or empty."})
  }

  next()
}

export function validateStatus(req: any, res: any, next: any) {
  const { body } = req

  if (body.status != 'pending' && body.status != 'completed') {
    return res.status(400).json({ mensage: "Status field can only be pending or completed." })
  }

  if (body.status === undefined || body.status === '') {
    return res.status(400).json({ mensage: "Status field can't be undefined or empty." })
  }

  next()
}