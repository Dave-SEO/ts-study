class Person {
    constructor(public cname: string, public age: number) {}
    say(){}
}
class XiaoMing extends Person{
}
// Extract 在子类与父类中
// 1. 子类 extends 父类 永远返回 T（子类）
// 2. 父类 extends 子类 只有在子类与父类属性和方法相同时返回前者，其他情况返回never
type Extract<T, U> = T extends U ? T : never
type ExtractType = Extract<Person, XiaoMing>
// 子类父类可以相互断言
let person = new Person('', 123) as XiaoMing
let xiaoming = new XiaoMing('', 12) as Person

// Extract 与类型断言在 联合类型中的比较

export {}