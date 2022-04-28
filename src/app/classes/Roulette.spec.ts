import { BetDTO } from '../models/bet-dto'
import { Bet } from './Bet'
import { BetDTOParser } from './BetDTOParser'
import { BetDTOValidator } from './BetDTOValidator'
import { Roulette } from './Roulette'

describe('Roulette', () => {
  let dto: BetDTO
  let roulette: Roulette

  beforeEach(() => {
    roulette = new Roulette()
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
    spyOn(BetDTOParser, 'parse').and.returnValue(new Bet())
    roulette.play(dto)
    expect(BetDTOParser.parse).toHaveBeenCalledWith(dto)
  })
})
