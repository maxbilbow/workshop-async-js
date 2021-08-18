async function doStuff() {
    throw "YOLO"
}

doStuff()
    .finally(() => {
        console.log("finally")
    })
    .then(result => {
        console.log("then1:", result)
        return result
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })