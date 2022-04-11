import { BetType } from '../enums/BetType'
import { BetDTO } from '../models/bet-dto'
import { Bet } from './Bet'

export class BetDTOParser {
  static parse(dto: BetDTO): Bet {
    const bet = new Bet()
    bet.betMoney = dto.betMoney
    if (!isNaN(Number(dto.betPlace))) {
      bet.betType = BetType.ONE_NUMBER
      bet.betPlace = Number(dto.betPlace)
      return bet
    }
    throw new Error('Method not implemented.')
  }
}
