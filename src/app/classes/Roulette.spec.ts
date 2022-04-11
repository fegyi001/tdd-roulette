import { BetDTO } from '../models/bet-dto'
import { BetDTOValidator } from './BetDTOValidator'
import { Roulette } from './Roulette'

describe('Roulette', () => {
  let dto: BetDTO

  beforeEach(() => {
    dto = {
      boardId: 1,
      personId: 1,
      betMoney: 100,
      betPlace: '-1'
    }
  })

  it('should create an instance', () => {
    expect(new Roulette()).toBeTruthy()
  })

  it('Should call RouletteDTOValidator.validate on dto', () => {
    spyOn(BetDTOValidator, 'validate').and.returnValue()
    const roulette = new Roulette()
    roulette.play(dto)
    expect(BetDTOValidator.validate).toHaveBeenCalledWith(dto)
  })
})
