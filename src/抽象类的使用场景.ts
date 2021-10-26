interface MouseListenerProcess{
   mouseEnter(e: MouseEvent): void
   mouseLeave(e: MouseEvent): void
   mouseDown(e: MouseEvent): void
   mouseUp(e: MouseEvent): void
}

//adapter 的好处是在实现具体功能时可以提示具体要实现的方法，并且不需要实现目前用不到的
abstract class MouseListenerAdapter implements MouseListenerProcess{
    mouseEnter(e: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
    mouseLeave(e: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
   abstract mouseDown(e: MouseEvent): void
   abstract mouseUp(e: MouseEvent): void
}


class  mouseProcess extends MouseListenerAdapter{
    mouseDown(e: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
    mouseUp(e: MouseEvent): void {
        throw new Error("Method not implemented.");
    }
}
