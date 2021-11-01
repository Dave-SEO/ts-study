
function quickSort<T> (arr: T[]): T[]{
    if(arr.length <= 1){
        return arr
    }
    let  pivotIndex = Math.floor(arr.length / 2)
    let  pivot = arr.splice(pivotIndex, 1)[0]

    let left: T[] = []
    let right: T[] = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}
const quicksort = quickSort<number>([85, 24, 63, 45, 17, 31, 96, 50])


function chineseSort<T>(arr:T[]):T[]{
   return arr.sort((a, b) => {
        return (a as any).localeCompare(b, 'zh-cn')
    })
}
chineseSort(['武汉', '郑州', '太原', '济南', '沈阳', '大连'])

// 对英文字符串排序
function strSort(str: string): string{
    return quickSort(str.split('')).join('')
}

function isChinese<T>(arr: T[]): boolean{
    return arr.some(item => {
        return /[\u4e00 - \u9fa5]+/g.test(item as any)
    })
}
// 自定义守卫
function isString(str: any): str is string{
    return typeof str === 'string'
}
function sort<T>(arr: T[]): T[]{
    if(isChinese(arr)){
        return chineseSort(arr)
    }
   let newArr: any = arr.map(ret => {
       return isString(ret)? strSort(ret) : ret
    })
    return quickSort(newArr)
}
export {}