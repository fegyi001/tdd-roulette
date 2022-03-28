import { RouletteError } from './RouletteError'

export class RouletteValidationError extends RouletteError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, RouletteValidationError.prototype)
  }
}

export class EmptyRouletteValidationError extends RouletteValidationError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, EmptyRouletteValidationError.prototype)
  }
}

export class MissingPropertyRouletteValidationError extends RouletteValidationError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(
      this,
      MissingPropertyRouletteValidationError.prototype
    )
  }
}
