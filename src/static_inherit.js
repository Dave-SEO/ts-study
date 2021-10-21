
const __extends = (function(){
    var extendStatics = function(Son, Parent){
        //  function extendsStaticWithForIn(Son, Parent){
        //      for(let key in Parent){
        //          if(Object.hasOwnProperty.call(Parent, key)){
        //              Son[key] = Parent[key]
        //          }
        //      }
        //  }
        //  function extendStaticWithObject(Son, Parent){
        //      Son.__proto__ = Parent
        //  }
        //  extendStatics = Object.setPrototypeOf || extendsStaticWithForIn || extendStaticWithObject
        //  return extendStatics(Son, Parent)
        console.log(Son)
        Object.setPrototypeOf(Son, Parent)
     }
   
     return function(Son, Parent){
      
         extendStatics(Son, Parent)
         function Middle(){
             this.constructor = Son
         }
         if(Parent){
             Middle.prototype = Parent.prototype
             Son.prototype = new Middle()
         }else{
             Son.prototype = Object.create(Parent)
         }
     }
     
 })()
 
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
// // 方法一
// for (var key in People){
//     if(Object.hasOwnProperty.call(People, key)){
//         Samele[key] = People[key]
//     }
// }
// // 方法二
// Object.keys(People).forEach(key => {
//     Samele[key] = People[key]
// })

// // 方法三
// Samele.__proto__ = People

// // 方法四
// Object.setPrototypeOf(Samele, People)
__extends(Samele, People)

function Samele(){}
Samele.say()
console.log('Samele-static', Samele.age)