import { BetType } from './BetType'
import { RouletteWheel } from './RouletteWheel'

export class Board {
  payMultiplierForOneNumber = 36
  payMultiplierForBinaryChoice = 2
  payLostGame = 0

  private rouletteWheel: RouletteWheel

  constructor(wheel: RouletteWheel) {
    this.rouletteWheel = wheel
  }

  public roll(betMoney: number, betType: BetType, betNumber?: number): number {
    const spunNumber = this.rouletteWheel.spin()
    if (betType === BetType.ONE_NUMBER) {
      return spunNumber === betNumber
        ? betMoney * this.payMultiplierForOneNumber
        : this.payLostGame
    }
    if (betType === BetType.PASSE) {
      return spunNumber > 18
        ? betMoney * this.payMultiplierForBinaryChoice
        : this.payLostGame
    }
    if (betType === BetType.MANQUE) {
      return spunNumber > 0 && spunNumber < 19
        ? betMoney * this.payMultiplierForBinaryChoice
        : this.payLostGame
    }
    throw new Error('Bet type not supported')
  }
}
