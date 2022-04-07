import { BetType } from '../enums/BetType'
import { Board } from './Board'
import { RouletteWheel } from './RouletteWheel'

function createSpyBoard(spin: number): Board {
  const wheelSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {
    spin
  })
  return new Board(wheelSpy)
}

describe('Board', () => {
  const betMoney = 100
  const moneyWhenPlayerLost = 0
  const redNumbers = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
  ]
  const blackNumbers = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
  ]
  const betNumberNotAllowedExceptionMessage = `Bet number is invalid`

  it('Bet ONE_NUMBER win', () => {
    const board = createSpyBoard(10)
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 10)).toEqual(3600)
  })

  it('Bet ONE_NUMBER loose', () => {
    const board = createSpyBoard(9)
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 10)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet PASSE win', () => {
    const board = createSpyBoard(19)
    expect(board.roll(betMoney, BetType.PASSE)).toEqual(200)
  })

  it('Bet PASSE loose', () => {
    const board = createSpyBoard(18)
    expect(board.roll(betMoney, BetType.PASSE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MANQUE win', () => {
    const board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(200)
  })

  it('Bet MANQUE loose', () => {
    const board = createSpyBoard(19)
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet PAIR win', () => {
    const board = createSpyBoard(10)
    expect(board.roll(betMoney, BetType.PAIR)).toEqual(200)
  })

  it('Bet PAIR loose', () => {
    const board = createSpyBoard(9)
    expect(board.roll(betMoney, BetType.PAIR)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet IMPAIR win', () => {
    const board = createSpyBoard(9)
    expect(board.roll(betMoney, BetType.IMPAIR)).toEqual(200)
  })

  it('Bet IMPAIR loose', () => {
    const board = createSpyBoard(10)
    expect(board.roll(betMoney, BetType.IMPAIR)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet RED win', () => {
    redNumbers.forEach((redNumber) => {
      const board = createSpyBoard(redNumber)
      expect(board.roll(betMoney, BetType.RED)).toEqual(200)
    })
  })

  it('Bet RED loose', () => {
    blackNumbers.forEach((blackNumber) => {
      const board = createSpyBoard(blackNumber)
      expect(board.roll(betMoney, BetType.RED)).toEqual(moneyWhenPlayerLost)
    })
  })

  it('Bet BLACK win', () => {
    blackNumbers.forEach((blackNumber) => {
      const board = createSpyBoard(blackNumber)
      expect(board.roll(betMoney, BetType.BLACK)).toEqual(200)
    })
  })

  it('Bet BLACK loose', () => {
    redNumbers.forEach((redNumber) => {
      const board = createSpyBoard(redNumber)
      expect(board.roll(betMoney, BetType.BLACK)).toEqual(moneyWhenPlayerLost)
    })
  })

  it('Bet PREMIER win', () => {
    const board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.PREMIER)).toEqual(300)
  })

  it('Bet PREMIER loose', () => {
    const board = createSpyBoard(13)
    expect(board.roll(betMoney, BetType.PREMIER)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MOYEN win', () => {
    const board = createSpyBoard(13)
    expect(board.roll(betMoney, BetType.MOYEN)).toEqual(300)
  })

  it('Bet MOYEN loose', () => {
    const boardPremier = createSpyBoard(12)
    expect(boardPremier.roll(betMoney, BetType.MOYEN)).toEqual(
      moneyWhenPlayerLost
    )
    const boardMoyen = createSpyBoard(25)
    expect(boardMoyen.roll(betMoney, BetType.MOYEN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet DERNIER win', () => {
    const board = createSpyBoard(25)
    expect(board.roll(betMoney, BetType.DERNIER)).toEqual(300)
  })

  it('Bet DERNIER loose', () => {
    const board = createSpyBoard(24)
    expect(board.roll(betMoney, BetType.DERNIER)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet TOP_COLUMN win', () => {
    const board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.TOP_COLUMN)).toEqual(300)
  })

  it('Bet TOP_COLUMN loose', () => {
    let board = createSpyBoard(2)
    expect(board.roll(betMoney, BetType.TOP_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
    board = createSpyBoard(3)
    expect(board.roll(betMoney, BetType.TOP_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet MIDDLE_COLUMN win', () => {
    const board = createSpyBoard(2)
    expect(board.roll(betMoney, BetType.MIDDLE_COLUMN)).toEqual(300)
  })

  it('Bet MIDDLE_COLUMN loose', () => {
    let board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.MIDDLE_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
    board = createSpyBoard(3)
    expect(board.roll(betMoney, BetType.MIDDLE_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet BOTTOM_COLUMN win', () => {
    const board = createSpyBoard(3)
    expect(board.roll(betMoney, BetType.BOTTOM_COLUMN)).toEqual(300)
  })

  it('Bet BOTTOM_COLUMN loose', () => {
    let board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.BOTTOM_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
    board = createSpyBoard(2)
    expect(board.roll(betMoney, BetType.BOTTOM_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet SIX_NUMBERS win', () => {
    const board = createSpyBoard(6)
    expect(board.roll(betMoney, BetType.SIX_NUMBERS, 1)).toEqual(600)
  })

  it('Bet SIX_NUMBERS loose', () => {
    const board = createSpyBoard(7)
    expect(board.roll(betMoney, BetType.SIX_NUMBERS, 1)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet SIX_NUMBERS exception', () => {
    const board = createSpyBoard(7)
    expect(() => {
      board.roll(betMoney, BetType.SIX_NUMBERS, 2)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
    expect(() => {
      board.roll(betMoney, BetType.SIX_NUMBERS, 3)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
    expect(() => {
      board.roll(betMoney, BetType.SIX_NUMBERS, 34)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
  })

  it('Bet FOUR_NUMBERS win', () => {
    const board = createSpyBoard(5)
    expect(board.roll(betMoney, BetType.FOUR_NUMBERS, 1)).toEqual(900)
  })

  it('Bet FOUR_NUMBERS loose', () => {
    const board = createSpyBoard(3)
    expect(board.roll(betMoney, BetType.FOUR_NUMBERS, 1)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet FOUR_NUMBERS_HORIZONTAL exception', () => {
    const board = createSpyBoard(16)
    expect(() => {
      board.roll(betMoney, BetType.FOUR_NUMBERS, 3)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
    expect(() => {
      board.roll(betMoney, BetType.FOUR_NUMBERS, 34)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
  })

  it('Bet THREE_NUMBERS win', () => {
    const board = createSpyBoard(3)
    expect(board.roll(betMoney, BetType.THREE_NUMBERS, 1)).toEqual(1200)
  })

  it('Bet THREE_NUMBERS loose', () => {
    const board = createSpyBoard(4)
    expect(board.roll(betMoney, BetType.THREE_NUMBERS, 1)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet TWO_NUMBERS_HORIZONTAL win', () => {
    const board = createSpyBoard(18)
    expect(board.roll(betMoney, BetType.TWO_NUMBERS_HORIZONTAL, 17)).toEqual(
      1800
    )
  })

  it('Bet TWO_NUMBERS_HORIZONTAL loose', () => {
    const board = createSpyBoard(16)
    expect(board.roll(betMoney, BetType.TWO_NUMBERS_HORIZONTAL, 17)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet TWO_NUMBERS_HORIZONTAL exception', () => {
    const board = createSpyBoard(16)
    expect(() => {
      board.roll(betMoney, BetType.TWO_NUMBERS_HORIZONTAL, 18)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
  })

  it('Bet TWO_NUMBERS_VERTICAL win', () => {
    const board = createSpyBoard(19)
    expect(board.roll(betMoney, BetType.TWO_NUMBERS_VERTICAL, 16)).toEqual(1800)
  })

  it('Bet TWO_NUMBERS_VERTICAL loose', () => {
    const board = createSpyBoard(17)
    expect(board.roll(betMoney, BetType.TWO_NUMBERS_VERTICAL, 16)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet TWO_NUMBERS_VERTICAL exception', () => {
    const board = createSpyBoard(16)
    expect(() => {
      board.roll(betMoney, BetType.TWO_NUMBERS_VERTICAL, 34)
    }).toThrowError(betNumberNotAllowedExceptionMessage)
  })
})
