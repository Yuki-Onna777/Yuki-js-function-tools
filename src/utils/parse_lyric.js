export function parseLyric(lyricString) {
    const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
    const lyricArg = []
    for (const item of lyricString.split('\n')) {
        if (item) {
            const result = item.match(reg)
            const min = result[1] * 60 * 1000
            const seconds = result[2] * 1000
            const mseconds = result[2].length === 3 ? result[2] * 10 : result[2] * 1
            const content = item.replace(reg, '').trim()
            lyricArg.push({ time: min + seconds + mseconds, content: content })
        } else continue
    }
    return lyricArg
}