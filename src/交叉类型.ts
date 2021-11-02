// 定义类型别名
type ObjProps = {userName: string, age: number}

type ObjProps1 = {curse: string, age: number, phone: number}

type ObjProps3 = {id: number, favor: string}
const obj1: ObjProps & ObjProps1 = {
    userName: '',
    age: 1,
    curse: '',
    phone: 123
}

const obj2: ObjProps | ObjProps1 = {
    userName: '',
    age: 1,
    curse: '',
}

// 交叉类型的使用- 合并两个对象
const o1: ObjProps = {userName: 'zhangsan', age: 12}
const o2: ObjProps1 = {curse:'语文', age: 12, phone: 12345678 }
const o3: ObjProps3 = {id: 1, favor: 'music'}

// 泛型函数重载-对象的合并
function cross<T extends object, U extends object>(objOne: T, objTwo: U): T & U
function cross<T extends object, U extends object, V extends object>(objOne: T, objTwo: U, objThree: V): T & U & V
function cross <T extends object, U extends object, V extends object> (objOne: T, objTwo: U, objThree?: V){
    let combine = {} as  T & U
    Object.keys(objOne).forEach((key) => {
        combine[key] = objOne[key]
    })

    Object.keys(objTwo).forEach((key) => {
        combine[key] = objTwo[key]
    })
    if(objThree){
        // combine 为什么可以断言成 T & U & V ？
        // 1. 编译期间：combine 还是一个空对象，空对象是任何类型的子集，所以可以断言为 T & U & V
        // 2. 运行期间：combine 是一个 T & U 类型, T & U 是 T & U & V 的子集，所以可以断言为 T & U & V（一个类型是另一个类型的子集可以进行类型断言）
        let combine2 = combine as typeof combine & V
        Object.keys(objThree).forEach((key) => {
            combine2[key] = objThree[key]
        })
        return combine2
    }
    return combine
}

const result1 = cross<ObjProps,ObjProps1>(o1, o2)

const result2 = cross<ObjProps, ObjProps1, ObjProps3>(o1, o2, o3)

export {}
