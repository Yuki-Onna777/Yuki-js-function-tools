function fo(x, y, z) {
    console.log(x + y + z);
}
fo(1, 2, 3)

export function kiCurrying(fn) {
    return function foo(...arg) {
        if (arg.length >= fn.length) {
            fn.apply(this, arg)
        } else {
            return function foo1(...arg1) {
                return foo.apply(this, arg.concat(arg1))
            }
        }
    }
}
const newFoo = kiCurrying(fo)
newFoo(1)(2)(3)
newFoo(1, 2, 3)