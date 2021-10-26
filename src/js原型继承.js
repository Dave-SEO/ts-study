function People (name, age){
    this.name = name
    this.age = age
    this.say = function(){
       console.log('Hello World') 
    }
}
People.prototype.step = function(){
    console.log('走走')
}

function Samle (name, age, favor) {
   People.call(this, name, age) // es6 super
   this.favor = favor
}

Samle.prototype = new People()
// Samle.prototype.constructor = Samle
const samle = new Samle('zhangsan', 12, 'music')
console.log('samle', samle.step())
