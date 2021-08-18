function promiseChaining1() {
    new Promise((resolve, reject) => {
        resolve("Hello World")
    })
    .then(result => {
        console.log("then1:", result) // logged 1
        return `${result} from then1`
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })
    .then(result => {
        console.log("then2:", result)
        return `${result} from then2` // logged 2
    })
    .finally(result => {
        console.log("finally:", result) // finally: undefined
    })
}

promiseChaining1();