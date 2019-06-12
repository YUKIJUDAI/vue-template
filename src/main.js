import Vue from "vue";
import Element from 'element-ui';

import App from "./App.vue";
import router from "./routes/router";
import store from "./store/index";
import * as filters from './filters'

import 'normalize.css/normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

// 注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Vue.use(Element);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
