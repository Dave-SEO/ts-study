"use strict";
var Order = /** @class */ (function () {
    function Order(orderId, name, phone, address) {
        this.orderId = orderId;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
    Order.prototype.mergOrder = function () {
        return this.orderId + this.name;
    };
    return Order;
}());
var order = new Order(123, 'dave', 12345, 'xxx');
console.log(order.mergOrder());
