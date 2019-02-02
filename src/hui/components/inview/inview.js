//注意：只能是监听窗口

function inView(el, classArr) {
    let viewTop = el.getBoundingClientRect().top;
    let viewBot = el.getBoundingClientRect().bottom;
    //元素的底部超过窗口的上方 或者 元素的顶部超过窗口的上方
    if (viewBot < 0 || viewTop > document.documentElement.clientHeight) {
        setAnimate('inView', el, classArr);

    } else {
        setAnimate('outView', el, classArr);

    }
}

function setAnimate(type, el, classArr) {
    if (type == 'inView') {
        if (classArr && classArr.length == 2) {
            el.classList.remove(classArr[1]);
            el.classList.add(classArr[0]);
        } else {
            //没有设置class时默认样式
            el.style.opacity = 0
        }
    } else {
        if (classArr && classArr.length == 2) {
            el.classList.remove(classArr[0]);
            el.classList.add(classArr[1]);
        } else {
            //没有设置class时默认样式
            el.style.opacity = 1
        }
    }
}

function firstLoad(el, classArr) {
    //首次加载时需要等元素加载完毕才有高度

    if (el.tagName == "IMG") {
        //照片需要等加载完
        el.onload = () => {
            inView(el, classArr);
        }
    } else {
        //普通元素setTimeout,因为如果有照片需要等照片渲染完
        setTimeout(() => {
            inView(el, classArr);
        }, 0)

    }
}

function checkInView() {
    elArr.forEach(item => {
        let viewFlag = item.el.getAttribute('check-view');
        if (viewFlag == '') inView(item.el, item.classArr);
    })
}

let elArr = [];

export default {
    bind(el, binding) {
        let classArr = binding.value;
        el.setAttribute('check-view', '');
        el.style.transition = 'all 1s';
        firstLoad(el, classArr);

        elArr.push({
            el: el,
            classArr: classArr
        });

        //只绑定一次事件
        if (elArr.length > 1) return;
        window.addEventListener('scroll', checkInView)

    },
    unbind() {
        window.removeEventListener('scroll', checkInView)
    }
}