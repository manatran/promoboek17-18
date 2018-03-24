<template>
  <div class="down">
		<img id="scrollBtn" src="assets/icons/down.png" alt="down">
	</div>
</template>

<style scoped>
	.back,
	.down {
		padding: 16px;
		text-align: center;
		color: white;
	}

	.back a,
	.down a {
		color: white;
		text-decoration: none;
		border: solid 4px #CA4753;
		padding: 10px;
		border-radius: 24px;
		transition: 0.5s;
	}

	.back a:hover,
	.down img:hover {
		background: linear-gradient(to right, #CA4753, #303880);
		color: white;
		font-weight: 500;
		border-color: #303880;
	}
	.down:hover img{

	}

	.down {
		position: absolute;
		bottom: 48px;
		width: 100%;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		padding: 8px;
		margin: 0 auto;
		display: flex;
		align-content: center;
		height: 16px;
		width: 16px;
		border-radius: 4px;
	}

	.down img {
		height: 24px;
		width: 24px;
		border-radius:50%;
		padding:4px;
	}
</style>
