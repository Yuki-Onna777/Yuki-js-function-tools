export class kiEventBus {
    constructor() {
        this.obj = {}
    }
    on(eventname, fn) {
        let arr = this.obj[eventname]
        if (!arr) {
            arr = []
            this.obj[eventname] = arr
        }
        arr.push(fn)
    }
    off(eventname, fn) {
        let arr = this.obj[eventname]
        if (!arr) return
        for (let index = 0; index < arr.length; index++) {
            const arrFn = arr[index]
            if (fn === arrFn) {
                arr.splice(index, 1)
                break
            }
        }
        if (arr.length === 0) {
            delete this.obj[eventname]
        }
    }
    emit(eventname, ...args) {
        let arr = this.obj[eventname]
        if (!arr) { return }
        arr.forEach(fn => {
            fn(args)
        })
    }
}