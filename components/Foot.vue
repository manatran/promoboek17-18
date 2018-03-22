<template>
  <footer>
		<div class="copy container">
			<p class="light">&copy; Copyright. All rights reserved.</p>
			<a href="http://www.arteveldehogeschool.be/" target="_blank">
				<img src="/assets/ahs_white.png" alt="AHS logo">
			</a>
		</div>
	</footer>
</template>

<style>
footer::before {
	content: "";
	display: block;
	height: 3px;
	background: linear-gradient(to right, #000002, #CA4753, #303880, #000002);
	opacity: 0.5;
}

footer {
	background-color: black;
	display: flex;
	flex-direction: column;
}

footer p {
	margin: 0;
}

.copy {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.copy img {
	width: 24px;
	height: 24px;
	opacity: 0.75;
}

.contact {
	line-height: 24px;
}

.contact a {
	color: white;
	text-decoration: none;
}

.contact a:hover {
	color: #CA4753;
}
</style>
