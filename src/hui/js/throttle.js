//节流
function throttle(fn, delay) {
    let running = false;
    return function () {
        if (running) return;
        fn.apply(this, arguments);
        running = true;
        setTimeout(() => {
            running = false;
        }, delay);
    }
}
//防抖
function debounce(fn, delay) {
    let timer = null;
    return function () {
        let self = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, delay);
    }
}

export {
    throttle,
    debounce
};