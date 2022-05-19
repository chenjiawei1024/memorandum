export default function getElementPosition(element: HTMLDivElement): number[] {
    var left = element.offsetLeft;// 当前元素左边距
    var top = element.offsetTop;// 当前元素上边距
    var parent = element.offsetParent as HTMLElement;// 当前元素的父级元素
    while (parent !== null) {
        left += parent.offsetLeft;// 累加左边距
        top += parent.offsetTop;// 累加上边距
        parent = parent.offsetParent as HTMLElement;// 依次获取父元素
    }
    return [left, top];
}