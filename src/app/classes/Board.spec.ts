import {Board} from "./Board";
import {RouletteWheel} from "./RouletteWheel";


describe('Board', () => {
    const rouletteWheelSpy: RouletteWheel = jasmine.createSpyObj('RouletteWheel', {spin: 0});
    const board = new Board(rouletteWheelSpy);

    it('Roll 0 win 35x', () => {
        expect(board.roll(100, 0)).toEqual(3600)
    })

    it('Roll 10 loose 35x', () => {
        expect(board.roll(300, 10)).toEqual(0)
    })

});
