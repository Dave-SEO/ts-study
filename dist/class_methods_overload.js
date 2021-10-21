"use strict";
var ArrayList = /** @class */ (function () {
    function ArrayList(ele) {
        this.ele = ele;
    }
    ArrayList.prototype.get = function (i) {
        return this.ele[i];
    };
    ArrayList.prototype.show = function () {
        console.log(this.ele);
    };
    ArrayList.prototype.remove = function (value) {
        if (typeof value === 'number') {
            this.ele.splice(value, 1);
        }
        else {
            this.ele = this.ele.filter(function (ret) { return ret !== value; });
        }
        return value;
    };
    return ArrayList;
}());
var obj1 = { name: 'zhangsan', age: 21 };
var obj2 = { name: 'lisi', age: 26 };
var obj3 = { name: 'wangwu', age: 28 };
var list = new ArrayList([obj1, obj2, obj3]);
list.remove(obj3);
list.show();
var Size = /** @class */ (function () {
    function Size(value, height) {
        if (height === void 0) { height = 0; }
        if (typeof value === 'object') {
            this.width = value.width;
            this.height = value.height;
        }
        else {
            this.width = value;
            this.height = height;
        }
    }
    Size.prototype.size = function () {
        return this.width * this.height;
    };
    return Size;
}());
var a1 = new Size(2, 3);
var a2 = new Size({ width: 3, height: 4 });
