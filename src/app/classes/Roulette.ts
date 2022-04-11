import { RouletteDTO } from '../models/roulette-dto'
import { RouletteDTOValidator } from './RouletteDTOValidator'

export class Roulette {
  public play(dto: RouletteDTO) {
    // TODO:
    // needs to validate dto
    // RouletteDTOValidator with .validate(dto)
    // returns exception if invalid
    // if valid, then parse dto

    RouletteDTOValidator.validate(dto)
  }
}
