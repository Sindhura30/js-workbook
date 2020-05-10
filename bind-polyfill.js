//Name object

let name = {  
    firstName : "Sindhura",
    lastName : "Shetty"
}

//getName function 
let getName = function (age, gender) {
    console.log(`${this.firstName} ${this.lastName} ${age} ${gender}`);
}

//Function with bind method
const printName = getName.bind(name, 12);

printName("Female");

//Function without bind method
//Polyfill
Function.prototype.bindPolyfill = function (...args) {
    let self = this;
    params = args.slice(1);
    return function (...args2) {
        self.apply(args[0], [...params, ...args2]);
    }
}

const printName2 = getName.bindPolyfill(name, 12);

printName2("Female");
