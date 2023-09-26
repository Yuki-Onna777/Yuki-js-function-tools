const obj = {
    _name: 'ki',
    set name(newValue) {
        console.log(666);
        this._name = newValue
    },
    get name() {
        return this._name
    }
}

const objProxy = new Proxy(obj, {
    set(obj, key, newValue, receiver) {
        console.log(666);
        Reflect.set(obj, key, newValue, receiver) /* obj[key] = newValue receiver改变了obj中set的this指向 */
    },
    get() { }
})
objProxy.name = 'yuki'