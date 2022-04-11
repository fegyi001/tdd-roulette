import { RouletteDTO } from '../models/roulette-dto'
import { Roulette } from './Roulette'
import { RouletteDTOValidator } from './RouletteDTOValidator'

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
    spyOn(RouletteDTOValidator, 'validate').and.returnValue()
    const roulette = new Roulette()
    roulette.play(dto)
    expect(RouletteDTOValidator.validate).toHaveBeenCalledWith(dto)
  })
})
