import { BetDTO } from '../models/bet-dto'
import { BetDTOParser } from './BetDTOParser'
import { BetDTOValidator } from './BetDTOValidator'

export class Roulette {
  public play(dto: BetDTO): void {
    BetDTOValidator.validate(dto)
    const bet = BetDTOParser.parse(dto)
  }
}
