import { RouletteError } from './RouletteError'

export class RouletteValidationError extends RouletteError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, RouletteValidationError.prototype)
  }
}

export class RouletteValidationErrorWithoutMessage extends RouletteValidationError {
  constructor() {
    super('')
    Object.setPrototypeOf(this, RouletteValidationErrorWithoutMessage.prototype)
  }
}

export class EmptyRouletteValidationError extends RouletteValidationErrorWithoutMessage {
  constructor() {
    super()
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

export class NotValidIdRouletteValidationError extends RouletteValidationError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, NotValidIdRouletteValidationError.prototype)
  }
}

export class NotValidBetMoneyError extends RouletteValidationErrorWithoutMessage {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetMoneyError.prototype)
  }
}

export class NotValidBetPlaceError extends RouletteValidationErrorWithoutMessage {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetPlaceError.prototype)
  }
}
