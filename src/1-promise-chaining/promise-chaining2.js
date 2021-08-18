function promiseChaining2() {
    new Promise((resolve, reject) => {
        resolve("Hello World")
    })
    .finally(result => {
        console.log("finally:", result) // 1  (undefined)
        return null;
    })
    .then(result => {
        console.log("then1:", result)
        return `${result} from then1` // 2
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })
    .then(result => {
        console.log("then2:", result) // 3
        return `${result} from then2`
    })
}

promiseChaining2();