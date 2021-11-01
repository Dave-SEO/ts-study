
// 快速排序
function quickSort<T = any>(arr: T[]): T[]{
    if(arr.length <= 1) return arr
    let middleIndex = Math.floor(arr.length / 2)
    let middle = arr.splice(middleIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i ++ ) {
        if (arr[i] < middle) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(middle, quickSort(right))
}

function chineseSort<T>(arr: T[]): T[]{
    return arr.sort((a, b) => {
        // 类型转换
        return (<any>a).localeCompare(b, 'zh-ch')
    })
}

function strSort(data: string): string{
    return quickSort<string>(data.split('')).join('')
}
chineseSort(['武汉', '郑州', '太原', '济南', '沈阳', '大连'])

function isString(str: any): str is string{
    return typeof str === 'string'
}
function isArray(data: any): data is any[] {
    return data instanceof Array
}
function isChinese(data: string[]): data is string[]{
    return data.some(ret => {
       return /[\u4e00 - \u9fa5]+/g.test(ret)
    })
}

function sort<T>(data: T): T
function sort(data: any): any{
   if(isString(data)){
    return strSort(data)
   }
   if(isChinese(data)){
    return chineseSort(data)
   }
   if(isArray(data)){
    return quickSort(data)
   }
}
const quicksort = sort<number[]>([85, 24, 63, 45, 17, 31, 96, 50])
const strArr = sort<string[]>(['武汉', '郑州', '太原', '济南', '沈阳', '大连'])
const str = sort<string>('cdabe')
export {}