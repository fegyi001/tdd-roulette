import { RouletteDTO } from '../models/roulette-dto'
import { BetDTOValidator } from './BetDTOValidator'
import { Roulette } from './Roulette'

describe('Roulette', () => {
  it('should create an instance', () => {
    expect(new Roulette()).toBeTruthy()
  })

  it('Should call RouletteDTOValidator.validate on dto', () => {
    const dto: RouletteDTO = {
      boardId: 1,
      personId: 1,
      betMoney: 100,
      betPlace: '1'
    }
    spyOn(BetDTOValidator, 'validate').and.returnValue()
    const roulette = new Roulette()
    roulette.play(dto)
    expect(BetDTOValidator.validate).toHaveBeenCalledWith(dto)
  })
})
