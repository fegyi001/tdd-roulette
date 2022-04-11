import { BetType } from '../enums/BetType'

export class Bet {
  public betMoney: number | undefined
  public betPlace: number | undefined
  public betType: BetType | undefined
}
