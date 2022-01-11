const obj1 = {userName: 'zhangsan', age: 12}

type ObjectKeyOf = keyof typeof obj1
const a1: ObjectKeyOf = 'age' // 只能是 userName ｜ age 组成的联合类型


interface KeyofProps {
    behavir: string,
    name: string
}
type ObjectKeyOf1 = keyof KeyofProps
const a2: ObjectKeyOf1 = 'behavir' // behavir | name 组成的联合类型
type o = KeyofProps['behavir']


class People {
    constructor(public name: string, public age: number) { }
    say(){}
}
type ObjectKeyOf2 = keyof People
const a3:ObjectKeyOf2 = 'age' // name | age | say 组成的联合类型

const store = {name: 'zhansan', userId: 123, phone: 123456}
type ExtractType<T> = Extract<T, object>
function Store<T, U extends keyof T>(obj: ExtractType<T>, key: U){
    return obj[key]
}
Store(store, 'name')
export {}