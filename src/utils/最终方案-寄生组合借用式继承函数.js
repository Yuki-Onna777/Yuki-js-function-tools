// 原型式函数
// 实现对象之间的继承
export function createObj(o) {
    function F() { }
    F.prototype = o
    return new F()
}

// 寄生式函数
export function inherit(Subtype, Surpertype) {
    Subtype.prototype = createObj(Surpertype.prototype)  /* Subtype.prototype = Object.create(Surpertype.prototype) */
    Object.defineProperty(Subtype.prototype, 'constructor', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: Subtype
    })
    Object.setPrototypeOf(Subtype, Surpertype)
}