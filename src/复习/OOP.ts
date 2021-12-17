// 懒汉式设计模式
// 1. 把构造器设为私有的，不允许外部去创建
// 2. 设置静态属性, 静态方法，来让外部调用到这个对象
class useStore {
  public static store: useStore
  private constructor(){ }
  public static getInstance(){
    if(!this.store){
        this.store = new useStore()
    }
    return this.store
  }
}

// 饿汉式设计模式
// 1. 把构造器设为私有的，不允许外部访问
// 2. 设置一个静态属性 赋值给这个对象，静态缓存区创建时内部会自动调用构造器
class useStore_1 {
    public static store:useStore_1 = new useStore_1()
    private constructor(){}
}

class Car {
  public carAge: number
  public carColor: string
  constructor(carAge, carColor) {
    this.carAge = carAge
    this.carColor = carColor
  }
}

export {}