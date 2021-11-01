import List from './List'

class LinkedList<T> implements List<T> {
    add(ele: T): void {
        throw new Error('Method not implemented.');
    }
    get(index: number): T {
        throw new Error('Method not implemented.');
    }
    size(): number {
        throw new Error('Method not implemented.');
    }
    remove(value: T): T {
        throw new Error('Method not implemented.');
    }
}

// 接口类型对象变量可以接受任何它的实现类的对象
const link: List<string> = new LinkedList<string>()
