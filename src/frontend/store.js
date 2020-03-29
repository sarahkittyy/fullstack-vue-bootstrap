import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		message: 'Hello, World'
	},
	mutations: {
		reverse(state) {
			state.message = state.message.split('').reverse().join('');
		}
	}
});

export default store;