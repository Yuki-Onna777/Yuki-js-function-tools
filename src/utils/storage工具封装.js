export class Cache {
    constructor(isLocal = true) {
        this.Storage = isLocal ? localStorage : sessionStorage
    }
    getCache(key) {
        const value = this.Storage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
        else if (!value) {
            throw new Error('value为空!')
        }
    }
    setCache(key, value) { this.Storage.setItem(key, JSON.stringify(value)) }
    removeCache(key) { this.Storage.removeItem(key) }
    cleanCache() { this.Storage.clear() }
}