import { BetType } from '../enums/BetType'
import { RouletteWheel } from './RouletteWheel'

export class Board {
  payMultiplierForOneNumber = 36
  payMultiplierForBinaryChoice = 2
  payMultiplierForDozenChoice = 3
  payLostGame = 0

  private rouletteWheel: RouletteWheel
  private spunNumber = -1

  constructor(wheel: RouletteWheel) {
    this.rouletteWheel = wheel
  }

  public roll(betMoney: number, betType: BetType, betNumber?: number): number {
    this.nextSpin()
    return this.calculatePay(betType, betMoney, betNumber)
  }

  private nextSpin() {
    this.spunNumber = this.rouletteWheel.spin()
  }

  private calculatePay(
    betType: BetType,
    betMoney: number,
    betNumber?: number
  ): number {
    return this.spunNumber === 0
      ? this.calculateZeroCasePay(betType, betMoney, betNumber)
      : this.calculateNormalCasePay(betType, betMoney, betNumber)
  }

  private calculateZeroCasePay(
    betType: BetType,
    betMoney: number,
    betNumber?: number
  ): number {
    if (betType === BetType.ONE_NUMBER) {
      return this.calculateOneNumberCasePay(betNumber, betMoney)
    }
    return 0
  }

  private calculateNormalCasePay(
    betType: BetType,
    betMoney: number,
    betNumber?: number
  ): number {
    if (betType === BetType.ONE_NUMBER) {
      return this.calculateOneNumberCasePay(betNumber, betMoney)
    }
    if (betType === BetType.PASSE) {
      return this.calculatePasseCasePay(betMoney)
    }
    if (betType === BetType.MANQUE) {
      return this.calculateManqueCasePay(betMoney)
    }
    if (betType === BetType.PAIR) {
      return this.calculatePairCasePay(betMoney)
    }
    if (betType === BetType.IMPAIR) {
      return this.calculateImpairCasePay(betMoney)
    }
    if (betType === BetType.RED) {
      return this.calculateRedNumberCasePay(betMoney)
    }
    if (betType === BetType.BLACK) {
      return this.calculateBlackNumberCasePay(betMoney)
    }
    if (betType === BetType.PREMIER) {
      return this.calculatePremierCasePay(betMoney)
    }
    if (betType === BetType.MOYEN) {
      return this.calculateMoyenCasePay(betMoney)
    }
    throw new Error('Bet type not supported')
  }

  private calculateOneNumberCasePay(
    betNumber: number | undefined,
    betMoney: number
  ) {
    return this.spunNumber === betNumber
      ? betMoney * this.payMultiplierForOneNumber
      : this.payLostGame
  }

  private calculatePasseCasePay(betMoney: number) {
    return this.spunNumber > 18
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculateManqueCasePay(betMoney: number) {
    return this.spunNumber < 19
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculatePairCasePay(betMoney: number) {
    return this.spunNumber % 2 === 0
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculateImpairCasePay(betMoney: number) {
    return this.spunNumber % 2 === 1
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculateRedNumberCasePay(betMoney: number) {
    return this.isRedNumber()
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculateBlackNumberCasePay(betMoney: number) {
    return this.isBlackNumber()
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private isRedNumber() {
    const redNumbers = [
      1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
    ]
    return redNumbers.includes(this.spunNumber)
  }

  private isBlackNumber() {
    return !this.isRedNumber()
  }

  private calculatePremierCasePay(betMoney: number) {
    return this.isPremier()
      ? betMoney * this.payMultiplierForDozenChoice
      : this.payLostGame
  }

  private calculateMoyenCasePay(betMoney: number) {
    return this.isMoyen()
      ? betMoney * this.payMultiplierForDozenChoice
      : this.payLostGame
  }

  private isPremier() {
    return this.spunNumber < 13
  }

  private isMoyen() {
    return this.spunNumber > 12 && this.spunNumber < 25
  }
}
