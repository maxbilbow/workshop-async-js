async function doStuff() {
    return "Hello, world!"
}

const asyncResponse = doStuff()
const promise = new Promise(resolve => resolve("Hello, world!"));

console.log(asyncResponse, promise);
console.log("Are Equal:", Object.getPrototypeOf(asyncResponse) === Object.getPrototypeOf(promise))
