import { RouletteDTO } from '../models/roulette-dto'
import { EmptyRouletteValidationError } from './RouletteValidationError'

export class RouletteDTOValidator {
  static validate(dto: RouletteDTO) {
    if (Object.keys(dto).length === 0) {
      throw new EmptyRouletteValidationError('')
    }
  }
}
