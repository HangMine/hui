//获取scrollTop,兼容safari--dom.js
function getScrollTop(el) {
    return el == window ? pageYOffset || document.documentElement.scrollTop : el.scrollTop;
}

//获取当前元素，兼容ie--dom.js
function getStyle(el) {
    return getComputedStyle ? getComputedStyle(el) : el.currentStyle
}

//获取需要绑定scroll事件的元素--dom.js
function getScrollEl(el) {
    let currentNode = el;
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        let overflowY = getStyle(currentNode).overflowY;
        
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
        }
        currentNode = currentNode.parentNode;
    }
    return window;
}

//获取元素显示在窗口的高度--dom.js
function getElViewHeight(el, scrollEl) {
    if (scrollEl == window) {
        //滚动对象为window,并且el高度超出屏幕时生效
        return document.documentElement.clientHeight - el.offsetTop;
    } else {
        //滚动对象为el,并且el高度固定且未超出屏幕时生效
        return el.offsetHeight;
    }
}

//0 当scrollEl为el时,设置高度
//1 如果el的高度>窗口高度: 如果el在首窗口，则将el设置为窗口高度
//2 如果el的高度<窗口高度:则将el设置为原本高度(防止el设置overflow为auto但却没有设置高度时,滚动不生效--mintui 也没有兼容此问题)
function setElLimitHeight(el, scrollEl) {
    if (scrollEl == window) return;
    let elHei = +getStyle(el).height.slice(0, -2);
    let winHei = document.documentElement.clientHeight;
    if (elHei > winHei) {
        el.style.height = el.offsetTop < winHei ?` ${winHei - el.offsetTop}px` : `${winHei}px`;
    } else {
        el.style.height = elHei > winHei ? `${winHei}px` : `${elHei}px`;
    }

}

export {
    getScrollTop,
    getScrollEl,
    getElViewHeight,
    setElLimitHeight
};