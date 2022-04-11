import { BetDTO } from '../models/bet-dto'
import { BetDTOValidator } from './BetDTOValidator'

export class Roulette {
  public validator: BetDTOValidator = new BetDTOValidator()

  public play(dto: BetDTO) {
    BetDTOValidator.validate(dto)
    // TODO:
    // if valid, then parse dto
  }
}
