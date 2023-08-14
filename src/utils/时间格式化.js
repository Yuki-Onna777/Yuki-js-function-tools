export function dateO(timestamp, dateString) {
    const date = new Date(timestamp)
    const obj = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    }
    for (const key in obj) {
        if (new RegExp((key)).test(dateString)) {
            const value = (obj[key] + '').padStart(2, '0')
            dateString = dateString.replace(new RegExp(key), value)
        }
    }
    return dateString
}