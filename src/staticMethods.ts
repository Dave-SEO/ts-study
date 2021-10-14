class useStorage{
   public static store: useStorage
   public static a: number
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

class useStorage1{
    // 懒汉式设计模式 创建时机：静态属性 早于 堆中开辟的对象空间
    static store: useStorage1 = new useStorage1()
    private constructor(){
        console.log('懒汉式设计模式-构造器')
    }
    get(){}
}