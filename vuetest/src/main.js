import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueRouter from "vue-router";

Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

import HelloWorld from "./components/HelloWorld";

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/hello", component: HelloWorld },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
