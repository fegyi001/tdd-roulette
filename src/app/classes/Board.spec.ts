import {Board} from "./Board";
import {RouletteWheel} from "./RouletteWheel";
import {BetType} from "./BetType";


describe('Board', () => {
    const rouletteWheelSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 0});
    const board = new Board(rouletteWheelSpy);

    it('Bet 0 win 35x', () => {
        expect(board.roll(100, BetType.ONE_NUMBER, 0)).toEqual(3600)
    })

    it('Bet 10 loose', () => {
        expect(board.roll(300, BetType.ONE_NUMBER,10)).toEqual(0)
    })

    it('Bet PASSE win 1x', () => {
        const rouletteWheelPasseSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 19});
        const passeBoard = new Board(rouletteWheelPasseSpy);
        expect(passeBoard.roll(100, BetType.PASSE)).toEqual(200)
    })

    it('Bet PASSE loose', () => {
        const rouletteWheelPasseSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 18});
        const passeBoard = new Board(rouletteWheelPasseSpy);
        expect(passeBoard.roll(100, BetType.PASSE)).toEqual(0)
    })

    it('Bet MANQUE win 1x', () => {
        const rouletteWheelManqueSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 1});
        const manqueBoard = new Board(rouletteWheelManqueSpy);
        expect(manqueBoard.roll(100, BetType.MANQUE)).toEqual(200)
    })

    it('Bet MANQUE loose with 0', () => {
        const rouletteWheelManqueSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 0});
        const manqueBoard = new Board(rouletteWheelManqueSpy);
        expect(manqueBoard.roll(100, BetType.MANQUE)).toEqual(0)
    })

    it('Bet MANQUE loose with 19', () => {
        const rouletteWheelManqueSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 19});
        const manqueBoard = new Board(rouletteWheelManqueSpy);
        expect(manqueBoard.roll(100, BetType.MANQUE)).toEqual(0)
    })

});
