class Person {
    constructor(public cname: string, public age: number, public sex: string) {}
    eat(){
        console.log(`${this.cname}吃，${this.age}岁，性别：${this.sex}`)
    }
}

// 获取构造函数参数类型
type ConstrucorParamsType<T extends new (...args: any) => any> =  
                        T extends new (...args: infer P) => any ? P : never
type ConstructorType<T> = new (...args: any[]) => T

function createInstance<T>(constructor: ConstructorType<T>, ...args: ConstrucorParamsType<typeof Person>) {
    return new constructor(...args)
}
createInstance<Person>(Person, '1', 2, '男').eat()
export {}