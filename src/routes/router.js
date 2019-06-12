import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

var routes = {
    mode: "hash",
    base: "/",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/Home.vue")
        }
    ]
}

export default new Router(routes);
