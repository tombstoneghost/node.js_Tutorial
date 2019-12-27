const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2)=>
{
    console.log('tutorial event has occured');
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter
{
    constructor(name)
    {
        super();
        this._name = name;
    }

    get name()
    {
        return this._name;
    }
}

let pedro = new Person('Pedro'); //Pedro is also an Object for the EventEmitter Class
let christina = new Person('Christina');

christina.on('name',()=>{   //on is a listner to the Object christine, Similiary to pedro
    console.log('my name is ' + christina.name);
})


pedro.on('name',()=>
{
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name'); //Order of Emit is the Order of Output on the terminal 