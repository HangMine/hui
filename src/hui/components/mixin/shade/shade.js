import Vue from 'vue';
import Shade from './Shade.vue';
let ShadeConstructor = Vue.extend(Shade);
import {
    once
} from '../../../js/dom.js'

export default {
    data() {
        return {
            //存放instance的数组
            instancePool: []
        }
    },
    methods: {
        getShadeInstance() {
            return new ShadeConstructor({
                el: document.createElement('div')
            });
        },
        getShadeEl(instance) {
            return instance.$el;
        },
        openShade(opacity) {
            let instance = this.getShadeInstance();
            let el = this.getShadeEl(instance);
            if(typeof opacity!=='undefined') instance.opacity = opacity; //传入透明度
            instance.show = true;
            document.body.appendChild(el);
            this.instancePool.push(instance);
            this.addEvent(instance);

            return instance;
        },
        closeShade(instance) {
            let instancePool = this.instancePool;
            //如果传入instance则清除指定的shade
            if (instance) {
                instance.show = false;
                instance.$el.parentNode.removeChild(instance.$el);
                let index = instancePool.indexOf(instance);
                instancePool.splice(index, index + 1);

            } else {
                //如果没有传入instance则清除最后一个shade
                let topInstance = instancePool[instancePool.length - 1];
                if(!topInstance) return;
                topInstance.show = false;
                topInstance.$el.parentNode.removeChild(topInstance.$el);
                instancePool.pop();
            }
        },
        addEvent(instance) {
            if (!this.closeOnClickShade) return;
            once(instance.$el, 'click', () => {
                //关闭模态框,在popup里watch关闭shade
                this.show = false;
            })
        }
    }
}