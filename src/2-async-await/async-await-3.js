async function doStuff() {
    return Promise.reject("YOLO");
}

doStuff()
    .then(result => {
        console.log("then1:", result)
        return result
    })
    .catch(e => {
        console.log("catch", e) // logged
        return e
    })