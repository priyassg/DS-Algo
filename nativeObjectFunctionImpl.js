Object.prototype.createImpl = function create(obj){
    if(typeof obj !== 'function'){
        var returnObj = {};
        returnObj.__proto__ = obj;
        return returnObj;
    }else {
        throw Error('Needs an object');
    }
}

const person = {
    age: 0,
    genden: '',
};
person.talk = true;

const priya = Object.createImpl(person);
console.log(priya);
console.log(priya.age);
priya.smart = true;
console.log(priya);
const arpit = Object.create(person);
console.log(arpit);
console.log(arpit.age);
arpit.handsome = true;
console.log(arpit);


