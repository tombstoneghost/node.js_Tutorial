//readLine Module is used to get User Input

const readLine = require('readline');

/*Create an Instance of readLine by creating an Interface
    This is our Config. file
    This Contains an input which has  an object process.stdin which is predefined in node and global variable.
    Similarliy for Output we have process.stdout.
*/
const rl = readLine.createInterface({input: process.stdin, output : process.stdout});

//Generating two Random Numbers between 1 and 10

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

//To Ask User we user Question Method

rl.question(`What is ${num1} + ${num2}? \n`,
    (userInput)=>{
        //console.log(userInput);
        if(userInput.trim() == answer)
        {
            rl.close();
        }
        else
        {
            rl.setPrompt('Incorrect Response, Please try again\n');
            rl.prompt();
            rl.on('line',(userInput)=>{
                if(userInput.trim() == answer)
                    rl.close();
                else{
                    rl.setPrompt(`Your Answer of ${ userInput } is incorrect, try again\n`);
                    rl.prompt();
                }
            });
        }
    });

//To Close the Application, once we are done. Test the userInput by comparing it with answer and calling rl.close();

rl.on('close', ()=>{
    console.log('Correct!!');
});