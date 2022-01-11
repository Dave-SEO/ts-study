interface Worker {
    name: string;
    age: number;
    email: string;
    salary: string;
}

interface Student {
    name: string;
    age: number;
    email: string;
    grade: number;
}

type Exclude<T, U> = T extends U ? never : T
type ExcludeType = Exclude<keyof Worker, keyof Student> // salary

export {}