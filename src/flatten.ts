const goodsymid = Symbol('goodid')
type GoodsType = {
    [goodsymid]: number;
    name: string;
    price: number;
}

const goods: GoodsType[] = [
    {
        [goodsymid]: 1001,
         name: "苹果",
         price: 9
    },
    {
        [goodsymid]: 1002,
         name: "香蕉",
         price: 6
    },
    {
        [goodsymid]: 1003,
         name: "香蕉",
         price: 7
    }
]

// 数据扁平化
// {1001: {}, 1002: {}}
const flat: Record<number, GoodsType> = {}
goods.forEach(ret => {
    flat[ret[goodsymid]] = ret
})
console.log(flat)


type RecordType<T> = {
    [P in keyof any]: T
}

type testType =  {
    [x: number]: any // x 可以是数字，字符串数字，不可以是字符串数字加其他字符如：2food
}
const test: testType = {123: '', '234': false, 1.2: '' ,'2food': 135}

type TestSymbol = {
    [x: symbol]: any
}

const sym = Symbol()
const testSymbol: TestSymbol = {sym: 1223}
export {}