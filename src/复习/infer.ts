// infer 回顾
// 1. infer 用在extends条件语句之后的函数类型的参数上
type People = {name: string, age: number}
interface Custome {
    name: string;
    age: string;
}
type FunCustom = (cus: Custome) => any
type inferType<T> = T extends (params: infer P) => any ? P : never
type inferPeople = inferType<FunCustom>

// 2. infer 用在extends条件语句 函数类型的返回值上
type FunReternType = (cus: Custome) => any
type inferReturn<T> = T extends (params: any) => infer p ? p : T
type inferRe = inferReturn<FunReternType>

// 3. infer 出现在泛型的具体化类型上
type inferFanxing<T> = T extends Set<infer P>? P : never;
type result = inferFanxing<Set<string>>


export {}