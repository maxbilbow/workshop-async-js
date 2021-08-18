

let counter = 0;
function doStuffAsync() {
    return new Promise(resolve => {
        const result = ++counter;
        resolve(result);
    })
}

doStuffAsync()
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
    .then(r => {
        console.log(r);
        return doStuffAsync()
    })
