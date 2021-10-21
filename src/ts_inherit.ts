// ts 继承

class Cart {
    brand: string
    cartNo: string
    days: number
    static com: number = 2
    constructor (_brand: string, _cartNo: string, _days: number){
        this.brand = _brand
        this.cartNo = _cartNo
        this.days = _days
    }
    // ts constructor以外定义的方法，不是放在自身对象上，而是放在了对象的原型对象空间中
    getRent(){
        console.log(`父类方法 - 品牌：${this.brand},车牌号：${this.cartNo},租用天数：${this.days}`)
    }
    static getStatic(){
       Cart.com = 1234
    }
}

class MinCart extends Cart{
    type: string
    constructor(brand: string, cartNo: string, days: number, _type: string){
        // 调用父类的构造函数 为子类赋值
        super(brand, cartNo, days) // 等价于 Cart.call(this, brand, cartNo, days)
        this.type = _type
    }
    // 每种车的计算方式不通，小轿车按照类型
    getPrice(){
       switch (this.type) {
           case '大众':
               return 400
            case 'SUV':
                return 600
           default:
               return 0
       }
    }
    getRent(){ // [override]
        let price = this.days * this.getPrice()
        super.getRent() // 等价于 Cart.prototype.getRent.call(this)
        console.log(`品牌：${this.brand}, 种类：${this.type}, 车牌号：${this.cartNo}，租用天数：${this.days},价格：${price}`)
    }
}

const minCart = new MinCart('小轿车', '浙A66666', 6, 'SUV')
console.log(minCart.getRent())

/**
 * @description 客车
 */
class PassengerCar extends Cart{
    num: number
    constructor(_brand: string, _cartNo: string, _days: number, _num: number){
        super(_brand, _cartNo, _days)
        this.num = _num
    }
    // 客车的价格计算:座位数
    getPrice(){
        switch (this.num) {
            case 10:
                return 100
             case 30:
                 return 200
            default:
                return 0
        }
    }
    getRent(){
        let price = this.days * this.getPrice()
        super.getRent() // 等价于 Cart.prototype.getRent.call(this)
        console.log(`品牌：${this.brand}, 座位数：${this.num}, 车牌号：${this.cartNo}，租用天数：${this.days},价格：${price}`)
    }
}
const passengerCar = new PassengerCar('客车', '晋C5556', 30, 10)
passengerCar.getRent()
console.log('PassengerCar', PassengerCar.__proto__ === Cart)