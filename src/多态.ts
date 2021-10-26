class Person{
    eat(){}
}

class ChinesePeople extends Person{
    eat(){console.log('吃中餐')}
}

class AmericaPeople extends Person{
    eat(){console.log('吃西餐')}
}

let person:Person = new ChinesePeople()
person.eat()
person = new AmericaPeople()
person.eat()
export { }

