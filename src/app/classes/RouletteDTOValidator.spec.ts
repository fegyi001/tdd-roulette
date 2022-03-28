import { RouletteDTOValidator } from './RouletteDTOValidator'
import { EmptyRouletteValidationError } from './RouletteValidationError'

describe('RouletteDTOValidator', () => {
  // 34
  // p
  // d
  // m
  // black és b is
  // red és r is
  // 1c
  // 2c
  // 3c
  // 2-3
  // 2-5
  // 7-12
  // 5-9
  // hatos blokk: eleje - vége
  // négyes blokk: eleje- vége
  // pa
  // ma
  // pai-im

  it('Empty DTO', () => {
    const dto: any = {}
    expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
      EmptyRouletteValidationError
    )
  })

  it('Temporary test', () => {
    const dto: any = {
      boardId: 123,
      personId: 345,
      betMoney: 12,
      betPlace: '1'
    }
    expect(() => RouletteDTOValidator.validate(dto)).not.toThrowError()
  })
})
