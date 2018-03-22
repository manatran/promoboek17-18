<template>
	<div class="lecturer">
		<div class="img" :style="'background-image:url(' + thumbnail + ')'"></div>
			<p>{{firstName}}
			<br>{{name}}</p>
		</div>
</template>

<script>
	export default {
		props: ['firstName', 'name', 'thumbnail']
	}
</script>

<style>
	.lecturer .img {
		height: 64px;
		width: 64px;
		border-radius: 50%;
		background-size: cover;
		display: inline-block;
	}

	.lecturer {
		display: block;
		flex-direction: column;
		align-items: center;
		min-width: 200px;
		text-align: center;
		text-overflow: unset;
	}
	.lecturer img {
		width: 32px;
		height: 32px;
	}
	.lecturer p {
		font-size: 12px;
	}
</style>