import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//custom directives
//pass the directive tag then a function where you get el which is a bound element
Vue.directive("rainbow", (el) => {
    el.innerHTML = el.innerHTML.toUpperCase();
    el.style.color = "#" + Math.random().toString().slice(2, 8);
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
