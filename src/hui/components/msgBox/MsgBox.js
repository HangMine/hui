import Vue from 'vue';
import MsgBoxComponent from './MsgBox.vue';
const MsgBoxConstructor = Vue.extend(MsgBoxComponent);


let MsgBox = {

    alert(option, msg) {
        return MsgBox.init('alert', option, msg);
    },
    confirm(option, msg) {
        return MsgBox.init('confirm', option, msg);
    },
    prompt(option, msg) {
        return MsgBox.init('prompt', option, msg);
    },

    init(type, option, msg) {
        let instance = this.getInstance();
        this.setOption(type, instance, option, msg);
        document.body.appendChild(instance.$el);
        return this.getPromise(type, instance);
    },
    getInstance() {
        return new MsgBoxConstructor({
            el: document.createElement('div')
        });
    },
    setOption(type, instance, option, msg) {
        instance.type = type;
        if (option.showCancelButton == false || type == 'alert') instance.showCancelButton = false;
        if (option.showCommitButton == false) instance.showCommitButton = false;
        if (option) instance.title = typeof option == 'string' ? option : option.title;
        if (msg) {
            instance.msg = msg;
        } else if (option.msg) {
            instance.msg = option.msg;
        }
        instance.show = true;
    },

    getPromise(type, instance) {
        return new Promise((resolve, reject) => {
            //设置resolove到instance
            instance.resolve = resolve;
            instance.reject = reject;
        })
    }

}

export default MsgBox;