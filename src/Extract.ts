class Person {
    constructor(public cname: string, public age: number) {}
    say(){}
}
class XiaoMing extends Person{
    constructor(cname, age, public color: string){
        super(cname, age)
    }
}
// Extract 在子类与父类中
// 1. 子类 extends 父类 永远返回 T（子类）
// 2. 父类 extends 子类 只有在子类与父类属性和方法相同时返回前者，其他情况返回never
type Extract<T, U> = T extends U ? T : never
type ExtractType = Extract<Person, XiaoMing>
// 子类父类可以相互断言
let person = new Person('', 123) as XiaoMing
let xiaoming = new XiaoMing('', 12, 'red') as Person

// Extract 与类型断言在 联合类型中的比较
type UnnitExtarct = Extract<string | number, string>

type AA = string | never // string
// export function isEqual<T extends object, K extends object>(obj1: T, obj2: K, fields: Array<Extract<keyof T, keyof K>>): boolean {
//     return fields.every((field) => obj1[field] as any === obj2[field]);
//   }
// isEqual<{a: number}, {a: number, b: number}>({ a: 1 }, { a: 2, b: 1 }, ['a']);
// type A = keyof {a: number,  b: number}
const obj1 = {a: 1, b: 1}
const obj2 = {a: 2, b: 1}
function isEqual<T extends object, K extends object>(obj1: T, obj2: K, fields:  Array<Extract<keyof T, keyof K>>): boolean{
    return fields.every((field) => obj1[field] as any === obj2[field]);
    // 此条件将始终返回 "false"，因为类型 "T[Extract<keyof T, keyof K>]" 和 "K[Extract<keyof T, keyof K>]" 没有重叠。
}

isEqual(obj1, obj2, ['a','b'])

// Extract 在函数类型中的使用
type Fun1 = (name: string) => string
type Fun2 = (name: string, age: number) => string

// 函数的泛型约束
// 函数类型上的泛型约束 参数类型(any,never 除外)和返回值完全相同的情况下，
// 参数少的函数类型 extends 参数多的函数类型 返回true， 反之返回false
type FunExtendType1 = Fun1 extends Fun2 ? Fun1 : never // Fun1
type FunExtendType2 = Fun2 extends Fun1 ? Fun2 : never // never

type ExtractFunType1 = Extract<Fun1, Fun2> // (name: string) => string
type ExtractFunType2 = Extract<Fun2, Fun1> // never

export {}