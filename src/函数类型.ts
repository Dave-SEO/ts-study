type promisFnProps = (resolve: string, reject: string) => any

let promis1: promisFnProps = (resolve, reject) => {
}

class Promise {
    constructor(paramsFn: promisFnProps) {
        paramsFn('', '')
    }
}
new Promise((resolve, reject) => {

})
export {}