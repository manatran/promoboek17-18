<template>
  <nav class="container">
		<section class="logo">
			<a href="/">
				<img src="/assets/gdm.png" alt="GDM">
				<i>2017-18</i>
			</a>
		</section>
	</nav>
</template>

<style scoped>
nav {
	flex-direction: row;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

nav .logo a {
	color: white;
	text-decoration: none;
	font-family: "Montserrat", "Arial", sans-serif;
	font-weight:300;
	display: flex;
	flex-direction: row;
	align-items: baseline;
}

nav .logo i {
	padding-left: 16px;
	font-style: normal;
	position: relative;
	bottom: 1px;
}
</style>
