function Parent(job){
    this.job = job
}
Parent.prototype.parentName = 'zhansan'
Parent.prototype.say = function(a){
    alert(a)
}
function Son(name){
    this.name = name
}

Son.prototype = new Parent('doctor')
Son.prototype.constructor = Son
const son = new Son('zhang1')
// console.log(Parent.prototype.constructor === Parent)

// console.log(son.__proto__ === Son.prototype)

// 冒充对象继承
// function People (name, age, id){
//     this.name = name
//     this.age = age
//     this.id = id
// }
// People.prototype.say = function(){
//     console.log('Hello World')
// }

// function Samele(name, age, id, favor){
//     // 实例对象samele借用 People 函数的方法，使实例对象samele具有了name、age、id属性
//     People.call(this, name, age, id)
//     // People.apply(this, [name, age, id]) // call apply唯一区别就是apply第二个参数传递的是一个数组
//     this.favor = favor
// }
// Samele.prototype = new People()
// const samele = new Samele('Samele', '18', '12345', 'music')
// console.log('samele:', samele)
// console.log('samele-say:', samele.say()) // samele.say is not a function



// 寄生组合式继承
function People (name, age){
    this.name = name
    this.age =age
}
People.prototype.say = function(){
    console.log('Hello World')
}
function Samele(name, age, favor){
    People.call(this, name, age)
    this.favor = favor
}

// 第一步：创建一个寄生构造函数
function Middle(){
    this.count = 123
}
Middle.prototype = People.prototype
// 第二步：创建一个寄生新创建的构造函数对象
let middle = new Middle()
// middle.__proto__ === People.prototype // true
// 第三步： Samele 子类的原型对象空间指向第二部的新创建的构造函数对象

function _exdents(parent, son){
    function Middle(){
        this.constructor = son
    }
    Middle.prototype = parent.prototype
    return  new Middle()
}

Samele.prototype = _exdents(parent, Samele)
// Samele.prototype.constructor = Samele



let samele = new Samele('张三', 12, 'music')
console.log(samele)



