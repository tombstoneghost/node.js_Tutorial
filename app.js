//The line below shows that NodeJS is working Properly
console.log("Hello World from Nodejs");

const tutorial = require('./tutorial');

console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());