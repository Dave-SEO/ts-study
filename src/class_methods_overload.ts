class ArrayList {
    constructor(public ele: Array<object>){
    }
    get(i: number){
        return this.ele[i]
    }
    show(){
        console.log(this.ele)
    }
    remove(i: number): number
    remove(obj: object): object
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
list.show()

interface AreaProps {
    width: number
    height: number
}
class Size{
    public width: number
    public height: number
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