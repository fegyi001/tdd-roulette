import { RouletteDTO } from '../models/roulette-dto'
import { RouletteDTOValidator } from './RouletteDTOValidator'
import {
  EmptyRouletteValidationError,
  MissingPropertyRouletteValidationError,
  NotValidBetMoneyError,
  NotValidBetPlaceError,
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
  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  const positiveInfinityNumber = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  const negativeInfinityNumber =
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

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
      boardId: positiveInfinityNumber
    }
    expectInvalidIdException(dto, 'boardId')
  })

  it('Too big negative number boardId', () => {
    const dto = {
      ...validDTO,
      boardId: negativeInfinityNumber
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

  it('Null personId', () => {
    const dto = { ...validDTO, personId: null }
    expectInvalidIdException(dto, 'personId')
  })

  it('Not number personId', () => {
    const dto = { ...validDTO, personId: 'invalidPersonId' }
    expectInvalidIdException(dto, 'personId')
  })

  it('Too big number personId', () => {
    const dto = {
      ...validDTO,
      personId: positiveInfinityNumber
    }
    expectInvalidIdException(dto, 'personId')
  })

  it('Too big negative number personId', () => {
    const dto = {
      ...validDTO,
      personId: negativeInfinityNumber
    }
    expectInvalidIdException(dto, 'personId')
  })

  it('Negative personId', () => {
    const dto = { ...validDTO, personId: -1 }
    expectInvalidIdException(dto, 'personId')
  })

  it('Zero personId', () => {
    const dto = { ...validDTO, personId: 0 }
    expectInvalidIdException(dto, 'personId')
  })

  it('Null betMoney', () => {
    const dto = { ...validDTO, betMoney: null }
    expectInvalidBetMoneyException(dto)
  })

  it('Not number betMoney', () => {
    const dto = { ...validDTO, betMoney: 'invalidBetMoney' }
    expectInvalidBetMoneyException(dto)
  })

  it('Too big number betMoney', () => {
    const dto = {
      ...validDTO,
      betMoney: positiveInfinityNumber
    }
    expectInvalidBetMoneyException(dto)
  })

  it('Too big negative number betMoney', () => {
    const dto = {
      ...validDTO,
      betMoney: negativeInfinityNumber
    }
    expectInvalidBetMoneyException(dto)
  })

  it('Negative betMoney', () => {
    const dto = { ...validDTO, betMoney: -1 }
    expectInvalidBetMoneyException(dto)
  })

  it('Zero betMoney', () => {
    const dto = { ...validDTO, betMoney: 0 }
    expectInvalidBetMoneyException(dto)
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

function expectInvalidBetMoneyException(dto: RouletteDTO) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    NotValidBetMoneyError
  )
}

function expectInvalidBetPlaceException(dto: any) {
  expect(() => RouletteDTOValidator.validate(dto)).toThrowError(
    NotValidBetPlaceError
  )
}
