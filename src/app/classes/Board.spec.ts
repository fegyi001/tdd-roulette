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
})
