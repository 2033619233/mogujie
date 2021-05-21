export function debounce(func, delay) {
    let timer = null
    return function() {
        if(timer) clearInterval(timer)
        timer = setTimeout((args) => {
            func.apply(this,args)
        }, delay);
    }
}