import { RouletteDTOValidator } from './RouletteDTOValidator'
import { NotValidBetPlaceError } from './RouletteValidationError'

describe('RouletteDTOValidator for betPlace', () => {
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

  let validDTO: any

  beforeEach(() => {
    validDTO = {
      boardId: 1,
      personId: 1,
      betMoney: 1,
      betPlace: '1'
    }
  })

  it('Null betPlace', () => {
    const dto = { ...validDTO, betPlace: null }
    expectInvalidBetPlaceException(dto)
  })

  it('Empty betPlace', () => {
    const dto = { ...validDTO, betPlace: '' }
    expectInvalidBetPlaceException(dto)
  })

  it('Empty spaces betPlace', () => {
    const dto = { ...validDTO, betPlace: '   ' }
    expectInvalidBetPlaceException(dto)
  })

  it('Spaces inside betPlace', () => {
    const dto = { ...validDTO, betPlace: 'multiple words' }
    expectInvalidBetPlaceException(dto)
  })
})

function expectInvalidBetPlaceException(dto: any) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    NotValidBetPlaceError
  )
}
