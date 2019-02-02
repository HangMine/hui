// 使用说明:
// 1.元素增加以下两个属性：v-infinite-scroll= "FnName"，:infinite-scroll-loading="Boolean"
// 2.loading为Boolean,true表示加载中,当Boolean为true时触发加载函数（加载中spinner需要手动添加，后续考虑加到该组件里）
// 3.当没有设置autoflow元素并且高度没有溢出窗口时，元素无法触发滚动，所以无法生效

import Vue from "vue";
import {getScrollTop,getScrollEl,getElViewHeight,setElLimitHeight} from "../../js/scroll.js";
let elm = null;
let instance = null;
let bottomReachedFn = null;
let scrollEl = null;

function addEvent() {
    scrollEl.addEventListener('scroll', scrollHandle);
}

function removeEvent() {
    scrollEl.removeEventListener('scroll', scrollHandle);
}

function scrollHandle() {

    if (!isLoading() && immediateCheck() && bottomReached()) {
        console.log('is bottom');
        bottomReachedHandle(bottomReachedFn);
    }
}

//检查是否立即执行
function immediateCheck() {
    let immediateCheck = elm.getAttribute('infinite-scroll-immediate-check');
    return immediateCheck == 'false' ? false : true;
}

//检查是否正在加载
function isLoading() {
    let isLoading = elm.getAttribute('infinite-scroll-loading');
    return isLoading == null || isLoading == '' ? false : true;
}

//检查是否触底
function bottomReached() {
    let scrollTop = getScrollTop(scrollEl);
    let elViewHei = getElViewHeight(elm, scrollEl);
    let elAllHei = elm.scrollHeight;
    return scrollTop + elViewHei == elAllHei ? true : false;
}

//触底执行函数
function bottomReachedHandle(fnName) {
    instance[fnName]();
}




export default {
    bind: (el, bind, vnode) => {
        Vue.nextTick(() => {
            //绑定初始化
            elm = el;
            instance = vnode.context;
            bottomReachedFn = bind.expression;
            scrollEl = getScrollEl(el);
            setElLimitHeight(el,scrollEl);
            scrollHandle();

            addEvent();
        })
    },
    unbind: (el, bind, vnode) => {
        Vue.nextTick(() => {
            scrollEl = getScrollEl(el);
            removeEvent();
        })
    }
}