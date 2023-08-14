export function deepCopy(orginValue, weakmap = new WeakMap()) {
    // Symbol作为value时
    if (typeof orginValue === 'symbol') {
        return Symbol(orginValue.description)
    }
    if (!isObject(orginValue)) {
        return orginValue
    }
    // 函数无需deepCopy
    if (typeof orginValue === 'function') {
        return orginValue
    }
    // Set类型
    if (orginValue instanceof Set) {
        const newSet = new Set()
        for (const item of orginValue) {
            newSet.add(deepCopy(item))
        }
        return newSet
    }
    // 解决循环引用
    if (weakmap.get(orginValue)) {
        return weakmap.get(orginValue)
    }
    const newObj = Array.isArray(orginValue) ? [] : {}
    weakmap.set(orginValue, newObj)
    for (const key in orginValue) {
        newObj[key] = deepCopy(orginValue[key], weakmap)
    }
    // Symbol作为key时
    const symbolKeys = Object.getOwnPropertySymbols(orginValue)
    for (const item of symbolKeys) {
        newObj[Symbol(item.description)] = deepCopy(orginValue[item], weakmap)
    }
    return newObj
}