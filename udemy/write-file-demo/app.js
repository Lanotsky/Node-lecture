// fetch module and store on varialbe

const fs = require('fs'); 
const os = require('os');
// import our own file
const variable = require('./notes');

let userResult = os.userInfo();
variable.changeName('aaron james');
let bDate = '1995,2,17';
fs.appendFileSync(
    'greetings.txt', `message from ${variable.name} '${variable.message}' to ${userResult.username}
    ${variable.name}'s age is is ${variable.getAge(bDate)}\n`, 
    (err) => {
    console.log(err);
    console.log('cannot write to file');
});
