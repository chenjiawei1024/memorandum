// 调用getSiblings(),其返回值为elem兄弟元素组成的数组
export default function getSiblings(elem: HTMLElement): HTMLElement[] {
    let sibArr: HTMLElement[] = []
    let allChilds = elem.parentNode?.children
    if(allChilds) {
        for(let i=0;i<allChilds.length;i++) {
            if (allChilds[i].nodeType == 1 && allChilds[i] != elem) {
                sibArr.push(allChilds[i] as HTMLElement);
            }
        }
    }else {
        return [];
    }
    return sibArr
}