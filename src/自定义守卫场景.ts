// 自定义守卫 形参接收任意类型用来判断是否是顾客
function isCustomer(customer: any): customer is Customer{
    return Boolean(customer && customer.customerName)
}
class Customer {
    constructor(public customerName: string) {
    }
}
const a1 = {favor: 'music', age: 12}
const a2 = isCustomer(a1)? a1.customerName : undefined
console.log('a2', a2)

const customer1 = new Customer('zhangsan')
const c = isCustomer(customer1)? customer1.customerName : undefined
console.log('c', c)
export{}