function Person(names, age){
    this.name = names
    this.age = age
    this.say = function(){}
    // 如果Person 返回的是值类型，那么会返回obj，如果是引用类型，返回引用类型，默认返回undefined
    return undefined
}
let p = new Person('zhangsan', 13) 
console.log(p) // Person{name: 'zhangsan', age: 13, say: ƒ}

// new 的过程
var obj = new Object()
obj.__proto__ = Person.prototype
Person.call(obj, 'zhangsan', 13) 

console.log(obj) // Person{name: 'zhangsan', age: 13, say: ƒ}

