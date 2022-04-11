import { BetType } from '../enums/BetType'
import { BetDTO } from '../models/bet-dto'
import { BetDTOParser } from './BetDTOParser'

describe('Bet DTO Parser', () => {
  const betDTO: BetDTO = {
    personId: -1,
    boardId: -1,
    betMoney: 100,
    betPlace: 'empty'
  }

  it('Temp test', () => {
    expect(() => BetDTOParser.parse(betDTO)).toThrowError(
      'Method not implemented.'
    )
  })

  it('Parse ONE_NUMBER bet', () => {
    const dto = { ...betDTO, betPlace: '1' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.ONE_NUMBER)
    expect(betObject.betPlace).toEqual(1)
  })

  // it('Parse COLUMN bet', () => {
  //   const dto = { ...betDTO, betPlace: '1c' }
  //   const betObject = BetDTOParser.parse(dto)
  //   expect(betObject.betMoney).toEqual(100)
  //   expect(betObject.betType).toEqual(BetType.TOP_COLUMN)
  //   expect(betObject.betPlace).toEqual(-1)
  // })
})
