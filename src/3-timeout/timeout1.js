function log() {
    console.log("log")
}

function doPromise() {
   Promise.resolve().then(() => console.log("Promise"))
}

function doAsync() {
    async function go() {
        return undefined;
    }
    go().then(() => console.log("async"))
}

function doTimeout() {
    setTimeout(() => console.log("timeout"))
}

doTimeout() // last
doPromise() // 2
doAsync() // 3
log() // 1