// The way promises work is helping you chain your callbacks
// call resolve() when ok, call reject() when not ok
// a promise has a method called then(). It will accept the outtup of the
// resolve() callback or reject() callback and let you handle it accordingly
const promise = new Promise((resovle,reject)=>{
    setTimeout(()=> {
        resovle('Counting');
    }, 5000);
}).then((onResolve)=>{
    console.log(`${onResolve} is done`)
},(onReject)=>{
    console.log(onReject);
})

console.log('FIRE FIRST');