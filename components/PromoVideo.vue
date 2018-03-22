<template>
  <section class="video-container">
		<div class="video">
			<iframe :src="url" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['url']
	}
</script>

<style>
	.video-container {
		width: 75%;
		margin: 24px auto;
		border-top: 10px solid #CA4753;
		border-bottom: 10px solid #303880;
		background-image: linear-gradient(#CA4753, #303880), linear-gradient(#CA4753, #303880);
		background-size: 10px 100%;
		background-position: 0 0, 100% 0;
		background-repeat: no-repeat;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.video {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		max-width: 100%;
	}

	iframe,
	object,
	embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	@media only screen and (max-width: 1080px) {
		.video {
			max-width: 100%;
			padding-bottom: 56.25%;
		}
		.video-container {
			width: 100%;
			margin: 24px auto;
		}
	}
</style>
