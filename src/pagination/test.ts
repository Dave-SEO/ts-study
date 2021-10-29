import {FoodDao} from './dao'
import {Pager} from './pager'
import {Food} from './ArrayList'


const pager = new Pager<Food>(1)
const foodDao =  new FoodDao()
pager.arrayList = foodDao.findAllFood()
pager.showListData().forEach(ret => {
    // ret.foodName
})

export {}