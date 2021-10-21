interface TextProps{
    length: number
}
class People {
    name: string
    age: number
    constructor(name_: string, age_: number){
        this.name = name_
        this.age = age_
    }
    say(){
        console.log('Hello world')
    }
}
type TextAge = {name: string}
class Samale implements TextAge {
    favor: string
    name !: string
    age !: number
    length!: number
    constructor(name_: string, age_: number, favor_: string){
        this.favor = favor_
        this.age = age_
    }
    say(){
    }
  
}

Samale as TextAge

let text: TextAge = { name: 'da'}
const result = text as Samale


// 类型断言
// const people = new People('xiaoming', 12) as Samale
// const samale = new Samale('xiaoming', 12, 'music') as People

// 类型转换
// const result = <People>new Samale('xiaoming', 12, 'music')

class Card {
    name!: string
    a(){}
}
class Truck {
    age !: number
    b(){}
}
class Merge {
    say(params: Card | Truck){
        (params as Card).a;
        (params as Truck).b
    }
}
