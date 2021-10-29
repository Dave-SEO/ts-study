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

const link: List<string> = new LinkedList<string>()
