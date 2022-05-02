import { BetType } from '../enums/BetType'
import { BetDTO } from '../models/bet-dto'
import { Bet } from './Bet'

export class BetDTOParser {
  static parse(dto: BetDTO): Bet {
    if (this.isOneNumberGame(dto.betPlace)) {
      return new Bet(dto.betMoney, Number(dto.betPlace), BetType.ONE_NUMBER)
    }
    if (this.isTopColumnGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.TOP_COLUMN)
    }
    if (this.isMiddleColumnGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.MIDDLE_COLUMN)
    }
    if (this.isBottomColumnGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.BOTTOM_COLUMN)
    }
    if (this.isRedGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.RED)
    }
    if (this.isBlackGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.BLACK)
    }
    if (this.isPremierGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.PREMIER)
    }
    if (this.isMoyenGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.MOYEN)
    }
    if (this.isDernierGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.DERNIER)
    }
    if (this.isPasseGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.PASSE)
    }
    if (this.isManqueGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.MANQUE)
    }
    if (this.isPairGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.PAIR)
    }
    if (this.isImpairGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.IMPAIR)
    }
    if (this.isTwoNumbersHorizontalGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.TWO_NUMBERS_HORIZONTAL)
    }
    if (this.isTwoNumbersVerticalGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.TWO_NUMBERS_VERTICAL)
    }
    if (this.isFourNumbersGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.FOUR_NUMBERS)
    }
    if (this.isSixNumbersGame(dto.betPlace)) {
      return new Bet(dto.betMoney, undefined, BetType.SIX_NUMBERS)
    }
    throw new Error(
      'Not existing case during bet parsing, validator should have prevented this'
    )
  }

  private static isOneNumberGame(betPlace: string) {
    return !isNaN(Number(betPlace))
  }

  private static isTopColumnGame(betPlace: string) {
    return betPlace === '1c'
  }

  private static isMiddleColumnGame(betPlace: string) {
    return betPlace === '2c'
  }

  private static isBottomColumnGame(betPlace: string) {
    return betPlace === '3c'
  }

  private static isRedGame(betPlace: string) {
    return ['r', 'red'].includes(betPlace)
  }

  private static isBlackGame(betPlace: string) {
    return ['b', 'black'].includes(betPlace)
  }

  private static isPremierGame(betPlace: string) {
    return betPlace === 'p'
  }

  private static isMoyenGame(betPlace: string) {
    return betPlace === 'm'
  }

  private static isDernierGame(betPlace: string) {
    return betPlace === 'd'
  }

  private static isPasseGame(betPlace: string) {
    return betPlace === 'pa'
  }

  private static isManqueGame(betPlace: string) {
    return betPlace === 'ma'
  }

  private static isPairGame(betPlace: string) {
    return betPlace === 'pai'
  }
  private static isImpairGame(betPlace: string) {
    return betPlace === 'imp'
  }

  private static isTwoNumbersHorizontalGame(betPlace: string) {
    const numbers = this.getSplitNumbers(betPlace)
    return numbers[1] - numbers[0] === 1
  }

  private static isTwoNumbersVerticalGame(betPlace: string) {
    const numbers = this.getSplitNumbers(betPlace)
    return numbers[1] - numbers[0] === 3
  }

  private static isFourNumbersGame(betPlace: string) {
    const numbers = this.getSplitNumbers(betPlace)
    return numbers[1] - numbers[0] === 4
  }

  private static isSixNumbersGame(betPlace: string) {
    const numbers = this.getSplitNumbers(betPlace)
    return numbers[1] - numbers[0] === 5
  }

  private static getSplitNumbers(betPlace: string) {
    return betPlace.split('-').map((n: string) => Number(n))
  }
}
