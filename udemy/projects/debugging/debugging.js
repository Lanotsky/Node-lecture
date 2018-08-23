let person = {
    name: "aaron",
}

person.age = 23;
person.name = "aaron james";



/* 
    to run a debugging command 
    use: node inspect <yourfile.js>

    this will enter the debug mode. In debug mode 
    you can choose to manually inspect each of your code using 
    the ' n ' keyword to go to the next code to run in each line in the file.
    Finally, you can use ' c ' to execute the file to run normally
*/

debugger; // this is a node debugging marker
// you can hit repl to run normal code in the terminal on the debugged marker
/* 
    when you hit ' c ' command. 
    The debugger will automatically stop at this location
*/

console.log(person);
