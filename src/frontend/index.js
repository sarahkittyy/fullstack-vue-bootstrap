import Vue from 'vue';
import Vuex from 'vuex';

import vueHeadful from 'vue-headful';
import VueRouter from 'vue-router';
import { BootstrapVue } from 'bootstrap-vue';

import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.component('vue-headful', vueHeadful);

var app = new Vue({
	el: '#root',
	store,
	router,
	template: '<router-view></router-view>',
});