// const mytuple: [string, number, ...any[]] = ['zhangsan', 12, 'music', 'chinese']

const mytuple: [name: string, age: number, ...rest: any[]] = ['zhangsan', 12, 'music', 'chinese']

const [x1, ...rest]: [name: string, ...rest: any[], age: number] = ['zhangsan', 'music', 'chinese', 12]
console.log('x1-', x1) // zhangsan
console.log('rest-', rest) // [ 'music', 'chinese', 12 ]