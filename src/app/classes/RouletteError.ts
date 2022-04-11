export class RouletteError extends Error {
  constructor() {
    super()
    Object.setPrototypeOf(this, RouletteError.prototype)
  }
}

export class RouletteErrorWithMessage extends Error {
  constructor(msg: string) {
    super(msg)
    Object.setPrototypeOf(this, RouletteErrorWithMessage.prototype)
  }
}
