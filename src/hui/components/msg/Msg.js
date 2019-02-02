import Vue from 'vue';
import Msg from './Msg.vue';
import {
    once
} from '../../js/dom.js';

const MsgConstructor = Vue.extend(Msg);


const msg = {
    show(option = {}) {

        let vm = this.getInstance();
        document.body.appendChild(vm.$el);

        this.setOption(vm, option);
        this.setVmClose(vm);

        Vue.nextTick(() => {
            vm.show = true;
        })

        //duration为 -1 不关闭
        ~vm.duration && 
        setTimeout(() => {
            if (vm.show) vm.close();
        }, vm.duration);

        return vm;
    },
    close() {
        this.show = false;
        let el = this.$el;
        once(el, 'transitionend', () => {
            el.parentNode.removeChild(el);
        })
    },
    setVmClose(vm) {
        vm.close = this.close;
    },
    getInstance() {
        return new MsgConstructor({
            el: document.createElement('div')
        });
    },
    setOption(vm, option) {
        vm.msg = typeof option === 'string' ? option : option.msg;
        if (option.duration) vm.duration = option.duration;
        if (option.position) vm.position = option.position;
        if (option.icon) vm.icon = option.icon;
        if (option.className) vm.className = option.className;
    }
}
export default msg.show.bind(msg);