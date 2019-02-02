import Vue from 'vue';
import Load from './Load.vue';
import {
    once
} from '../../js/dom.js';

const LoadConstructor = Vue.extend(Load);


const load = {
    show(option = {}) {

        let vm = this.getInstance();
        document.body.appendChild(vm.$el);

        this.setOption(vm, option);
        this.setVmClose(vm);

        Vue.nextTick(() => {
            vm.show = true;
            vm.openShade(0);//遮罩层
        })

        return vm;
    },
    close() {
        this.show = false;
        this.closeShade();//关闭遮罩层
        let el = this.$el;
        once(el, 'transitionend', () => {
            el.parentNode.removeChild(el);
        })
    },
    setVmClose(vm) {
        vm.close = this.close;
    },
    getInstance() {
        return new LoadConstructor({
            el: document.createElement('div')
        });
    },
    setOption(vm, option) {
        vm.text = typeof option === 'string' ? option : option.text;
        vm.type = typeof option === 'number' ? option : option.type;
    }
}
export default load.show.bind(load);