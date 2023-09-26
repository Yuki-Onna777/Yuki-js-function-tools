Function.prototype.kiexecFn = function (thisArg, parameter) {
    thisArg = thisArg === undefined || null ? window : Object(thisArg)
    Object.defineProperty(thisArg, 'fn', {
        configurable: true,
        value: this
    })
    thisArg.fn(...parameter)
    delete thisArg.fn
}
Function.prototype.kicall = function (thisArg, ...parameter) {
    this.kiexecFn(thisArg, parameter)
}
Function.prototype.kiapply = function (thisArg, parameter) {
    this.kiexecFn(thisArg, parameter)
}