function promiseChaining6b() {
    new Promise(() => {
        return "whatever" // Does not resolve!
    })
    .finally(() => {
        console.log("finally")
     })
    .then(result => {
        console.log("then1:", result)
        return `${result} from then1`
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })
    .then(result => {
        console.log("then2:", result)
    })
}

promiseChaining6b();