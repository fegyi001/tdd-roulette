import { RouletteDTO } from '../models/roulette-dto'
import { RouletteDTOValidator } from './RouletteDTOValidator'
import {
  EmptyRouletteValidationError,
  MissingPropertyRouletteValidationError,
  NotValidIdRouletteValidationError
} from './RouletteValidationError'

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

  let validDTO: any

  beforeEach(() => {
    validDTO = {
      boardId: 123,
      personId: 345,
      betMoney: 100,
      betPlace: '1'
    }
  })

  it('Positive case', () => {
    expect(() => RouletteDTOValidator.validate(validDTO)).not.toThrowError()
  })

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

  it('Null boardId', () => {
    const dto = { ...validDTO, boardId: null }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Not number boardId', () => {
    const dto = { ...validDTO, boardId: 'invalidBoardId' }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Too big number boardId', () => {
    const dto = {
      ...validDTO,
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      boardId: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Too big number boardId', () => {
    const dto = {
      ...validDTO,
      boardId:
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Negative boardId', () => {
    const dto = { ...validDTO, boardId: -1 }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Zero boardId', () => {
    const dto = { ...validDTO, boardId: 0 }
    expectInvalidIdException(dto, 'boardId')
  })
})

function expectMissingPropertyException(
  dto: RouletteDTO,
  propertyName: string
) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    MissingPropertyRouletteValidationError
  )
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(propertyName)
}

function expectInvalidIdException(dto: RouletteDTO, idName: string) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    NotValidIdRouletteValidationError
  )
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(idName)
}
