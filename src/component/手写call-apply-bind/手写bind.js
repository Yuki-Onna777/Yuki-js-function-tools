Function.prototype.kibind = function (thisArg, ...parameter1) {
    thisArg = thisArg === null || undefined ? window : Object(thisArg)
    return (...parameter2) => {
        Object.defineProperty(thisArg, 'fn', {
            configurable: true,
            value: this
        })
        thisArg.fn(...(parameter1.concat(parameter2)))
        delete thisArg.fn
    }
}
