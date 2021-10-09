### Parcel 打包支持浏览器运行TS文件
1. 安装Parcel打包工具：npm install parcel-bundler --save-dev
2. 在package.js 中给npm添加启动项，支持启动parcel工具包

```json
    "scripts": {
        "start": "parcel ./index.html"
    }
```

3. 启动parcel 工具  npm start,

## 类
定义：类就是拥有相同属性和方法的一系列对象的集合
## TypeScript 哪些技能基于类
TypeScript类是oop的技术基石，包括类、属性封装、继承、多态、抽象、泛型。紧密关联的包括方法重写，方法重载，构造器，构造器重载，类型守卫，自定义守卫，静态方法、属性，关联引用属性，多种设计模式等

## 创建对象一共做了三件事
1. 在堆中为类的某个对象【实例】分配一个空间
2. 调用对应的构造函数【构造器】
3. 把对象赋值给对象变量

```JavaScript
let people = new Person('dave', 23)
```

## 类的引用属性
1. 什么是引用属性：如果类中的属性的类型是引用类型，那么这个属性就是引用属性
2. 引用属性的数据类型一般有数组，函数，类，对象，对象数组，集合【Set，Map】

## 类-构造器简洁的属性赋值

```javascript
// 普通写法
class Order {
   public orderId : number;
   public name: string;
   public phone: number;
   public address: string;

   constructor(orderId_: number, name_: string, phone_: number, address_: string){
      this.orderId = orderId_
      this.name = name_
      this.phone = phone_
      this.address = address_
   }
}
// 简写
// 给构造器的参数加上public ，这个参数就变成了一个属性
// 这种简写是有两步，1. 定义了一个属性， 2. 构造函数会默认给这个属性赋值[隐士操作]
class Order {
   constructor(public orderId: number,public name: string, public phone: number,public address: string){
   }
}
```

## ts4新特性
1. 声明一个属性时如果不赋值，去使用时ts会报错，还需判断不为undefined情况，可以在声明时加叹号解决

```JavaScript
    let a !: number
    let b: number = 1
    console.log(a + b) // NaN
```

## 函数重载，方法重载的重要性、优势
1. 前端流行框架底层都用到函数重载，例如：Vue3 底层源码就多处使用到带泛型的函数重载,共用了一个函数体

```JavaScript
export function ref<T extends object>(value: T): ToRef<T>
....
export function ref(value?:unknown){
    return createRef(value)
}
```
2. 函数重载或方法重载适用于完成项目中某种相同功能但细节又不同的应用场景，比如：吃饭是一个函数，表示一个吃饭功能，但西方人用的是叉子，中国人用的是筷子，这就是具体细节不同，可以用函数重载来解决。

### 优势
1. 结构分明：让代码可读性，可维护性提升许多，而且代码更漂亮
2. 各司其职、自动提示方法和属性：每个重载签名函数完成各自功能，输出取值时不用强制转换就能出现自动提示，从而提高开发效率
3. 更利于功能扩展
   