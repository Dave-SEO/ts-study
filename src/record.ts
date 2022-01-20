// 理解 k extends keyof any
type KeyofType = keyof any

interface PeoPle {
    name: string;
    age: number
}
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
type A = Record<string, PeoPle>
// [x: string]: PeoPle;
let a: A = {'ket': {name: '1', 'age': 123}}


type B<K extends number> = {[key: string]: any}


export {}