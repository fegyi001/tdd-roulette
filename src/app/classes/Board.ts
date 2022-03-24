import { BetType } from '../enums/BetType'
import { RouletteWheel } from './RouletteWheel'

export class Board {
  payMultiplierForOneNumber = 36
  payMultiplierForBinaryChoice = 2
  payMultiplierForTernaryChoice = 3
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
    if (betType === BetType.DERNIER) {
      return this.calculateDernierCasePay(betMoney)
    }
    if (betType === BetType.TOP_COLUMN) {
      return this.calculateTopColumnCasePay(betMoney)
    }
    if (betType === BetType.MIDDLE_COLUMN) {
      return this.calculateMiddleColumnCasePay(betMoney)
    }
    if (betType === BetType.BOTTOM_COLUMN) {
      return this.calculateBottomColumnCasePay(betMoney)
    }
    throw new Error('Bet type not supported')
  }

  private calculateOneNumberCasePay(
    betNumber: number | undefined,
    betMoney: number
  ) {
    return this.calculatePaidMoney(
      this.spunNumber === betNumber,
      betMoney,
      this.payMultiplierForOneNumber
    )
  }

  private calculatePasseCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.spunNumber > 18,
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculateManqueCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.spunNumber < 19,
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculatePairCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.spunNumber % 2 === 0,
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculateImpairCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.spunNumber % 2 === 1,
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculateRedNumberCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isRedNumber(),
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculateBlackNumberCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isBlackNumber(),
      betMoney,
      this.payMultiplierForBinaryChoice
    )
  }

  private calculatePremierCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isPremier(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculateMoyenCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isMoyen(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculateDernierCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isDernier(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculateTopColumnCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isTopColumn(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculateMiddleColumnCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isMiddleColumn(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculateBottomColumnCasePay(betMoney: number) {
    return this.calculatePaidMoney(
      this.isBottomColumn(),
      betMoney,
      this.payMultiplierForTernaryChoice
    )
  }

  private calculatePaidMoney(
    isWin: boolean,
    betMoney: number,
    multiplier: number
  ) {
    return isWin ? betMoney * multiplier : this.payLostGame
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

  private isPremier() {
    return this.spunNumber < 13
  }

  private isDernier() {
    return this.spunNumber > 24
  }

  private isMoyen() {
    return !(this.isPremier() || this.isDernier())
  }

  private isTopColumn() {
    return this.spunNumber % 3 === 1
  }

  private isMiddleColumn() {
    return this.spunNumber % 3 === 2
  }

  private isBottomColumn() {
    return this.spunNumber % 3 === 0
  }
}
