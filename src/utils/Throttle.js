export function kiThrottle(fn, interval, { leading = true, trailing = false } = {}) {
    let startTime = 0
    let timer = null
    const _fn = function (...args) {
        return new Promise((res, rej) => {
            try {
                const nowTime = new Date().getTime()
                // 第一次执行控制
                if (!leading && startTime === 0) {
                    startTime = nowTime
                }
                const subtractTime = interval - (nowTime - startTime)
                // 核心代码
                if (subtractTime <= 0) {
                    if (timer) clearTimeout(timer)
                    const result = fn.apply(this, args)
                    res(result)
                    startTime = nowTime
                    timer = null
                    return
                }
                // 尾部执行控制
                if (!timer && trailing) {
                    timer = setTimeout(() => { 
                        const result = fn.apply(this, args)
                        res(result)
                        startTime = new Date().getTime()
                        timer = null
                    }, subtractTime)
                }
                // 取消最后一次执行
                _fn.cancel = function () {
                    if (timer) clearTimeout(timer)
                    startTime = 0
                    timer = null
                }
            } catch (error) {
                rej(error)
            }
        })
    }
    return _fn
}
