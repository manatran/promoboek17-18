<template>
  <div>
		<navigation/>
    <nuxt/>
		<foot/>
		<script src="/js/scripts.js"></script>
  </div>
</template>

<script>
	import Navigation from '~/components/Navigation.vue'
	import Foot from '~/components/Foot.vue'

	export default {
		components: {
			Navigation,
			Foot
		}
	}
</script>

<style>
	:root {
		font-family: "Montserrat", sans-serif;
		font-size: 16px;
		color: white;
	}

	html,
	body {
		background-color: #000002;
		min-height: 100vh;
	}

	::selection {
		background-color: #CA4853;
		color: white;
	}

	.container {
		display: flex;
		padding: 16px calc(50vw - 540px);
	}

	.light {
		opacity: 0.75;
		font-size: 12px;
	}
	@media only screen and (max-width: 1080px) {
		.container {
			padding: 16px;
		}
	}
</style>