import {Food, ArrayList} from './ArrayList'
export class FoodDao {
    init(){
        const food1 = new Food('F100', '佛跳墙', '商号000')
        const food2 = new Food('F101', '宫保鸡丁', '商号001')
        const food3 = new Food('F102', '炸鸡', '商号002')
        const food4 = new Food('F103', '可乐', '商号003')
        const food5 = new Food('F104', '雪碧', '商号004')
        const food6 = new Food('F105', '橙汁', '商号005')
        const food7 = new Food('F106', '七喜', '商号005')
        const arr1 = new ArrayList<Food>()
        arr1.add(food1)
        arr1.add(food2)
        arr1.add(food3)
        arr1.add(food4)
        arr1.add(food5)
        arr1.add(food6)
        arr1.add(food7)
        return arr1.element
    }
    findAllFood(){
       return this.init()
    }
}

export {}