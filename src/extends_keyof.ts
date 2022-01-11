class ObjectRefImpl<T extends object, k extends keyof T> {
    constructor(public _object: T,public _key: k) {}
    get value(){
        return this._object[this._key]
    }
    set value(newVal: T[k]){
        this._object[this._key] = newVal
    }
}

interface OrderDetailProps {
    customer: string;
    address: string;
    phone: number
}

class OrderBy {
    constructor(public orderId: number, public orderName: string, public orderDetail: OrderDetailProps[]) {
    }
}

const details: OrderDetailProps[] = [
    {
        customer: 'zhangsan',
        address: 'xxx-xxx-xxx',
        phone: 123456
    },
    {
        customer: 'lisi',
        address: 'xxx-xxx-xxx',
        phone: 33333
    }
]

const order1 = new OrderBy(10001, '北极熊', details)
const objectImpl = new ObjectRefImpl(order1, 'orderId')

console.log(objectImpl)


const a1 = {'name': 'zhangsan', 'age': 12}
function get<T, K extends keyof T>(obj: T, key: K){
   return obj[key]
}
get(a1, 'name')


const store = {name: 'zhansan', age: 12}
// keyof 用于获取类类型，接口类型等属性名组成的联合类型
function getStore<T extends Object, K extends keyof T>(obj: T, key: K){
    return obj[key]
}
getStore(store, 'name')
export {}