function Person(name, first, second, third) {
    this.name=name;
    this.first=first;
    this.second=second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
}

var kim = new Person('kim', 10, 20);
kim.sum = function() {
    return 'this : ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());