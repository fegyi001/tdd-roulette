import { RouletteError, RouletteErrorWithMessage } from './RouletteError'

export class RouletteValidationError extends RouletteError {
  constructor() {
    super()
    Object.setPrototypeOf(this, RouletteValidationError.prototype)
  }
}
export class RouletteValidationErrorWithMessage extends RouletteErrorWithMessage {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, RouletteValidationErrorWithMessage.prototype)
  }
}

export class EmptyRouletteValidationError extends RouletteError {
  constructor() {
    super()
    Object.setPrototypeOf(this, EmptyRouletteValidationError.prototype)
  }
}

export class MissingPropertyRouletteValidationError extends RouletteErrorWithMessage {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(
      this,
      MissingPropertyRouletteValidationError.prototype
    )
  }
}

export class NotValidIdRouletteValidationError extends RouletteErrorWithMessage {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, NotValidIdRouletteValidationError.prototype)
  }
}

export class NotValidBetMoneyError extends RouletteError {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetMoneyError.prototype)
  }
}

export class NotValidBetPlaceError extends RouletteError {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetPlaceError.prototype)
  }
}
