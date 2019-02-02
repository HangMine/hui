export default {
    setFontsize(designWidth = 750) {
        
        let dpr = window.devicePixelRatio;
        let screenWidth = document.documentElement.offsetWidth
        let fontSize = 100 * (screenWidth * dpr / designWidth);
        // let isMac = /Mac/.test(navigator.platform);
        // if(dpr == 1 || isMac) return;
        document.documentElement.style.fontSize = `${fontSize}px`;
    },
    adaptScreen() {
        let dpr = window.devicePixelRatio;
        let scale = 1 / dpr;
        let content = `width=device-width,initial-scale=${scale},maximum-scale=${scale}, user-scalable=no`;
        document.querySelector('meta[name=viewport]').setAttribute('content', content);
    },
    init() {
        this.setFontsize();
        this.adaptScreen();
    }
}