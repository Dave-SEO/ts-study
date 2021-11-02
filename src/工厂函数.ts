class People {
    public name: string = 'zhangsan'
    public age: number = 1
    // constructor People(name_: string, age_: number): People
    constructor(name_: string, age_: number){
        this.name = name_
        this.age = age_
    }
    // (method) People.say(): void
    say(){}
}
console.dir(People)
// 通用工厂函数类型
type ConstructorProps<T> = new (...arg: any) => T

function createInstanceFactory<T>(Constructor: ConstructorProps<T>){
    return new Constructor('helloWorld', 12)
}

const a1 = createInstanceFactory<People>(People)




export {}