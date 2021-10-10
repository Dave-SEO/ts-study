## Parcel 打包支持浏览器运行TS文件
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

### TS 函数重载（function signature overload）定义
 TS 的函数重载比较特殊，和很多后端语言的方法重载相比，多了很多规则，首先先了解什么是函数签名：
 
   函数签名： 函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 返回值类型
   
```TypeScript
    function getMessage(id: number):Message
    
    function getMessage(msgType: MessageType): Message[]
```
   在ts函数重载中，包含了实现签名和重载签名，实现签名是一种函数签名，重载签名也是一种函数签名:
   
```javascript
    function getMessage(id: number):Message // 重载签名，可以有多个
    function getMessage(msgType: MessageType): Message[] // 重载签名
    // 实现签名，只有实现签名才有函数体，实现签名只能有一个  
    function getMessage(payload:any): Message[] | Message | undefined{
        ...
    }

```
   
包含了以下规则的一组函数就是TS函数重载：
- 由一个实现签名 + 一个或多个重载签名合成
- 但外部调用函数重载定义的函数时，只能调用重载签名，不能调用实现签名，这看似矛盾的规则，其实是ts的规定：实现签名下的函数体是给重载签名编写的，现实签名只是在定义时起到了统领所有重载签名的作用，在执行调用时就看不到实现签名了。
-  调用重载函数时，会根据传递的参数来判断你调用的是哪一个函数
-  只有一个函数体，只有实现签名配备了函数体，所有的重载签名都只有签名，没有配备函数体 
-  关于参数类型规则完整总结如下：
    无论重载签名有几个参数，参数类型是何种类型，实现签名都可以是一个无参函数签名，实现签名参数个数可以少于重载签名的参数个数，但实现签名如果准备包含重载签名的某个位置的参数，那实现签名就必须兼容所有重载签名该位置的参数类型【联合类型或者any或者unknown类型的一种】。
- 关于重载签名和实现签名的返回值类型规则总结：
    必须给重载签名提供返回值类型，ts无法默认推导。
    
    提供给重载签名的返回值类型不一定为其执行时的真实返回值类型，可以为重载签名提供真实返回类型，也可以提供void或unknown或any类型，如果重载签名的返回值类型是void或unknown或any类型，那么将由实现签名来决定重载签名执行时的真实返回值类型，当然为了调用时能有自动提示 + 可读性更好 + 避免可能出现了类型强制转换，强烈建议为重载签名提供真实的返回值类型
    不管重载签名返回值类型是何种类型，实现签名都可以返回any或unknown类型，当然一般我们选择让ts默认为实现签名自动推导返回值类型