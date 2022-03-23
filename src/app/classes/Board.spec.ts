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

  it('Bet 0 win 35x', () => {
    const board = createSpyBoard(0)
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 0)).toEqual(3600)
  })

  it('Bet 10 loose', () => {
    const board = createSpyBoard(0)
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 10)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet PASSE win 1x', () => {
    const board = createSpyBoard(19)
    expect(board.roll(betMoney, BetType.PASSE)).toEqual(200)
  })

  it('Bet PASSE loose', () => {
    const board = createSpyBoard(18)
    expect(board.roll(betMoney, BetType.PASSE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MANQUE win 1x', () => {
    const board = createSpyBoard(1)
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(200)
  })

  it('Bet MANQUE loose with 0', () => {
    const board = createSpyBoard(0)
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MANQUE loose with 19', () => {
    const board = createSpyBoard(19)
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(moneyWhenPlayerLost)
  })
})
