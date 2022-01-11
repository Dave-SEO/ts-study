// 理解 k extends keyof any
type KeyofType = keyof any

interface PeoPle {
    name: string;
    age: number
}
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
type A = Record<string, PeoPle>

type B = {[key in keyof PeoPle]: boolean}

interface PageInfo {
    title: string;
}
  
  type Page = "home" | "about" | "contact";
  
  const nav: Record<Page, PageInfo> = {
    about: { title: "123" },
    contact: { title: "3455" },
    home: { title: "566" },
  };
export {}