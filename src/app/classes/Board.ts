import { BetType } from '../enums/BetType'
import { RouletteWheel } from './RouletteWheel'

export class Board {
  payMultiplierForOneNumber = 36
  payMultiplierForBinaryChoice = 2
  payLostGame = 0

  private rouletteWheel: RouletteWheel
  private spunNumber = -1

  constructor(wheel: RouletteWheel) {
    this.rouletteWheel = wheel
  }

  public roll(betMoney: number, betType: BetType, betNumber?: number): number {
    this.spunNumber = this.rouletteWheel.spin()
    if (betType === BetType.ONE_NUMBER) {
      return this.calculateOneNumberPay(betNumber, betMoney)
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
    throw new Error('Bet type not supported')
  }

  private calculateOneNumberPay(
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
    return this.spunNumber > 0 && this.spunNumber < 19
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }

  private calculatePairCasePay(betMoney: number) {
    return this.spunNumber % 2 === 0 && this.spunNumber !== 0
      ? betMoney * this.payMultiplierForBinaryChoice
      : this.payLostGame
  }
}
