import { BetType } from '../enums/BetType'
import { Board } from './Board'
import { RouletteWheel } from './RouletteWheel'

describe('Board', () => {
  const betMoney = 100
  const moneyWhenPlayerLost = 0
  let board: Board

  beforeEach(() => {
    const wheelSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {
      spin: 0
    })
    board = new Board(wheelSpy)
  })

  it('Bet 0 win', () => {
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 0)).toEqual(3600)
  })

  it('Bet 10 loose', () => {
    expect(board.roll(betMoney, BetType.ONE_NUMBER, 10)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet PASSE loose', () => {
    expect(board.roll(betMoney, BetType.PASSE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MANQUE loose', () => {
    expect(board.roll(betMoney, BetType.MANQUE)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet PAIR loose', () => {
    expect(board.roll(betMoney, BetType.PAIR)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet IMPAIR loose', () => {
    expect(board.roll(betMoney, BetType.IMPAIR)).toEqual(moneyWhenPlayerLost)
  })
})
