interface Customer {
    name: string;
    age: number
}

type custFuncType = (cus: Customer) => string

type inferType<T> = T extends (params: infer p) => any ? p : T

type inferResultType = inferType<custFuncType>


type custFuncType1 = (cus: Customer) => string
type inferReturnType<T> = T extends (params: any) => infer P ? P : T
type inferResultType1 = inferReturnType<custFuncType1>

export {}