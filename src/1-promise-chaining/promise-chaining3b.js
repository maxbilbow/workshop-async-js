function promiseChaining3b() {
    new Promise((resolve, reject) => {
        resolve("Hello World")
        reject("OMGWTF!")
    })
    .finally(() => {
        console.log("finally") // 1
    })
    .then(result => {
        console.log("then1:", result) // 2
        return result
    })
    .catch(e => {
        console.log("catch", e) // Skipped
        return e
    })
    .then(result => {
        console.log("then2:", result) // 3
    })
}

promiseChaining3b();