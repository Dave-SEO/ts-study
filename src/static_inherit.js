// 子类继承父类的静态属性和静态方法
function HlS() {}
HlS.page = 'h'
People.__proto__ = HlS
function People(a){
    this.a = a
}
People.say = function(){
    console.log('Hello World')
}

People.age = 30
// 方法一
for (var key in People){
    if(Object.hasOwnProperty.call(People, key)){
        Samele[key] = People[key]
    }
}
// 方法二
Object.keys(People).forEach(key => {
    Samele[key] = People[key]
})

// 方法三
Samele.__proto__ = People

// 方法四
Object.setPrototypeOf(Samele, People)


function Samele(){}
Samele.say()
console.log('Samele-static', Samele.age)