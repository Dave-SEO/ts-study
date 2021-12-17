// es5 原型链继承
function Person (job) {
    this.job = job
}
Person.prototype.eat = function(){
    console.log('吃东西')
}

function Son () {
}
Son.prototype = new Person('IT')
const son1 = new Son()
console.log('son1.eat', son1)
console.log('son1.job', son1.job)
console.log('son1.eat', son1.eat())
export {}