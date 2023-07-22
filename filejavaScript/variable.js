let user = {
    id: 1,
    name: "Phitsanu",
    isAdmid: true
};

let sayHi = function (user) {
    console.log("Hi "+ user.name + ", how are you?")  ;
}

let animal = class {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

let dog = new animal("Dog", "Brown");

sayHi(user);
console.log(dog);