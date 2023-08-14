function double(num) {
    return num * 2
}
function pow(num) {
    return num ** 2
}

export function composeFn(...args) {
    for (let item of args) {
        if (typeof item !== 'function') {
            throw new Error('传入的参数必须是f')
        }
    }
    if (!args.length) {
        throw new Error('传入的参数不能为空')
    }
    return function (...arg1) {
        let result = args[0].apply(this, arg1)
        for (let i = 1; i < args.length; i++) {
            result = args[i].apply(this, [result])
        }
        return result
    }
}
let newFoo = composeFn(double, pow)
console.log(newFoo(100));