import { RouletteError } from '../classes/RouletteError'

export class PersonNotFoundError extends RouletteError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, PersonNotFoundError.prototype)
  }
}
