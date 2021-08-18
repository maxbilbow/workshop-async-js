async function doStuff() {
    try {
        return await Promise.reject("YOLO")
    } catch (e) {
        return "Everything is Fine"
    }
}

doStuff()
    .then(result => {
        console.log("then:", result) // Everything is Fine
        return result
    })
    .catch(e => {
        console.log("catch", e)
        return e
    })