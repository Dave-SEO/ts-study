
export class Pager<T = any> {
    public pageSize : number = 3
    public current : number = 1
    public arrayList !: T[]
    public start: number = 0
    constructor(current: number) {
        this.current = current
    }
   public showListData(){
      this.start = this.pageSize * (this.current - 1)
      let end = this.start + this.pageSize - 1
      end = end >= this.arrayList.length ? this.arrayList.length : end
      // slice 方法截取-顾头不顾尾
      return this.arrayList.slice(this.start, end + 1)
   }
}
export {}