import { RouletteDTO } from '../models/roulette-dto'
import {
  EmptyRouletteValidationError,
  MissingPropertyRouletteValidationError,
  NotValidIdRouletteValidationError
} from './RouletteValidationError'

export class RouletteDTOValidator {
  static dto: RouletteDTO

  static validate(dto: RouletteDTO) {
    this.dto = dto
    this.propertiesExist()
    this.boardIdValidation()
    this.personIdValidation()
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

  private static boardIdValidation() {
    if (this.isInvalidId(this.dto.boardId)) {
      throw new NotValidIdRouletteValidationError('boardId')
    }
  }

  private static personIdValidation() {
    if (this.isInvalidId(this.dto.personId)) {
      throw new NotValidIdRouletteValidationError('personId')
    }
  }

  private static isInvalidId(id: number) {
    return (
      id === null || isNaN(id) || id === Infinity || id === -Infinity || id <= 0
    )
  }
}
