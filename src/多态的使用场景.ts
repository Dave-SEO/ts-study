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

let chinese = new ChineseCouser()
let english = new EnglishCouser()

Couser.getCouser(chinese)
Couser.getCouser(english)
export {}