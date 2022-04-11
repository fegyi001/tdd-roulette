import { RouletteError } from './RouletteError'

export class BetValidationError extends RouletteError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, BetValidationError.prototype)
  }
}

export class BetValidationErrorWithoutMessage extends BetValidationError {
  constructor() {
    super('')
    Object.setPrototypeOf(this, BetValidationErrorWithoutMessage.prototype)
  }
}

export class EmptyBetValidationError extends BetValidationErrorWithoutMessage {
  constructor() {
    super()
    Object.setPrototypeOf(this, EmptyBetValidationError.prototype)
  }
}

export class MissingPropertyBetValidationError extends BetValidationError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, MissingPropertyBetValidationError.prototype)
  }
}

export class NotValidIdBetValidationError extends BetValidationError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, NotValidIdBetValidationError.prototype)
  }
}

export class NotValidBetMoneyError extends BetValidationErrorWithoutMessage {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetMoneyError.prototype)
  }
}

export class NotValidBetPlaceError extends BetValidationErrorWithoutMessage {
  constructor() {
    super()
    Object.setPrototypeOf(this, NotValidBetPlaceError.prototype)
  }
}
