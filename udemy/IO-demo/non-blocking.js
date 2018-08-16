const process_1 = () => {
    setTimeout(()=>{
        console.log('process_1 firing');
    }, 10);
}

const process_2 = () => {
    setTimeout(() => {
        console.log('process_2 firing');
    }, 5);
}

process_1(); // will output last
process_2(); // will output first since node will not run both processes asynchronously