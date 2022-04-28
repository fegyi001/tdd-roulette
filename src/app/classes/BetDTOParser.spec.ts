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

  it('Parse TOP_COLUMN bet', () => {
    const dto = { ...betDTO, betPlace: '1c' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.TOP_COLUMN)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse MIDDLE_COLUMN bet', () => {
    const dto = { ...betDTO, betPlace: '2c' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.MIDDLE_COLUMN)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse BOTTOM_COLUMN bet', () => {
    const dto = { ...betDTO, betPlace: '3c' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.BOTTOM_COLUMN)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse RED bet with "r"', () => {
    const dto = { ...betDTO, betPlace: 'r' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.RED)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse RED bet with "red"', () => {
    const dto = { ...betDTO, betPlace: 'red' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.RED)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse BLACK bet with "b"', () => {
    const dto = { ...betDTO, betPlace: 'b' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.BLACK)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse BLACK bet with "black"', () => {
    const dto = { ...betDTO, betPlace: 'black' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.BLACK)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse PREMIER bet', () => {
    const dto = { ...betDTO, betPlace: 'p' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.PREMIER)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse MOYEN bet', () => {
    const dto = { ...betDTO, betPlace: 'm' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.MOYEN)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse DERNIER bet', () => {
    const dto = { ...betDTO, betPlace: 'd' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.DERNIER)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse PASSE bet', () => {
    const dto = { ...betDTO, betPlace: 'pa' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.PASSE)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse MANQUE bet', () => {
    const dto = { ...betDTO, betPlace: 'ma' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.MANQUE)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse PAIR bet', () => {
    const dto = { ...betDTO, betPlace: 'pai' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.PAIR)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse IMPAIR bet', () => {
    const dto = { ...betDTO, betPlace: 'imp' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.IMPAIR)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse TWO_NUMBERS_HORIZONTAL bet', () => {
    const dto = { ...betDTO, betPlace: '2-3' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.TWO_NUMBERS_HORIZONTAL)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse TWO_NUMBERS_VERTICAL bet', () => {
    const dto = { ...betDTO, betPlace: '2-5' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.TWO_NUMBERS_VERTICAL)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse FOUR_NUMBERS bet', () => {
    const dto = { ...betDTO, betPlace: '5-9' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.FOUR_NUMBERS)
    expect(betObject.betPlace).toEqual(undefined)
  })

  it('Parse SIX_NUMBERS bet', () => {
    const dto = { ...betDTO, betPlace: '7-12' }
    const betObject = BetDTOParser.parse(dto)
    expect(betObject.betMoney).toEqual(100)
    expect(betObject.betType).toEqual(BetType.SIX_NUMBERS)
    expect(betObject.betPlace).toEqual(undefined)
  })
})
