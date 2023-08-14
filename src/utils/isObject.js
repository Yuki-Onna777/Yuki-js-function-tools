export function isObject(value) {
    const type = typeof value
    return (value !== null) && (type === 'function' || type === 'object')
}