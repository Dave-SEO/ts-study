class Person {
    constructor(public cname: string, public age: number){}
    eat(){
        console.log(`姓名：${this.cname},年龄：${this.age}`)
    }
}
// 构造函数参数类型
type ConstructorParamsType<T extends new (...args: any[]) => any> = T extends new (...args: infer p) => any ? p : never

// 工厂函数
type ConstructorType<T> = new (...args: any[]) => T
function createInstance<T, P extends ConstructorType<any>>(constructor: ConstructorType<T>, ...args: ConstructorParamsType<P>){
    return new constructor(...args)
}
createInstance<Person, typeof Person>(Person, 'zhangsan', 12)

export {}