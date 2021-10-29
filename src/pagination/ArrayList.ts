export class ArrayList<T = any> {
    public element!: T[]
    constructor() {
        this.element = []
    }
    add(data: T){
        this.element.push(data)
    }
}

export class Food{
    constructor(public foodid: string, public foodName: string, public shop: string){}
}

export {}