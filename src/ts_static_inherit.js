// ts 继承静态属性和方法 编译es5后的内容

/**
 * @description 对父类的继承（静态属性和静态方法，原型对象上的属性和方法）
 */
var _exdents = (this && this.__extends) || (function(){
   var extendStatics = function(Son, Parent){
        function extendsStaticWithForIn(Son, Parent){
            for(let key in Parent){
                if(Object.hasOwnProperty.call(Parent, key)){
                    Son[key] = Parent[key]
                }
            }
        }
        function extendStaticWithObject(Son, Parent){
            Son.__proto__ = Parent
        }
        extendStatics = Object.setPrototypeOf || extendsStaticWithForIn || extendStaticWithObject
        return extendStatics(Son, Parent)
    }
    return function(Son, Parent){
        extendStatics(Son, Parent)
        function Middle(){
            this.constructor = Son
        }
        if(Parent){
            Middle.prototype = Parent.prototype
            Son.prototype = new Middle()
        }else{
            Son.prototype = Object.create(Parent)
        }
    }
    
})()

var Cart = (function(){
    function Cart(_brand, _cartNo, _days) {
        this.brand = _brand;
        this.cartNo = _cartNo;
        this.days = _days;
    }
    Cart.prototype.getRent = function () {
        console.log("\u7236\u7C7B\u65B9\u6CD5 - \u54C1\u724C\uFF1A" + this.brand + ",\u8F66\u724C\u53F7\uFF1A" + this.cartNo + ",\u79DF\u7528\u5929\u6570\uFF1A" + this.days);
    };
    Cart.com = '1234'
    return Cart;
})()

var MinCart = (function(_super){
    // 子类MinCart 对父类的继承（静态属性和静态方法，原型对象上的属性和方法）
    _exdents(MinCart, _super)
    function MinCart(brand, cartNo, days, _type) {
        var _this = 
        // 调用父类的构造函数 为子类赋值
        _super.call(this, brand, cartNo, days) || this;
        _this.type = _type;
        return _this;
    }
      // 每种车的计算方式不通，小轿车按照类型
      MinCart.prototype.getPrice = function () {
        switch (this.type) {
            case '大众':
                return 400;
            case 'SUV':
                return 600;
            default:
                return 0;
        }
    };
    MinCart.prototype.getRent = function () {
        var price = this.days * this.getPrice();
        _super.prototype.getRent.call(this);
        console.log("\u54C1\u724C\uFF1A" + this.brand + ", \u79CD\u7C7B\uFF1A" + this.type + ", \u8F66\u724C\u53F7\uFF1A" + this.cartNo + "\uFF0C\u79DF\u7528\u5929\u6570\uFF1A" + this.days + ",\u4EF7\u683C\uFF1A" + price);
    };
    MinCart.age = 1
    return MinCart;
})(Cart)
var minCart = new MinCart('小轿车', '浙A66666', 6, 'SUV');
console.log(minCart.getRent());
console.log(MinCart.com)