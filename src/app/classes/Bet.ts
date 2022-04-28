import { BetType } from '../enums/BetType'

export class Bet {
  public betMoney: number
  public betPlace: number | undefined
  public betType: BetType

  constructor(
    betMoney: number,
    betPlace: number | undefined,
    betType: BetType
  ) {
    this.betMoney = betMoney
    this.betPlace = betPlace
    this.betType = betType
  }
}
