export class RouletteError extends Error {
  constructor(msg: string) {
    super(msg)
    Object.setPrototypeOf(this, RouletteError.prototype)
  }
}
