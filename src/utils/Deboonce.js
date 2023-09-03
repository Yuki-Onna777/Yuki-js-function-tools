export function kiDebounce(fn, delay, immediate = false) {
    let timer = null
    let isexec = false
    let result = undefined
    const _fn = function (...arg) {
        return new Promise((res, rej) => {
            try {
                // 取消操作
                kiDebounce.cancel = function () {
                    if (timer) clearTimeout(timer)
                }
                // 第一次立即执行
                if (immediate && !isexec) {
                    result = fn.apply(this, arg)
                    res(result) /* 拿到fn执行的结果 */
                    isexec = true
                    timer = null
                    return
                }
                // 核心代码
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    result = fn.apply(this, arg)
                    res(result) /* 拿到fn执行的结果 */
                    isexec = false
                    timer = null
                }, delay)
            } catch (error) {
                rej(error)
            }
        })
    }
    return _fn
}
