function People (name, age){
    this.name = name
    this.age = age
}
People.prototype.say = function(){
    console.log('Hello Son')
}
function Samele(name, age, favor){
    People.call(this, name, age)
    this.favor = favor
}
Samele.prototype.hls = function(){
    console.log('hls')
}
function _exdents(son, parent){
//     let middle =  Object.create(parent.prototype, {
//         'name': {
//             value: '张三',
//             writable: true
//         }
//    })
   return Object.setPrototypeOf(son.prototype, parent.prototype)
}
_exdents(Samele, People)
const samele = new Samele('zhangsan', 12, 'play')
samele.hls()
console.log(samele)
console.log('ss', Samele.__proto__)
