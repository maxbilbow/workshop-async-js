function promiseChaining5() {
    new Promise((resolve, reject) => {
        reject("OMGWTF!")
    })
    .finally(() => {
        console.log("finally") // 1
        throw "FinallyError"
    })
    .then(result => {
        console.log("then1:", result)
        return `${result} from then1`
    })
    .catch(e => {
        console.log("catch", e) // 2 FinallyError
        return e
    })
    .then(result => {
        console.log("then2:", result) // 3 Final
    })
}

promiseChaining5();