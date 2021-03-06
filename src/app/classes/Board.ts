import { BetType } from '../enums/BetType'
import { RouletteWheel } from './RouletteWheel'

export class Board {
  payLostGame = 0
  payMultiplierForBinaryChoice = 2
  payMultiplierForTernaryChoice = 3
  payMultiplierForSixNumbers = 6
  payMultiplierForFourNumbers = 9
  payMultiplierForThreeNumbers = 12
  payMultiplierForTwoNumbers = 18
  payMultiplierForOneNumber = 36
  redNumbers = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
  ]

  private rouletteWheel: RouletteWheel
  private spunNumber = -1

  constructor(wheel: RouletteWheel) {
    this.rouletteWheel = wheel
  }

  public roll(betMoney: number, betType: BetType, betNumber?: number): number {
    this.nextSpin()
    return this.calculatePay(betMoney, betType, betNumber)
  }

  private nextSpin() {
    this.spunNumber = this.rouletteWheel.spin()
  }

  private calculatePay(
    betMoney: number,
    betType: BetType,
    betNumber: number | undefined
  ): number {
    return this.spunNumber === 0
      ? this.calculateZeroCasePay(betType, betMoney, betNumber)
      : this.calculateNormalCasePay(betType, betMoney, betNumber)
  }

  private calculateZeroCasePay(
    betType: BetType,
    betMoney: number,
    betNumber: number | undefined
  ): number {
    if (betType === BetType.ONE_NUMBER) {
      return this.calculateOneNumberCasePay(betNumber, betMoney)
    }
    return 0
  }

  private calculateNormalCasePay(
    betType: BetType,
    betMoney: number,
    betNumber: number | undefined
  ): number {
    if (this.isBetNumberInvalid(betNumber, betType)) {
      throw new Error('Bet number is invalid')
    }
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
    if (betType === BetType.SIX_NUMBERS) {
      return this.calculateSixNumbersCasePay(betMoney, betNumber)
    }
    if (betType === BetType.FOUR_NUMBERS) {
      return this.calculateFourNumbersCasePay(betMoney, betNumber)
    }
    if (betType === BetType.THREE_NUMBERS && betNumber) {
      return this.calculateThreeNumbersCasePay(betMoney, betNumber)
    }
    if (betType === BetType.TWO_NUMBERS_HORIZONTAL) {
      return this.calculateTwoNumbersHorizontalCasePay(betMoney, betNumber)
    }
    if (betType === BetType.TWO_NUMBERS_VERTICAL) {
      return this.calculateTwoNumbersVerticalCasePay(betMoney, betNumber)
    }
    throw new Error('Bet type not supported')
  }

  private isBetNumberInvalid(betNumber: number | undefined, betType: BetType) {
    if (this.isNumberNotOnBoard(betNumber)) {
      return true
    }
    if (betType === BetType.ONE_NUMBER) {
      return this.isOneNumberBetNumberInvalid(betNumber)
    }
    if (betType === BetType.SIX_NUMBERS) {
      return this.isSixNumbersBetNumberInvalid(betNumber)
    }
    if (betType === BetType.FOUR_NUMBERS) {
      return this.isFourNumbersBetNumberInvalid(betNumber)
    }
    if (betType === BetType.THREE_NUMBERS) {
      return this.isThreeNumbersBetNumberInvalid(betNumber)
    }
    if (betType === BetType.TWO_NUMBERS_HORIZONTAL) {
      return this.isTwoNumbersHorizontalBetNumberInvalid(betNumber)
    }
    if (betType === BetType.TWO_NUMBERS_VERTICAL) {
      return this.isTwoNumbersVerticalBetNumberInvalid(betNumber)
    }
    return false
  }

  private isNumberNotOnBoard(betNumber: number | undefined) {
    return betNumber !== undefined && (betNumber < 0 || betNumber > 36)
  }

  private isOneNumberBetNumberInvalid(betNumber: number | undefined) {
    return betNumber === undefined
  }

  private isSixNumbersBetNumberInvalid(betNumber: number | undefined) {
    return (
      betNumber === undefined ||
      this.isLastRow(betNumber) ||
      !this.isTopColumn(betNumber)
    )
  }

  private isFourNumbersBetNumberInvalid(betNumber: number | undefined) {
    return (
      betNumber === undefined ||
      this.isBottomColumn(betNumber) ||
      this.isLastRow(betNumber)
    )
  }

  private isThreeNumbersBetNumberInvalid(betNumber: number | undefined) {
    return betNumber === undefined
  }

  private isTwoNumbersHorizontalBetNumberInvalid(
    betNumber: number | undefined
  ) {
    return betNumber === undefined || this.isBottomColumn(betNumber)
  }

  private isTwoNumbersVerticalBetNumberInvalid(betNumber: number | undefined) {
    return betNumber === undefined || this.isLastRow(betNumber)
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

  private calculateSixNumbersCasePay(
    betMoney: number,
    betNumber: number | undefined
  ) {
    const winCells = this.createFixedLengthArrayFromStart(betNumber, 6)
    return this.calculatePaidMoney(
      winCells.includes(this.spunNumber),
      betMoney,
      this.payMultiplierForSixNumbers
    )
  }

  private calculateFourNumbersCasePay(
    betMoney: number,
    betNumber: number | undefined
  ) {
    const winCells = this.createFixedLengthArrayFromStart(betNumber, 5)
    winCells.splice(2, 1)
    return this.calculatePaidMoney(
      winCells.includes(this.spunNumber),
      betMoney,
      this.payMultiplierForFourNumbers
    )
  }

  private calculateThreeNumbersCasePay(
    betMoney: number,
    betNumber: number | undefined
  ) {
    const winCells = this.createFixedLengthArrayFromStart(betNumber, 3)
    return this.calculatePaidMoney(
      winCells.includes(this.spunNumber),
      betMoney,
      this.payMultiplierForThreeNumbers
    )
  }

  private calculateTwoNumbersHorizontalCasePay(
    betMoney: number,
    betNumber: number | undefined
  ) {
    const winCells = this.createFixedLengthArrayFromStart(betNumber, 2)
    return this.calculatePaidMoney(
      winCells.includes(this.spunNumber),
      betMoney,
      this.payMultiplierForTwoNumbers
    )
  }

  private calculateTwoNumbersVerticalCasePay(
    betMoney: number,
    betNumber: number | undefined
  ) {
    const winCells = [betNumber, betNumber === undefined ? 0 : betNumber + 3]
    return this.calculatePaidMoney(
      winCells.includes(this.spunNumber),
      betMoney,
      this.payMultiplierForTwoNumbers
    )
  }

  private createFixedLengthArrayFromStart(
    start: number | undefined,
    length: number
  ) {
    return Array.from(
      { length },
      (_, i) => i + (start === undefined ? 0 : start)
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
    return this.redNumbers.includes(this.spunNumber)
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

  private isTopColumn(cell: number = this.spunNumber) {
    return cell % 3 === 1
  }

  private isMiddleColumn(cell: number = this.spunNumber) {
    return cell % 3 === 2
  }

  private isBottomColumn(cell: number = this.spunNumber) {
    return cell % 3 === 0
  }

  private isLastRow(cell: number) {
    return cell > 33
  }
}
