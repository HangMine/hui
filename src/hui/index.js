//移动端适配
import screenAdapt from './js/screenAdapt.js';

//图标字体
import './font/iconfont.css';

//js调用
import Msg from './components/msg/Msg.js';
import Load from './components/load/Load.js';
import MsgBox from './components/msgBox/MsgBox.js';

//组件
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import Spinner from './components/spinner/Spinner.vue';
import Cell from './components/Cell.vue';
import CellSwipe from './components/CellSwipe.vue';
import LoadMore from './components/LoadMore.vue';
import TabContainer from './components/TabContainer.vue';
import TabContainerItem from './components/TabContainerItem.vue';
import TabBar from './components/TabBar.vue';
import NavBar from './components/NavBar.vue';
import TabItem from './components/TabItem.vue';
import Popup from './components/Popup.vue';
import ActionSheet from './components/ActionSheet.vue';
import Search from './components/Search.vue';
import Switch from './components/Switch.vue';
import Checklist from './components/Checklist.vue';
import Radio from './components/Radio.vue';
import Field from './components/Field.vue';
import Badge from './components/Badge.vue';
import Progress from './components/Progress.vue';
import Range from './components/Range.vue';
import Swipe from './components/Swipe.vue';
import SwipeItem from './components/SwipeItem.vue';
import PaletteButton from './components/PaletteButton.vue';
import PaletteButtonItem from './components/PaletteButtonItem.vue';
import Picker from './components/Picker.vue';
import PickerItem from './components/PickerItem.vue';
import DatetimePicker from './components/DatetimePicker.vue';
import IndexList from './components/IndexList.vue';

//组件--base
import Input from './components/base/Input.vue';

//指令
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll.js';
import inview from './components/inview/inview.js';
const HUI = {
    install(Vue) {

        screenAdapt.init();

        Vue.prototype.$msg = Msg;
        Vue.prototype.$load = Load;
        Vue.prototype.$msgBox = MsgBox;

        Vue.component(Header.name, Header);
        Vue.component(Button.name, Button);
        Vue.component(Spinner.name, Spinner);
        Vue.component(Cell.name, Cell);
        Vue.component(CellSwipe.name, CellSwipe);
        Vue.component(LoadMore.name, LoadMore);
        Vue.component(TabContainer.name, TabContainer);
        Vue.component(TabContainerItem.name, TabContainerItem);
        Vue.component(TabBar.name, TabBar);
        Vue.component(NavBar.name, NavBar);
        Vue.component(TabItem.name, TabItem);
        Vue.component(Popup.name, Popup);
        Vue.component(ActionSheet.name, ActionSheet);
        Vue.component(Search.name, Search);
        Vue.component(Switch.name, Switch);
        Vue.component(Checklist.name, Checklist);
        Vue.component(Radio.name, Radio);
        Vue.component(Field.name, Field);
        Vue.component(Badge.name, Badge);
        Vue.component(Progress.name, Progress);
        Vue.component(Range.name, Range);
        Vue.component(Swipe.name, Swipe);
        Vue.component(SwipeItem.name, SwipeItem);
        Vue.component(PaletteButton.name, PaletteButton);
        Vue.component(PaletteButtonItem.name, PaletteButtonItem);
        Vue.component(Picker.name, Picker);
        Vue.component(PickerItem.name, PickerItem);
        Vue.component(DatetimePicker.name, DatetimePicker);
        Vue.component(IndexList.name, IndexList);

        Vue.component(Input.name, Input);


        Vue.directive('infinite-scroll', InfiniteScroll);
        Vue.directive('inview', inview);
    }
};

export default HUI;