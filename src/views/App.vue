<template>
<div>
	<vue-headful title="hi vue homepage" />
	<p> {{ message }} </p>
	<button @click="reverse">click me </button>
</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
	name: 'App',
	computed: {
		/*...mapState([
			message
		]),*/
		message() {
			return this.$store.state.message;
		}
	},
	methods: {
		/*...mapMutations([
			'reverse',
		]),*/
		reverse() {
			this.$store.commit('reverse');
		}
	},
}

</script>

<style lang="scss" scoped>

p {
	color: #333;
}

</style>