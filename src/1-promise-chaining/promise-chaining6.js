function promiseChaining6() {
    new Promise(() => {
        throw "OMGWTF"
    })
    .finally(() => {
        console.log("finally") // 1
     })
    .then(result => {
        console.log("then1:", result)
        return `${result} from then1`
    })
    .catch(e => {
        console.log("catch", e) // 2 
        return e
    })
    .then(result => {
        console.log("then2:", result) // 3
    })
}

promiseChaining6();