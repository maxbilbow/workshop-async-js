function promiseChaining8() {
    new Promise((resolve) => {
        const promise2 = new Promise(resolve => resolve("promise2 result"));
        resolve(promise2);
    })
    .then(result => {
        console.log("then1", result) // promise2 result
        return `${result} from then1`
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })
}

promiseChaining8();