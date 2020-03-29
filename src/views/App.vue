<template>
<div>
	<vue-headful title="hi vue homepage" />
	<p> {{ message }} </p>
	<button @click="reverse">click me </button>
</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			message: 'Hai, Vue!',
		}
	},
	methods: {
		reverse () {
			this.message = this.message.split('').reverse().join('');
		}
	}
}

</script>

<style lang="scss" scoped>

p {
	color: #333;
}

</style>