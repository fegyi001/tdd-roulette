import { BetDTO } from '../models/bet-dto'
import { BetDTOParser } from './BetDTOParser'
import { BetDTOValidator } from './BetDTOValidator'
import { PersonPersistenceGateway } from './PersonPersistenceGateway'

export class Roulette {
  private personPersistenceGateway: PersonPersistenceGateway

  constructor(personPersistenceGateway: PersonPersistenceGateway) {
    this.personPersistenceGateway = personPersistenceGateway
  }

  public play(dto: BetDTO): void {
    BetDTOValidator.validate(dto)
    const bet = BetDTOParser.parse(dto)
    // TODO: create Game object with parser
    // TODO: create Person object with parser
  }
}
