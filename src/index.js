import Vue from 'vue';

import vueHeadful from 'vue-headful';

import App from './views/App';

Vue.config.productionTip = false;

Vue.component('vue-headful', vueHeadful);

var app = new Vue({
	el: '#root',
	components: { App },
	template: '<App />',
});