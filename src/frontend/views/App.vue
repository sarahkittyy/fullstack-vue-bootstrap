<template>
<div>
	<vue-headful title="hi vue homepage" />
	<p> {{ message }} </p>
	<button @click="reverse">click me?</button>
	<div class="center">
		<b-card
			title="card title"
			class="shadow-lg">
			<b-card-text>hello >w<</b-card-text>
		</b-card>
	</div>
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

@import '../styles/common.scss';

.center {
	width: 30%;
	margin: auto;
}

p {
	color: #333;
}

</style>