

let counter = 0;
function doStuffAsync() {
    return new Promise((resolve, reject) => {
        if (++counter > 5) reject(Error("The End"))
        resolve(counter);
    })
}

async function doStuff() {
    try {
        console.log(await doStuffAsync());
        console.log(await doStuffAsync());
        console.log(await doStuffAsync());
        console.log(await doStuffAsync());
        console.log(await doStuffAsync());
        console.log(await doStuffAsync());
    } catch (e) {
        console.warn("Handled Error:", e.message);
    } finally {
        console.log("finally")
    }
}

doStuff();