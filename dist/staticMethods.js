"use strict";
var useStorage = /** @class */ (function () {
    function useStorage() {
        console.log('饿汉式设计模式-构造器');
    }
    useStorage.getInstance = function () {
        if (!this.store) {
            console.log('getInstance');
            this.store = new useStorage();
        }
        return this.store;
    };
    return useStorage;
}());
useStorage.getInstance();
useStorage.getInstance();
var useStorage1 = /** @class */ (function () {
    function useStorage1() {
        console.log('懒汉式设计模式-构造器');
    }
    useStorage1.prototype.get = function () { };
    // 懒汉式设计模式 创建时机：静态属性 早于 堆中开辟的对象空间
    useStorage1.store = new useStorage1();
    return useStorage1;
}());
