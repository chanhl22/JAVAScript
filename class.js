class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

var kim = new Person('kim',10,20);
console.log('kim', kim);
console.log('sum', kim.sum());

class Hello{
    constructor(hi) {
        this.hi = hi;
    }
    sayhi() {
        console.log(this.hi);
    }
}
var say = new Hello('hi');
say.sayhi();