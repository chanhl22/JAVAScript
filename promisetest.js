const first = new Promise((resolve, reject) => {
    setTimeout(() => 
        resolve(1), 1000);
})

first.then(num => num * 3)
.then(num => {
    const second =  new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
    return second;
})
.then(num => console.log(num));