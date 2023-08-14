// 生成器迭代数组
const arg = [1, 2, 3]
function* generator1(arg) {
    yield* arg
}

// 3-9生成器[3,9)
function* generator2(start, end) {
    for (let i = start; i < end; i++) {
        yield i
    }
}

// 迭代iterObj中的names数组
const iterObj1 = {
    names: [1, 2, 3],
    *[Symbol.iterator]() {
        yield* this.names
    }
}

// 迭代iterObj中的key-value
const iterObj2 = {
    names: [1, 2, 3],
    name: 'ki',
    age: 19,
    *[Symbol.iterator]() {
        yield* Object.entries(this)
    }
}

// class中的iterator
class Person {
    constructor(name, age, friends) {
        this.name = name
        this.age = age
        this.friends = friends
    }
    *[Symbol.iterator]() {
        yield* Object.entries(this)
    }
}