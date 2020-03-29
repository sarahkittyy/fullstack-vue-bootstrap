import Vue from 'vue';
import Vuex from 'vuex';

import vueHeadful from 'vue-headful';

import App from './views/App';
import store from './store';

Vue.config.productionTip = false;

Vue.component('vue-headful', vueHeadful);

var app = new Vue({
	el: '#root',
	store,
	components: { App },
	template: '<App />',
});