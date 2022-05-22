export default function throttle(fn: Function, delay?: number): Function {
    let timer: number | undefined = undefined;
    return function (this: any, ...rest: any){
        if(timer) return;
        let that = this;
        fn.apply(that, rest)
        timer = window.setTimeout(() => {
            clearTimeout(timer);
            timer = undefined;
        }, delay? delay : 500);
    }
}