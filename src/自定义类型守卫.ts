// 自定义守位
function isString(str: any): str is string{
    return typeof str === 'string'
}
function isFunction(fn: any): fn is Function{
    return typeof fn === 'function'
}

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
            let value = obj[key]
            if(isString(value)){
                Utils.strim(value)
            }else if(isFunction(value)){
                obj[key]()
            }else{
                console.log('其他属性：', key)
            }
        })
    }
}
output(obj)

export {}