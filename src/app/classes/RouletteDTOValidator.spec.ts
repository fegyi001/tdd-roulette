import { RouletteDTO } from '../models/roulette-dto'
import { RouletteDTOValidator } from './RouletteDTOValidator'
import {
  EmptyRouletteValidationError,
  MissingPropertyRouletteValidationError
} from './RouletteValidationError'

function expectMissingPropertyException(
  dto: RouletteDTO,
  propertyName: string
) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    MissingPropertyRouletteValidationError
  )
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(propertyName)
}

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

  it('No boardId', () => {
    const dto: any = { invalidProperty: null }
    expectMissingPropertyException(dto, 'boardId')
  })

  it('No personId', () => {
    const dto: any = { boardId: null }
    expectMissingPropertyException(dto, 'personId')
  })

  it('No betMoney', () => {
    const dto: any = { boardId: null, personId: null }
    expectMissingPropertyException(dto, 'betMoney')
  })

  it('No betPlace', () => {
    const dto: any = { boardId: null, personId: null, betMoney: null }
    expectMissingPropertyException(dto, 'betPlace')
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
