<template>
	<div class="lecturer">
		<div v-if="thumbnail" class="img" :style="'background-image:url(' + thumbnail + ')'"></div>
		<div v-else class="img" :style="'background-image:url(/assets/placeholder_thumb.jpg);'"></div>
			<p>{{firstName}}
			<br>{{name}}</p>
		</div>
</template>

<script scoped>
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