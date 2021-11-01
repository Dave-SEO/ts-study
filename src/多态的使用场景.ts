 // 多态结合抽象类的使用
 abstract class Couser{
    constructor(){
    }
   static getCouser(couser: Couser){
        couser.getCouserName()
    }
   abstract getCouserName():void
}

class ChineseCouser extends Couser{
    getCouserName() {
        console.log('语文课')
     }
 }

class EnglishCouser extends Couser {
    getCouserName(){
        console.log('英语课')
    }
 }

// 父类的对象变量可以接受任意子类的对象
let chinese: Couser = new ChineseCouser()
let english: Couser = new EnglishCouser()

Couser.getCouser(chinese)
Couser.getCouser(english)
export {}