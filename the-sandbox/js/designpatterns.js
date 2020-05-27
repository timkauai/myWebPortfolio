let message = "Today I learned about Design Patterns!!!";

function newLine() {
    message += "<br/>";
}

//notes on design patterns:
//ways to make reusable oop

newLine();
message += "There are 23 of them, and here they are!!";
newLine();
message += "quick tip...open up the console to see a siplay of some of the objects"

message += "The first kind of design pattern is Creational!!"
newLine();

//TODO MAKE WHEN TO USE...WHAT THEY ARE...AND EXAMPLE PARTS!!
message += 'Make when to use...what they are.....and example parts!!'

//1 - Factory Pattern:

message += (' Factory Pattern: Used with OOP to make objects with a couple lines of code!');
newLine();
message += ("P.S. this version is also an Abstract Factory Pattern: A Factory that can create multiple 'products' \n \n ");
newLine();

function Crohnie(name) {
    this.name = name;
    this.type = "Crohnie";
}

function NonCrohnie(name) {
    this.name = name;
    this.type = "non-chronie";
}

function FamilyFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Crohnie(name)
                break;
            case 2:
                return new NonCrohnie(name)
                break;
        }
    }
}

function say() {
    message += (" <br/>  Hi! I Am " + this.name + " I am a " + this.type);
}

const newFamilyMember = new FamilyFactory();
const familyMembers = []

familyMembers.push(newFamilyMember.create("Bradley", 1));
familyMembers.push(newFamilyMember.create("James", 1));
familyMembers.push(newFamilyMember.create("Dad", 2));
familyMembers.push(newFamilyMember.create("Mom", 2));

console.log(familyMembers);

familyMembers.forEach(fam => {
    say.call(fam);
});

newLine();
newLine();


//!!Singleton Patterns!!

message += ('Singleton Pattern: limit number of instances to at most one');

//Once instance of process manager
//Can Have mulitple process

function Process(state) {
    this.state = state;
}

const Singleton = (function () {
    let pManager

    function ProcessManager() {
        this.numProcesses = 0
    }

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }

    return {
        getProcessManager: () => {
            if (!pManager)
                pManager = createProcessManager()
            return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

newLine();
message += (processManager === processManager2);

newLine();

//!!Builder Pattern

class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

//New way with builder
// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name);
//     }

//     setAge(age) {
//         this.user.age = age;
//         return this
//     }

//     setPhone(phone) {
//         this.user.phone = phone;
//         return this
//     }


//     setAddress(address) {
//         this.user.address = address;
//         return this;
//     }

//     build() {
//         return this.user
//     }
// }

// let builder = new UserBuilder('Bob').setAge('10').build();
// console.log(builder);

//Special Building with JS!!

class SpecialJSUser {
    constructor(name, {
        age,
        //default the phone number to 12345555
        phone = '1234555',
        address
    } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const newUser = new SpecialJSUser('bob', {
    age: '10',
    phone: '1234999',
    address: new Address('1', 'main')
});
console.log(newUser);


//prodotypal Pattern!!
newLine();
message += "Prototypal Pattern!!!"
newLine();
message += "a special way to add programs to MANY objects, and to Many different kind of objects!!"

function Animal(color, type) {
    this.color = color;
    this.type = type;
}


function AnimalFactory() {
    this.create = (color, type) => {
        return new Animal(color, type)
    }
}

const newAnimal = new AnimalFactory();
const animals = [];

animals.push(newAnimal.create('yellow', 'bee'));

console.log(animals)

Animal.prototype.createPhysics = function () {
    console.log('holla');
}

//Adapter Design Pattern
newLine();
message += 'Adapter Design Pattern is a pattern that allows you to combine two objects that cant work well together!!';
newLine()
message += "When to use it: when you have data that isn't formatted correctly, but has some dependencies or can't be altered to be given in the correct format."
newLine()

class iPhone7 {
    useLightning() {
        console.log('uses Lightning')
    }
}

class GooglePixel {
    useMicroUsb() {
        console.log('uses micro usb.')
    }
}

class LightningToMicroUsbAdapter {
    constructor(adoptee, goal) {
        this.adoptee = adoptee;
        this.goal = goal;
    }

    adapt() {
        this.adoptee = this.goal;
        console.log(this.adoptee);
        return this
    }
}

const adaptedPower = new LightningToMicroUsbAdapter('lightning', 'micro usb');

//Bridge Adapter
newLine()
message += 'bridge design pattern: to add different functionality to different objects (different remotes that work different for different tvs'
newLine()
message += 'When to use this: when you what mulitple objects that a similar with specific different functionality!'
newLine()

//Module
message += 'Way to export things in different files. Write code in seperate file then use it other file'

// export default at the end of the module
//Fascade Pattern
message += 'An inbetween. Fetch is a good example. you fetch it and fascade allows you to replace things really easy!'




document.getElementById("body-text").innerHTML = message;