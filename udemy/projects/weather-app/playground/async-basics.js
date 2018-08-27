console.log('start');

// non blocking IO will make it wait 4 sec
setTimeout(()=>{
    console.log('FIRING')
},4000);  

setTimeout(() => {
    console.log('FIRING-2')
}, 0);    
// prints after because settimeout is 
// non-blocking

console.log('end');

/* what happens in node v8 engine */

