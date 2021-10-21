"use strict";
// ts 继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cart = /** @class */ (function () {
    function Cart(_brand, _cartNo, _days) {
        this.brand = _brand;
        this.cartNo = _cartNo;
        this.days = _days;
    }
    // ts constructor以外定义的方法，不是放在自身对象上，而是放在了对象的原型对象空间中
    Cart.prototype.getRent = function () {
        console.log("\u7236\u7C7B\u65B9\u6CD5 - \u54C1\u724C\uFF1A" + this.brand + ",\u8F66\u724C\u53F7\uFF1A" + this.cartNo + ",\u79DF\u7528\u5929\u6570\uFF1A" + this.days);
    };
    return Cart;
}());
var MinCart = /** @class */ (function (_super) {
    __extends(MinCart, _super);
    function MinCart(brand, cartNo, days, _type) {
        var _this = 
        // 调用父类的构造函数 为子类赋值
        _super.call(this, brand, cartNo, days) // 等价于 Cart.call(this, brand, cartNo, days)
         || this;
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
        _super.prototype.getRent.call(this); // 等价于 Cart.prototype.getRent.call(this)
        console.log("\u54C1\u724C\uFF1A" + this.brand + ", \u79CD\u7C7B\uFF1A" + this.type + ", \u8F66\u724C\u53F7\uFF1A" + this.cartNo + "\uFF0C\u79DF\u7528\u5929\u6570\uFF1A" + this.days + ",\u4EF7\u683C\uFF1A" + price);
    };
    return MinCart;
}(Cart));
var minCart = new MinCart('小轿车', '浙A66666', 6, 'SUV');
console.log(minCart.getRent());
/**
 * @description 客车
 */
var PassengerCar = /** @class */ (function (_super) {
    __extends(PassengerCar, _super);
    function PassengerCar(_brand, _cartNo, _days, _num) {
        var _this = _super.call(this, _brand, _cartNo, _days) || this;
        _this.num = _num;
        return _this;
    }
    // 客车的价格计算:座位数
    PassengerCar.prototype.getPrice = function () {
        switch (this.num) {
            case 10:
                return 100;
            case 30:
                return 200;
            default:
                return 0;
        }
    };
    PassengerCar.prototype.getRent = function () {
        var price = this.days * this.getPrice();
        _super.prototype.getRent.call(this); // 等价于 Cart.prototype.getRent.call(this)
        console.log("\u54C1\u724C\uFF1A" + this.brand + ", \u5EA7\u4F4D\u6570\uFF1A" + this.num + ", \u8F66\u724C\u53F7\uFF1A" + this.cartNo + "\uFF0C\u79DF\u7528\u5929\u6570\uFF1A" + this.days + ",\u4EF7\u683C\uFF1A" + price);
    };
    return PassengerCar;
}(Cart));
var passengerCar = new PassengerCar('客车', '晋C5556', 30, 10);
passengerCar.getRent();
console.log('PassengerCar', PassengerCar.__proto__ === Cart);
