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
            if(typeof obj[key] === 'string'){
                Utils.strim(obj[key])
            }else if(typeof obj[key] === 'function'){
                obj[key]()
            }else{
                console.log('其他属性：', key)
            }
        })
    }
}
output(obj)