class person{
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }
     talk(){
        console.log(`hi my name is ${this.name}`)
    }
}

class student extends person{
    constructor(marks , name , age){
        super(name , age);
        this.marks = marks;
    }
}

class teacher extends person{
    constructor(subject , name , age){
        super(name , age);
        this. subject = subject
    }
}

let s1 = new student("adam" , 23 , 100);
console.log(s1);
let t1 = new teacher("eve" , 25 , "coding");