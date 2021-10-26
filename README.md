## Parcel 打包支持浏览器运行TS文件
1. 安装Parcel打包工具：npm install parcel-bundler --save-dev
2. 在package.js 中给npm添加启动项，支持启动parcel工具包

```json
    "scripts": {
        "start": "parcel ./index.html"
    }
```

3. 启动parcel 工具  npm start

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
## 类的属性
1. 对象属性【对象的基本类型属性和对象的引用属性】
2. 静态属性【静态的基本类型属性和静态的引用属性】

### 类的引用属性
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
    
### TS 方法重载
方法：方法是一种特定场景下的函数，由对象变量直接调用的函数都是方法
比如：
- 接口内部定义的函数就是方法【注意：不是接口函数】
- type 内部定义的函数是方法【注意：不是 type 函数】
- 函数内部用this定义的函数是方法
- 类中定义的函数是方法

方法签名：方法名 + 方法参数 + 方法参数类型 + 返回值类型（与函数重载相同）


```JavaScript
    // 实现删除数组中的元素
    // 1. 如果传入数字，则根据下标删除，返回当前被删除元素的下标，
    // 2. 如果传入的是对象，则删除对应的对象，返回被删除的对象
    class ArrayList {
        constructor(public ele: Array<object>){}
        remove(value: number): number
        remove(value: object): object
        remove(value: any){
            if(typeof value === 'number'){
                this.ele.splice(value, 1)
            }else{
                this.ele = this.ele.filter(ret => ret !== value)
            }
            return value
        }
    }
    
    let obj1 = {name: 'zhangsan', age: 21}
    let obj2 = {name: 'lisi', age: 26}
    let obj3 = {name: 'wangwu', age: 28}
    const list = new ArrayList([obj1, obj2, obj3])
    list.remove(obj3)

```

### 构造器【构造函数】重载
#### 再次强化理解this
this 其实是一个对象变量，当new出来一个对象时，构造器会隐式返回 this 给new 对象等号左边的变量，this和等号左边的对象变量都指向当前正创建的对象
以后，哪一个对象调用TS类的方法，那么这个方法中的this都指向当前正在使用的对象【this 和当前的对象变量中都保存着当前对象的首地址】

#### TS 构造器有返回值吗
尽管TS类构造器会隐式返回this，如果我们非要返回一个值，TS类构造器只允许返回this，但构造器不需要返回值也能通过编译，更没有返回值类型之说。从这个意义上，TS构造器可以说是没有返回值的构造函数

#### 构造器【构造函数】重载的意义
构造器重载和函数重载使用基本相同，主要区别是：TS类构造器重载签名和实现签名都不需要管理返回值，TS 构造器是在对象创建出来之后，但是还没有赋值给对象变量之前被执行，一般用来给对象属性赋值
在TS类中只能定义一个构造器，但实际应用时，TS类在创建对象时经常需要用到有多个构造器的场景，比如计算正方形的面积，创建正方形对象，可以给构造器传递宽和高，也可以给构造器传递一个对象，这样需要构造器重载来解决。

#### 构造器是方法吗
对象调用的才是方法，但是TS构造器是在对象空间地址赋值给对象变量之前被调用的，而不是用来被对象变量调用的，所以构造器可以说成构造函数，但不能背看成是一个方法

#### 构造器重载案例
> 计算巨型的面积。可以传入一个对象或者巨型的宽和高

```JavaScript
interface AreaProps {
    width: number
    height: number
}
class Size{
    public width: number
    public height: number
    // 构造器重载签名和实现签名不需要有返回值
    constructor(width: number, height: number)
    constructor(area: AreaProps)
    constructor(value: any, height: number = 0){
       if(typeof value === 'object'){
           this.width = value.width
           this.height = value.height
       }else{
            this.width = value
            this.height = height
       }
    }
    size(){
        return this.width * this.height
    }
}
 const a1 = new Size(2, 3)
 const a2 = new Size({width: 3, height: 4})
```

## TypeScript OOP 
### 单件设计（单例）模式
一个类对外有且仅有一个实例

### 何时需要使用单例模式
外部访问某个类的对象实例时，确保只能访问该类的唯一对象时才能保证逻辑的正确性时，使用单里模式

### 前端单例模式的使用场景
1. Vuex， React-Redux 中的全局状态管理容器store对象在整个项目被设计成唯一的对象

2. 前端项目进行客户端本地数据存储时，都会考虑使用localStorage，localStorage只要在相同的协议，相同的主机名，相同的端口下，就能读取/修改到同一份localStorage数据

### 单例设计模式步骤
#### 懒汉式设计模式
1. 把构造器设置为私有的，不允许外部来创建类的实例【对象】
2. 至少应该提供一个外部访问的方法或属性，外部可以通过这个方法或属性来得到一个对象，所以应该把这个方法设置为静态方法
3. 外部调用第二步提供的静态方法来获取一个对象

```JavaScript
class useStorage{
   public static store: useStorage
   private constructor(){
    console.log('饿汉式设计模式-构造器')
   }
   public static getInstance(){
        if(!this.store){
            console.log('getInstance')
            this.store = new useStorage()
        }
        return this.store
   }
}
useStorage.getInstance()
useStorage.getInstance()
```

#### 饿汉式单例设计模式(立即创建对象)
饿汉式单例设计模式是无论你是否用到了对象【实例】，一开始就建立这个唯一的对象

1. 把构造器设置为私有的，不允许外部来创建类的实例【对象】
2. 建立一个静态引用属性，同时把这个静态引用属性直接指向一个对象
3. 外部调用第二步提供的静态方法来获取一个对象

```JavaScript
class useStorage{
    // 懒汉式设计模式 创建时机：静态属性 早于 堆中开辟的对象空间
    // 内存中的静态缓存区创建时自动调用构造器，不需要外部调用
    static store: useStorage = new useStorage()
    private constructor(){
        console.log('懒汉式设计模式-构造器')
    }
    get(){}
}
```
## 类的静态属性和方法
1. 带static关键字的方法就是一个静态方法
2. 静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
3. 外部可以通过类名来调用
4. 静态方法不可以访问实例属性或实例方法【对象属性和对象方法】
5. TS类的一个静态方法可以通过this来获取静态成员
6. 静态方法和静态属性独立于对象的属性和方法，不可以相互调用
7. 一个静态方法改变了某个静态属性，其他静态方法或类外部任何地方访问这个属性都会发生改变

### 静态成员保存在内存哪里？何时分配的内存空间
任何一个TS类中的静态成员存储在内存的静态区，运行一个TS类，TS首先会为静态成员开辟内存空间，静态成员的内存空间分配的时间要早于对象空间的分配，也就是任何一个对象在创建之前TS就已经为静态成员配置好了空间。但一个静态方法或静态属性只会分配一个空间，只要当前服务器不重启或控制台程序还没结束之前【开发期间临时测试，一般用控制台】，那么静态方法或者是静态属性就一直存在内存空间，无论调用多少次这个静态方法或静态属性，都是调用的同一块空间
> 总结：

    1. 无论是否创建对象，创建多少个对象，是否调用静态方法或静态属性，TS都会为静态访问或静态属性分配内存空间，静态成员和对象无关
    2. 一旦静态成员分配好空间，就一直保存在内存中，直到服务器重启或控制台执行结束才会被释放

### new 一个TS类的方法可以吗？能在TS类外部使用prototype为TS类增加方法或属性吗？
虽然在 js 中可以 new 一个类【构造函数】内部定义的对象方法或静态方法，但是TS已经屏蔽了去 new 一个类中的方法【 js 可以，会当成一个构造函数】，TS类可以访问 prototype 原型对象属性，但是无法在 prototype 原型对象属性增加新的方法或属性，这么做，就是让我们只能在类的内部定义方法，防止回到 ES5 非面向类和对象的写法，【但是可以覆盖类上已经存在的方法】

### 静态方法或属性和原型对象空间上的方法或属性有何区别？
原型对象空间上的方法和属性用来提供给该类的所有对象变量共用的方法或属性，没有对象和对象变量，原型上的属性和方法就没有了意义，而静态方法或静态属性属于类，可以通过类来直接访问。任何一个对象创建之前TS就已经为静态成员分配好了空间，但是一个静态方法或静态属性只会分配一个空间，而每一个对象都有自己独立的空间

### 静态方法是否可以接受一个对象变量来作为方法的参数
可以，静态方法内部不能通过this来访问对象属性和方法，但是可以通过调用静态方法时把对象变量传递给静态方法来使用。比如：我们把js的Object构造函数想象成一个TS类【实际TS编译后的js文件中就变成了一个构造函数】。Object类就拥有了大量的静态方法，例如apply，call，bind，keys等，现在我们来关注静态方法是否可以接受对象变量作为方法的参数，我们以Object.key()方法为例【Object类的keys方法用来获取对象自身可枚举的属性组成的数组】

### 何时把一个方法定义成静态方法或属性定义为静态属性？
1. 单例设计模式就是静态方法和静态属性很好的应用场景，当外部不能创建对象，就只能借助类内部的静态方法来获取类的对象，这时肯定不能把这个方法定义成原型对象属性上的方法，只能定义为类的静态方法，因为如果定义成原型对象属性的方法就会导致外部无法访问，因为外部根本不能创建对象，也就无法访问原型对象属性上的方法。而静态方法要访问的属性就只能是静态属性了，这也是静态属性的应用时机。
2. 当类中某个方法没有任何必要使用任何对象属性时，而且使用了对象属性反而让这个方法的逻辑不正确，那既如此，就应该禁止这个方法访问任何对象属性和其他的对象方法，这时就应该把这个方法定义为静态方法。例如：一个顾客类的购买方法【buy方法】中肯定要允许访问顾客微信这些对象属性，这样的方法我们就需要定义在原型对象属性上，但如果顾客类中的 阅读积分公告方法是针对全顾客的公告方法，就应该定义为静态方法，方法内部就应该禁止出现任何具体的对象属性，如果在这样的方法中使用了顾客的某个属性，比如姓名，那么这个方法逻辑就不正确了，所以我们应该让这样的方法禁止访问对象属性和其他的对象方法，那就应该设置为静态方法
3. 当一个类中某个方法只有一个或1-2个对象属性，而且更重要的是，你创建的这个类的对象毫无意义，我们只需要使用这个类的一个或者多个方法就可以了，那么这个方法就应该定位为静态方法

## 继承
### es5原型链继承
> 子对象首先在自己的对象空间中查找要访问的属性或者方法，如果找到，就输出，如果没有找到，就沿着子对象中的proto属性指向的原型对象空间中去查找有没有这个属性或方法，如果找到，就输出，没有找到，继续沿着原型对象空间中的proto查找上一级原型对象空间中的属性或方法，直到找到Object.prototype 原型对象属性指向的原型对象空间位置，如果再找不到，就输出null 

原型链继承实现的本质是改变Son构造函数的原型对象变量的指向【就是Son.prototype的指向】Son.prototype = new Parent(), 那么Son.prototype 可以访问Parent对象空间的属性和方法，所以顺着 `__proto__` 属性，Son 类也可以访问Parent类的原型对象空间中的所有属性和方法

```JavaScript
function Parent(job){
    this.job = job
}
Parent.prototype.parentName = 'zhansan'

function Son(name: string){
    this.name = name
}

Son.prototype = new Parent('doctor')
Son.prototype.constructor = Son
const son = new Son('zhang1')
console.log(son.parentName) // zhansan
console.log(son.job) // doctor
```

#### 原型链继承的不足
局限性：不能通过子类构造函数向父类构造函数传递参数

### 借用构造函数（冒充对象继承）
（1）借用构造函数继承如何解决原型链继承的局限性

    借用构造函数继承思想就是在子类的内部借助apply()和call()方法调用并传递参数给父类
      
（2）借用构造函数的不足

    借用构造函数实现了子类构造函数向父类构造函数传递参数，但是没有继承父类原型的属性和方法，无法访问父类原型上的属性和方法

示例：
```JavaScript
function People (name, age, id){
    this.name = name
    this.age = age
    this.id = id
}
People.say = function(){
    console.log('Hello World')
}
function Samele(name, age, id, favor){
    // 实例对象samele借用 People 函数的方法，使实例对象samele具有了name、age、id属性
    People.call(this, name, age, id)
    // People.apply(this, [name, age, id]) // call apply唯一区别就是apply第二个参数传递的是一个数组
    this.favor = favor
}
const samele = new Samele('Samele', '18', '12345', 'music')
console.log('samele:', samele)
// call apply 无法使子类继承父类的原型上的属性和方法
console.log('samele-say:', samele.say()) // samele.say is not a function
```

### 借用构造函数 + 原型链继承组合模式
#### 优势
1. 具备借用构造函数的优点：子类的内部可以向父类传递参数
2. 具备原型链继承的优点：实例对象可以访问父类原型对象上的属性和方法，也可以通过子类的原型对象访问父类的原型对象上的属性和方法

#### 缺点
调用了两次父类的构造函数  new Samele 调用构造函数带来的问题：
1. 进入 Samele 构造函数为属性赋值，分配内存空间，浪费内存
2. 赋值导致效率下降了一些，并且无意义，出现代码冗余

### 寄生组合式继承【最佳继承模式 也是 TS采用的继承方式】


```JavaScript
function People (name, age){
    this.name = name
    this.age =age
}
People.prototype.say = function(){
    console.log('Hello World')
}
function Samele(name, age, favor){
    People.call(this, name, age)
    this.favor = favor
}

// 第一步：创建一个寄生构造函数
function Middle(){
    this.count = 123
}
Middle.prototype = People.prototype
// 第二步：创建一个寄生新创建的构造函数对象
let middle = new Middle()
// middle.__proto__ === People.prototype // true
// 第三步： Samele 子类的原型对象空间指向第二部的新创建的构造函数对象
Samele.prototype = middle

let samele = new Samele('张三', 12, 'music')

// 对Middle的封装
function _exdents(parent, son){
    function Middle(){
    // Middle 的函数对象空间和new Middle的__proto__已经指向了parent 的原型对象空间
        this.constructor = son
    }
    Middle.prototype = parent.prototype
    return new Middle()
}
```
### TS类中的继承
> 例子：汽车租赁公司有客车，小轿车两种车型，小轿车根据车的类型来定每天的租金，客车以座位数定租金，计算客户租用n天需要花费的金额

```JavaScript
  class Cart {
    brand: string
    cartNo: string
    days: number
    constructor (_brand: string, _cartNo: string, _days: number){
        this.brand = _brand
        this.cartNo = _cartNo
        this.days = _days
    }
    // ts constructor以外定义的方法，不是放在自身对象上，而是放在了对象的原型对象空间中
    getRent(){
        console.log(`父类方法 - 品牌：${this.brand},车牌号：${this.cartNo},租用天数：${this.days}`)
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

```

### 方法重写（override）
当父类中方法的实现不能满足子类功能需要或不能完全满足子类功能需要时，就需要在子类中进行方法重写

条件：一定发生在继承中
位置：子类中重写父类的方法
优点：父类方法代码在子类中得到复用
定义规则：1. 和父类方法同名，2. 参数和父类相同，如果是引用类型的参数，需要依据具体类型定义，3. 父类方法的访问范围【访问修饰符】必须小于子类中方法重写的访问范围【访问修饰符】，同时父类方法不能是private

### super 的两种用法【super 只能出现在子类[派生类]中】
1. 在子类的构造函数中使用super（子类传递给父类构造函数的参数）就表示用来调用父类构造函数（传递给父类构造函数的参数）
2. 在子类重写的方法中调用父类同名方法，super重写方法

错误用法： 当子类和父类有同名属性时，不可以在子类中用super来获取父类同名属性

### 上述TS类继承代码（汽车租赁）编译为ES5讲解
你可以学到什么：

 （1）setPrototypeOf 使用 和 Object.create 的区别
 （2）父类静态方法和属性在子类中的继承：setPrototypeOf；
     深度掌握 + 手写 + 优化底层 extendsStatics 方法实现
     extendsStatics方法的作用：完成父类静态方法和属性在子类中的继承
（3）深度掌握 _extends 方法

#### setPrototypeOf

```JavaScript
function People (name, age){
    this.name = name
    this.age = age
}
People.prototype.say = function(){
    console.log('Hello Son')
}
function Samele(name, age, favor){
    People.call(this, name, age)
    this.favor = favor
}
Samele.prototype.hls = function(){
    console.log('hls')
}
function _exdents(son, parent){
//     let middle =  Object.create(parent.prototype, {
//         'name': {
//             value: '张三',
//             writable: true
//         }
//    })
// return middle
// Object.setPrototypeOf 为现有对象提供原型，返回一个新对象
// 接收两个参数：第一个是现有对象，第二个是原型对象
   return Object.setPrototypeOf(son.prototype, parent.prototype)
   // 上面等价于 son.prototype.__proto__ = parent.prototype
}
_exdents(Samele, People)

// Samele.prototype = _exdents(People)
// Samele.prototype.constructor = Samele
const samele = new Samele('zhangsan', 12, 'play')
console.log(samele)
// Object.setPrototypeOf 和 Object.create 的区别是并没有改变samele指向的原型对象空间，所以可以访问hls()
samele.hls()
```

#### 子类继承父类的静态属性和静态方法

```JavaScript
function HlS() {}
HlS.page = 'h'
People.__proto__ = HlS
function People(a){
    this.a = a
}
People.say = function(){
    console.log('Hello World')
}
People.age = 30

// 方法一
for (var key in People){
    if(Object.hasOwnProperty.call(People, key)){
        //  其实就是把父构造函数的静态属性和方法赋值到子构造函数的静态空间中
        Samele[key] = People[key]
    }
}
// 方法二
Object.keys(People).forEach(key => {
    Samele[key] = People[key]
})
// 方式三
Samele.__proto__ = People

// 方式四 es6
Object.setPrototypeOf(Samele, People)

function Samele(){}
Samele.say()
console.log('Samele-static', Samele.age) // 30
```

### TS继承 - 编译后源码_extends实现继承（以上述对汽车租赁公司TS继承举例）

```JavaScript
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
```

## TS类型断言、转换
TS 类型断言：把两种能有重叠关系的数据类型进行相互转换的一种TS语法，把其中一种数据类型转换成另外一种数据类型。类型断言和类型转换的效果是一样的，但语法不同

TS类型断言的语法格式：A 数据类型的变量 as B 数据类型的变量。A 数据类型和 B 数据类型必须具有重叠关系。

重叠关系：
- 如果 A，B 是类并且有继承关系：
    【extends 关系】无论A，B谁是父类或子类，A的对象变量可以断言成B类型，B的对象变量可以断言成A类型。但注意一般在绝大多数场景下都是把父类的对象变量断言成子类。

```JavaScript
class People {
    name: string
    age: number
    constructor(name_: string, age_: number){
        this.name = name_
        this.age = age_
    }
    public say(){
        console.log('Hello world')
    }
    get(){}
}

class Samale extends People {
    favor: string
    constructor(name_: string, age_: number, favor_: string){
        super(name_, age_) // People.call(this, name_, age_)
        this.favor = favor_
    }
    say(){
        super.say() // _super.prototype.say.call(this)
    }
    savlit(){}
}

// 类型断言
const people = new People('xiaoming', 12) as Samale
const samale = new Samale('xiaoming', 12, 'music') as People

// 类型转换
const result = <People>new Samale('xiaoming', 12, 'music')
```
    
- 如果 A，B 类没有继承关系：
  两个类中的任意一个类的所有的public 实例属性【不包括静态属性】加上所有的public 实例方法和另一个类的所有 public 实例方法完全相同或是另外一个类的子集，则这两个类可以相互断言，否则这两个类就不能相互断言
  
```JavaScript
// 一个类是另一个类的子集可以相互断言
class People {
    name: string
    age: number
    constructor(name_: string, age_: number){
        this.name = name_
        this.age = age_
    }
    say(){
        console.log('Hello world')
    }
    get(){}
}

class Samale  {
    favor: string
    name !: string
    age !: number
    constructor(name_: string, age_: number, favor_: string){
        this.favor = favor_
    }
    say(){
    }
    savlit(){}
    get(){}
}

// 类型断言
const people = new People('xiaoming', 12) as Samale
const samale = new Samale('xiaoming', 12, 'music') as People

// 类型转换
const result = <People>new Samale('xiaoming', 12, 'music')

```
  
- 如果 A 是类，B是接口，并且 A 类实现了 B 接口【implements】, 则 A 的对象变量可以断言成 B 接口类型，同样 B 接口类型的对象变量也可以断言成 A 类型。

```JavaScript
interface TextProps{
    length: number
}
class Samale implements TextProps {
    favor: string
    name !: string
    age !: number
    length!: number
    constructor(name_: string, age_: number, favor_: string){
        this.favor = favor_
    }
    say(){
    }
}

Samale as TextProps

let text: TextProps = {length: 1}
const result = text as Samale
```
- 如果 A 是类，B 是接口，并且A类没有实现 B 接口， 断言关系和第二项规则相同

- 如果 A 是类， B 是type 定义的对象数据类型【就是引用数据类型，例如 Array对象，不能是基本数据类型，例如：string，number， boolean】，并且有 A 类 实现了 B type定义的数据类型【implements】，则 A 的对象变量可以断言成 B type 定义的对象数据类型，同样 B type 定义的对象数据类型的对象变量也可以断言成 A 类型。

```JavaScript
type TextAge = {name: string}
class Samale implements TextAge {
    favor: string
    name !: string
    age !: number
    length!: number
    constructor(name_: string, age_: number, favor_: string){
        this.favor = favor_
        this.age = age_
    }
    say(){
    }
  
}

Samale as TextAge

let text: TextAge = { name: 'da'}
const result = text as Samale
```

- 如果 A 是类， B 是type定义的数据类型，并且 A 类没有实现 B type 定义的数据类，则断言关系和第2项相同

- 如果 A 是一个函数上参数变量的联合类型，例如 string ｜ number， 那么在函数内部可以断言成 string 或 number 类型。

```JavaScript
function Car (params: string | number){
    params as string
    params as number
}
```

- 多个类组成的联合类型如何断言？例如： let people：car ｜ Bus ｜ Trunck。people 可以断言成其中任意一种数据类型。例如： people as car ， people as Bus， People as Trunck

```JavaScript
class Card {
    name!: string
    a(){}
}
class Truck {
    age !: number
    b(){}
}
class Merge {
    say(params: Card | Truck){
        (params as Card).a;
        (params as Truck).b
    }
}
```

- 任何数据类型都可以转换成 any 或 unknown 类型， any 或 unknown 类型也可以转换成任何其他数据类型

```JavaScript
    let aa: number = 1
    aa as any
    aa as unknown
    
    let bb: any = 1
    bb as number
    bb as unknown
```

## TS 类型守卫
### new 底层发生了什么？

```JavaScript
function Person(names, age){
    this.name = names
    this.age = age
    this.say = function(){}
    // 如果Person 返回的是值类型，那么会返回obj，如果是引用类型，返回引用类型，默认返回undefined
    return undefined
}
let p = new Person('zhangsan', 13) 
console.log(p) // Person{name: 'zhangsan', age: 13, say: ƒ}

// new 的过程 发生了3步
1. var obj = {}
2. obj.__proto__ = Person.prototype
3. Person.call(obj, 'zhangsan', 13) 

console.log(obj) // Person{name: 'zhangsan', age: 13, say: ƒ}
```

### 类型守卫定义
在语句的块级作用域【if语句内或条目运算符表达式内】缩小变量的一种类型推断的行为

### 类型守卫产生的时机
在TS条件语句中遇到下列关键字时，会在语句的块级作用域内缩小变量的类型，这种类型推断的行为称为类型守卫。类型守卫可以帮助我们在块级作用域中获得更为需要的精确变量类型，从而减少不必要的类型断言
- 类型判断：typeof(用来检测一个变量或一个对象的数据类型)
- 属性或者方法或者函数判断：in
- 实例判断：instanceof
- 字面量相等判断：==, ===, !=, !==

### TS 类型守卫晋级考核题
请编写一个操作对象方法和属性的函数实现以下功能

1. 当对象字符串属性有空格时就去掉空格后输出。
2. 当遇到对象函数时就执行，其他数据类型的属性一律直接输出
3. 只有对象中包含allowinput 属性时，才允许输出
4. 函数接收到外部传入的null，undefined，{}时，直接输出不是一个合法的对象

> 考核点：1.考核对类型守卫的熟练运用程度 2. 静态方法

```JavaScript
interface Props {
    username: string;
    eat: () => void,
    allowinput?: number
}

class Utils {
    public static strim(str: string){
       return str.replace(/\s+/g, '')
    }
}
let obj: Props = {
    username: 'He llo  World',
    eat(){
        console.log(Utils.strim(this.username))
    },
    allowinput: 1
}


const output = function(obj: any){
    if(obj == null && JSON.stringify(obj) === '{}'){
        console.log('对象不合法')
        return
    }
    if('allowinput' in obj){
        Object.keys(obj).forEach(key => {
            if(typeof obj[key] === 'string'){
                Utils.strim(obj[key])
            }else if(typeof obj[key] === 'function'){
                obj[key]()
            }else{
                console.log('其他属性：', key)
            }
        })
    }
}
output(obj)
```

### typeof 的替代：
Object.prototype.toString.call([]) //[object Array] 表示类型是object，是由Array创建的

但是无法获取一个自定义的类的实例变量或构造函数的对象变量的真正创建类型`[object object]`，必须使用 instanceof 来解决

### instanceof
- 对象变量.proto = 类名或函数名.prototype
  如果instanceof 关键字 左边对象变量的proto 属性指向的原型对象空间 = 右边类名或函数名的prototype 对象属性指向的原型对象空间，那么返回true
- 对象变量._proto_._proto_....._proto_ = 类名或函数名.prototype
    instanceof 左边对象变量proto 的1到多个上一级proto指向的原型对象空间，等于右边类名或函数名的prototype 对象属性指向的原型对象空间，那么也返回true，按照这个规律查找，直到Object.prototype 对象属性指向的原型对象空间为止。
    
## 多态
### 定义
 父类的对象变量可以接受任何一个子类的对象，从而用这个父类的对象变量来调用子类中重写的方法而输出不同的结果

### 产生多态的条件
1. 必须存在继承关系
2. 必须有方法重写

### 多态的好处
1. 利于项目的扩展【从局部满足了 开放封闭原则 -- 对修改关闭，对扩展开放】

### 多态的局限性
1. 无法直接调用子类独有方法，必须结合instanceof类型守卫来解决

```JavaScript
class Person{
    eat(){}
}

class ChinesePeople extends Person{
    eat(){console.log('吃中餐')}
}

class AmericaPeople extends Person{
    eat(){console.log('吃西餐')}
}

let person:Person = new ChinesePeople()

person.eat()
person = new AmericaPeople()
person.eat()
export { }
```

### 多态的使用场景

## TS抽象类【abstract class】
> 一个在任何位置都不能被实例化的类就是一个抽象类，抽象类不能被实例化

什么样的类可以被定义为抽象类？
从宏观上来说，任何一个实例化后毫无意义的类都可以被定义为抽象类。比如：我们实例化一个玫瑰花类的对象变量，可以得到一个具体的 玫瑰花 实例对象，但如果我们实例化一个 Flower 类的对象变量，那世界上有一个叫 花 的对象吗？很明显没有，
所以 Flower 类可以定义为一个抽象类，但玫瑰花可以定义为具体的类。

## TS 抽象方法
1. 没有方法体，只有方法声明
2. 带abstract 关键字

```JavaScript
abstract class People {
    public name:string
    public abstract eat(): void;
}
```
### 抽象类的优点
1. 提供统一名称的抽象方法，提高代码的可维护性：抽象类通常用来充当父类，当抽象类把一个方法定义为抽象方法，那么会强制在所有子类中实现它，防止不同子类的同功能的方法名不相同，从而降低项目维护成本。
2. 防止实例化一个实例后毫无意义的类

### 抽象类和接口结合的真实应用场景
