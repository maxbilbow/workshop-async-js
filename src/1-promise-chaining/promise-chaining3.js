function promiseChaining3() {
    new Promise((resolve, reject) => {
        // resolve("Hello World")
        reject("OMGWTF!")
    })
    .finally(() => {
        console.log("finally") // 1
    })
    .then(result => {
        console.log("then1:", result)
        return result
    })
    .catch(e => {
        console.log("catch", e) // 2
        return e
    })
    .then(result => {
        console.log("then2:", result) // 3 OMGWTF
    })
    
}

promiseChaining3();