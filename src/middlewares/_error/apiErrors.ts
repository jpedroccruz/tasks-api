export class ApiError extends Error {
  readonly statusCode: number
  
  constructor (mensage: string, statusCode: number) {
    super(mensage)
    this.statusCode = statusCode
  }
}

export class BadRequest extends ApiError {
  constructor (mensage: string) {
    super(mensage, 400)
  }
}

export class ServiceUnavaliable extends ApiError {
  constructor (mensage: string) {
    super(mensage, 503)
  }
}