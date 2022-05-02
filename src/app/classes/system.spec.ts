import { BetDTO } from '../models/bet-dto'
import { InMemoryPersonGateway } from '../persistence/InMemoryPersonGateway'
import { Roulette } from './Roulette'

describe('Roulette', () => {
  let dto: BetDTO
  let roulette: Roulette

  beforeEach(() => {
    roulette = new Roulette(new InMemoryPersonGateway())
    dto = {
      boardId: 1,
      personId: 1,
      betMoney: 100,
      betPlace: '-1'
    }
  })

  it('should throw an error POSITIVE PATH', () => {
    expect(() => roulette.play(dto)).not.toThrowError()
  })

  it('should validate dto NEGATIVE PATH', () => {
    const invalidDto = { ...dto, betPlace: 'invalid betPlace' }
    expect(() => roulette.play(invalidDto)).toThrowError()
  })
})
