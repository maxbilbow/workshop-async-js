async function doStuff() {
    try {
        return Promise.reject("YOLO") // no await
    } catch (e) {
        return "Everything is Fine"
    }
}

doStuff()
    .then(result => {
        console.log("then:", result)
        return result
    })
    .catch(e => {
        console.log("catch", e) // YOLO
        return e
    })