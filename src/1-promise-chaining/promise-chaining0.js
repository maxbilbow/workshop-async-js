
let counter = 0;
function doStuffAsync(onComplete) {
    const result = ++counter;
    onComplete(result);
}

doStuffAsync(r1 => {
    console.log(r1);
    doStuffAsync((r2) => {
        console.log(r2);
        doStuffAsync((r3) => {
            console.log(r3)
            doStuffAsync((r4) => {
                console.log(r4)
            })
        })
    })
})