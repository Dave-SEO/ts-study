class Order {
   constructor(public orderId: number,public name: string, public phone: number,public address: string){
   }
   mergOrder(){
       return this.orderId + this.name
   }
}

let order = new Order(123, 'dave', 12345, 'xxx')
console.log(order.mergOrder())