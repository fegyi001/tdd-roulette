import { RouletteDTO } from '../models/roulette-dto'
import {
  EmptyBetValidationError,
  MissingPropertyBetValidationError,
  NotValidBetMoneyError,
  NotValidBetPlaceError,
  NotValidIdBetValidationError
} from './BetValidationError'

export class BetDTOValidator {
  static dto: RouletteDTO

  static validate(dto: RouletteDTO) {
    this.dto = dto
    this.propertiesExist()
    this.boardIdValidation()
    this.personIdValidation()
    this.betMoneyValidation()
    this.betPlaceValidation()
  }

  private static propertiesExist() {
    if (Object.keys(this.dto).length === 0) {
      throw new EmptyBetValidationError()
    }
    this.checkProperty('boardId')
    this.checkProperty('personId')
    this.checkProperty('betMoney')
    this.checkProperty('betPlace')
  }

  private static checkProperty(property: string) {
    if (!(property in this.dto)) {
      throw new MissingPropertyBetValidationError(property)
    }
  }

  private static boardIdValidation() {
    if (this.isInvalidId(this.dto.boardId)) {
      throw new NotValidIdBetValidationError('boardId')
    }
  }

  private static personIdValidation() {
    if (this.isInvalidId(this.dto.personId)) {
      throw new NotValidIdBetValidationError('personId')
    }
  }

  private static betPlaceValidation() {
    if (this.isInvalidBetPlace()) {
      throw new NotValidBetPlaceError()
    }
  }

  private static betMoneyValidation() {
    if (this.isInvalidBetMoney()) {
      throw new NotValidBetMoneyError()
    }
  }

  private static isInvalidId(id: number) {
    return this.isInvalidNumber(id) || id <= 0
  }

  private static isInvalidNumber(id: number) {
    return id === null || isNaN(id) || id === Infinity || id === -Infinity
  }

  private static isInvalidBetMoney() {
    return this.isInvalidNumber(this.dto.betMoney) || this.dto.betMoney <= 0
  }

  private static isInvalidBetPlace() {
    if (this.dto.betPlace === null) {
      return true
    }
    const betPlace = this.dto.betPlace.trim()
    return betPlace === '' || betPlace.includes(' ')
  }
}
