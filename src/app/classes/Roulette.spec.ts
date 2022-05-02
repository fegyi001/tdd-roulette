import { BetType } from '../enums/BetType'
import { BetDTO } from '../models/bet-dto'
import { Bet } from './Bet'
import { BetDTOParser } from './BetDTOParser'
import { BetDTOValidator } from './BetDTOValidator'
import { Person } from './Person'
import { Roulette } from './Roulette'

describe('Roulette', () => {
  let dto: BetDTO
  let roulette: Roulette

  beforeEach(() => {
    roulette = new Roulette(new PersonPersistenceGatewayFake())
    dto = {
      boardId: 1,
      personId: 1,
      betMoney: 100,
      betPlace: '-1'
    }
  })

  it('should create an instance', () => {
    expect(roulette).toBeTruthy()
  })

  it('Should call RouletteDTOValidator.validate on dto', () => {
    spyOn(BetDTOValidator, 'validate').and.returnValue()
    roulette.play(dto)
    expect(BetDTOValidator.validate).toHaveBeenCalledWith(dto)
  })

  it('Should call RouletteDTOParser.parse on dto', () => {
    spyOn(BetDTOValidator, 'validate').and.returnValue()
    spyOn(BetDTOParser, 'parse').and.returnValue(
      new Bet(100, -1, BetType.ONE_NUMBER)
    )
    roulette.play(dto)
    expect(BetDTOParser.parse).toHaveBeenCalledWith(dto)
  })

  // it('load person', () => {
  //   spyOn(BetDTOValidator, 'validate').and.returnValue()
  //   spyOn(BetDTOParser, 'parse').and.returnValue(
  //     new Bet(100, -1, BetType.ONE_NUMBER)
  //   )
  //   spyOn(PersonPersistenceGatewayFake, 'load')
  //     .and.returnValue
  //     // new Person(1, 'Fake Person', 0)
  //     ()
  //   roulette.play(dto)
  //   expect(PersonPersistenceGatewayFake.load).toHaveBeenCalledWith(1)
  // })
})

// TODO: how to spy on a non-static class method?
class PersonPersistenceGatewayFake {
  load(id: number): Person {
    return new Person(1, 'Fake Person', 0)
  }

  //eslint-disable-next-line
  save(person: Person): void {}
}
