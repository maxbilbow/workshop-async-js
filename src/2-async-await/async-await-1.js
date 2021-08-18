async function doStuff() {
    return "Hello, world!"
}

doStuff()
    .finally(() => {
        console.log("finally") // 1
    })
    .then(result => {
        console.log("then1:", result) // 2
    })
    .catch(e => {
        console.log("catch", e)
    })