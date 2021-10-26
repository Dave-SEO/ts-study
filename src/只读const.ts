const arr = [1,2,3,'san'] as const

const getArr = function(arr: readonly any[]){
    // arr.push()  类型“readonly any[]”上不存在属性“push”。
}
getArr(arr)
