import { RouletteDTO } from '../models/roulette-dto'
import {
  EmptyRouletteValidationError,
  MissingPropertyRouletteValidationError
} from './RouletteValidationError'

export class RouletteDTOValidator {
  static dto: RouletteDTO

  static validate(dto: RouletteDTO) {
    this.dto = dto
    this.propertiesExist()
  }

  private static propertiesExist() {
    if (Object.keys(this.dto).length === 0) {
      throw new EmptyRouletteValidationError('')
    }
    this.checkProperty('boardId')
    this.checkProperty('personId')
    this.checkProperty('betMoney')
    this.checkProperty('betPlace')
  }

  private static checkProperty(property: string) {
    if (!(property in this.dto)) {
      throw new MissingPropertyRouletteValidationError(property)
    }
  }
}
