function requestData(url) {
    return new Promise((res,) => {
        setTimeout(() => {
            res(url)
        }, 2000)
    })
}
function* getData() {
    const res1 = yield requestData('why')
    console.log(res1);
    const res2 = yield requestData('kobe')
    console.log(res1 + res2);
    const res3 = yield requestData('james')
    console.log(res1 + res2 + res3);
}
const generator = getData()
generator.next().value.then((res1) => {
    generator.next(res1).value.then((res2) => {
        generator.next(res2).value.then((res3) => {
            generator.next(res3)
        })
    })
})

// async是*的语法糖,await是yield的语法糖
function requestData(url) {
    return new Promise((res,) => {
        setTimeout(() => {
            res(url)
        }, 2000)
    })
}
async function getData() {
    const res1 = await requestData('why')
    console.log(res1);
    const res2 = await requestData('kobe')
    console.log(res1 + res2);
    const res3 = await requestData('james')
    console.log(res1 + res2 + res3);
}
getData()