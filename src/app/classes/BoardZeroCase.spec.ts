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

  it('Bet RED loose', () => {
    expect(board.roll(betMoney, BetType.RED)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet BLACK loose', () => {
    expect(board.roll(betMoney, BetType.BLACK)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet PREMIER loose', () => {
    expect(board.roll(betMoney, BetType.PREMIER)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet MOYEN loose', () => {
    expect(board.roll(betMoney, BetType.MOYEN)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet DERNIER loose', () => {
    expect(board.roll(betMoney, BetType.DERNIER)).toEqual(moneyWhenPlayerLost)
  })

  it('Bet TOP_COLUMN loose', () => {
    expect(board.roll(betMoney, BetType.TOP_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet MIDDLE_COLUMN loose', () => {
    expect(board.roll(betMoney, BetType.MIDDLE_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet BOTTOM_COLUMN loose', () => {
    expect(board.roll(betMoney, BetType.BOTTOM_COLUMN)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet SIX_NUMBERED loose', () => {
    expect(board.roll(betMoney, BetType.SIX_NUMBERS)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet FOUR_NUMBERED loose', () => {
    expect(board.roll(betMoney, BetType.FOUR_NUMBERS)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet THREE_NUMBERED loose', () => {
    expect(board.roll(betMoney, BetType.THREE_NUMBERS)).toEqual(
      moneyWhenPlayerLost
    )
  })

  it('Bet TWO_NUMBERED loose', () => {
    expect(board.roll(betMoney, BetType.TWO_NUMBERS)).toEqual(
      moneyWhenPlayerLost
    )
  })
})
