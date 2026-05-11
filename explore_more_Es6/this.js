class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('kodom', 32)
console.log(kodom);
kodom.sleep();