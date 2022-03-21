import {RouletteWheel} from "./RouletteWheel";

export class Board {

    private rouletteWheel: RouletteWheel;

    constructor(wheel: RouletteWheel) {
        this.rouletteWheel = wheel;
    }

    public roll(betMoney: number, betNumber: number): number {
        return this.rouletteWheel.spin() === betNumber ? betMoney * 36 : 0;
    }

}
