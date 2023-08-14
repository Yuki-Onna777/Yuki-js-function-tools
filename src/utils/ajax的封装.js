export function kiAjax({ method = 'GET', url, data = {}, timeout = 10000, headers = {} } = {}) {
    const xhr = new XMLHttpRequest()
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else { reject('请求失败') }
        }
        if (method.toUpperCase() === 'GET') {
            xhr.responseType = 'JSON'
            const arr = []
            for (const key in data) {
                arr.push(`${key}=${data[key]}`)
            }
            const str = arr.join('&');
            arr.length ? url = url + '?' + str : ''
            xhr.open(method, url)
            xhr.send()
        }
        if (method.toUpperCase() === 'POST') {
            xhr.responseType = 'JSON'
            xhr.open(method, url)
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send(JSON.stringify(data))
        }
        xhr.timeout = timeout
    })
    promise.xhr = xhr
    return promise
}