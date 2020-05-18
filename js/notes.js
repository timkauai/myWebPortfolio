console.log('These are my notes on my classes: ');

console.log('Design Patterns!!!!');

//notes on design patterns:
//ways to make reusable oop


console.log('There are 23 of them, and here they are!!');


//1 - Factory Pattern:

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
    console.log("Hi! I Am " + this.name + " I am a " + this.type);
}

const newFamilyMember = new FamilyFactory();
const familyMembers = []

familyMembers.push(newFamilyMember.create("Bradley", 1));
familyMembers.push(newFamilyMember.create("James", 1));
familyMembers.push(newFamilyMember.create("Dad", 2));
familyMembers.push(newFamilyMember.create("Mom", 2));

familyMembers.forEach(fam => {
    say.call(fam);
});