class Parent{
    constructor(){
        this.fatherName = "Shihab";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Onion");
console.log(baby.getFullName());
console.log(baby);
console.log(baby2);