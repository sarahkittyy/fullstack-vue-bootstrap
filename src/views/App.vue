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
		message() {
			return this.$store.state.message;
		}
	},
	methods: {
		...mapMutations([
			'reverse',
		]),
	},
}

</script>

<style lang="scss" scoped>

p {
	color: #333;
}

</style>