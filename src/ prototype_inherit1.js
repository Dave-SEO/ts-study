// 寄生组合式继承
function People(name, age){
    this.name = name
    this.age = age
}

People.prototype.say = function(){
    console.log('Hello World')
}

function Samele (name, age, favor){
    People.call(this, name, age)
    this.favor = favor
}

// function Middle(){
// }

// Middle.prototype = People.prototype
function _exdents(parent, son){
    function Middle(){
        this.constructor = son
    }
    Middle.prototype = parent.prototype
    return new Middle()
}
Samele.prototype = _exdents(People, Samele)
// Samele.prototype.constructor = Samele

const samele = new Samele('zhangsan', 12, 'music')
console.log(samele)


