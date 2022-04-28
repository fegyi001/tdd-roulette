import { BetType } from '../enums/BetType'
import { BetDTO } from '../models/bet-dto'
import { Bet } from './Bet'

export class BetDTOParser {
  static parse(dto: BetDTO): Bet {
    const bet = new Bet()
    bet.betMoney = dto.betMoney
    if (this.isOneNumberGame(dto.betPlace)) {
      this.setOneNumberBet(dto, bet)
      return bet
    }
    if (this.isTopColumnGame(dto.betPlace)) {
      this.setTopColumnBet(bet)
      return bet
    }
    if (this.isMiddleColumnGame(dto.betPlace)) {
      this.setMiddleColumnBet(bet)
      return bet
    }
    if (this.isBottomColumnGame(dto.betPlace)) {
      this.setBottomColumnBet(bet)
      return bet
    }
    if (this.isRedGame(dto.betPlace)) {
      this.setRedBet(bet)
      return bet
    }
    if (this.isBlackGame(dto.betPlace)) {
      this.setBlackBet(bet)
      return bet
    }
    if (this.isPremierGame(dto.betPlace)) {
      this.setPremierBet(bet)
      return bet
    }
    if (this.isMoyenGame(dto.betPlace)) {
      this.setMoyenBet(bet)
      return bet
    }
    if (this.isDernierGame(dto.betPlace)) {
      this.setDernierBet(bet)
      return bet
    }
    if (this.isPasseGame(dto.betPlace)) {
      this.setPasseBet(bet)
      return bet
    }
    if (this.isManqueGame(dto.betPlace)) {
      this.setManqueBet(bet)
      return bet
    }
    if (this.isPairGame(dto.betPlace)) {
      this.setPairBet(bet)
      return bet
    }
    if (this.isImpairGame(dto.betPlace)) {
      this.setImpairBet(bet)
      return bet
    }
    throw new Error('Method not implemented.')
  }

  private static isOneNumberGame(betPlace: string) {
    return !isNaN(Number(betPlace))
  }

  private static setOneNumberBet(dto: BetDTO, bet: Bet) {
    bet.betType = BetType.ONE_NUMBER
    bet.betPlace = Number(dto.betPlace)
  }

  private static isTopColumnGame(betPlace: string) {
    return betPlace === '1c'
  }

  private static setTopColumnBet(bet: Bet) {
    bet.betType = BetType.TOP_COLUMN
  }

  private static isMiddleColumnGame(betPlace: string) {
    return betPlace === '2c'
  }

  private static setMiddleColumnBet(bet: Bet) {
    bet.betType = BetType.MIDDLE_COLUMN
  }

  private static isBottomColumnGame(betPlace: string) {
    return betPlace === '3c'
  }

  private static setBottomColumnBet(bet: Bet) {
    bet.betType = BetType.BOTTOM_COLUMN
  }

  private static isRedGame(betPlace: string) {
    return ['r', 'red'].includes(betPlace)
  }

  private static setRedBet(bet: Bet) {
    bet.betType = BetType.RED
  }

  private static isBlackGame(betPlace: string) {
    return ['b', 'black'].includes(betPlace)
  }

  private static setBlackBet(bet: Bet) {
    bet.betType = BetType.BLACK
  }

  private static isPremierGame(betPlace: string) {
    return betPlace === 'p'
  }

  private static setPremierBet(bet: Bet) {
    bet.betType = BetType.PREMIER
  }

  private static isMoyenGame(betPlace: string) {
    return betPlace === 'm'
  }

  private static setMoyenBet(bet: Bet) {
    bet.betType = BetType.MOYEN
  }

  private static isDernierGame(betPlace: string) {
    return betPlace === 'd'
  }

  private static setDernierBet(bet: Bet) {
    bet.betType = BetType.DERNIER
  }

  private static isPasseGame(betPlace: string) {
    return betPlace === 'pa'
  }

  private static setPasseBet(bet: Bet) {
    bet.betType = BetType.PASSE
  }

  private static isManqueGame(betPlace: string) {
    return betPlace === 'ma'
  }

  private static setManqueBet(bet: Bet) {
    bet.betType = BetType.MANQUE
  }

  private static isPairGame(betPlace: string) {
    return betPlace === 'pai'
  }

  private static setPairBet(bet: Bet) {
    bet.betType = BetType.PAIR
  }

  private static isImpairGame(betPlace: string) {
    return betPlace === 'imp'
  }

  private static setImpairBet(bet: Bet) {
    bet.betType = BetType.IMPAIR
  }
}
