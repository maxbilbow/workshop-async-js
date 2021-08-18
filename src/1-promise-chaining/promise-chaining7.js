const Q = require("q");

function promiseChaining7() {
    Q.Promise((resolve, reject) => {
        resolve("resolve") // Comment out as required
        reject("reject")  // Comment out as required
        throw "OMGWTF"
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

promiseChaining7();