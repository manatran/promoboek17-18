<template>
  <section class="student">
		<nuxt-link :to="'student/' + identifier">
			<img v-if="thumbnail" :src="thumbnail" alt="Student">
			<img v-else src="/assets/placeholder.jpg" alt="Student does not have a picture">
			<div class="info-container">
				<div class="student-info">
					<h2>{{ firstName }} {{ name }}</h2>
					<h3>{{ minor }}</h3>
				</div>
			</div>
		</nuxt-link>
	</section>
</template>

<script scoped>
	export default {
		props: ['identifier', 'thumbnail', 'firstName', 'name', 'minor']
	}
</script>

<style>
	main.students-card {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.students-card .student {
		margin: 8px;
		width: calc(25% - 16px);
		position: relative;
	}

	.students-card .student img {
		width: 100%;
	}

	.students-card .info-container {
		padding: 16px;
		box-sizing: border-box;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		min-height: 20%;
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 1));
		transition: 0.4s;
		margin-bottom: 3px;
	}

	.students-card .student:hover .info-container {
		min-height: 40%;
		background: linear-gradient(rgba(202, 71, 83, 0), rgba(125, 64, 106, 0.42), rgba(48, 56, 128, 0.85));
	}

	.students-card .student-info {
		position: absolute;
		bottom: 16px;
	}

	.students-card .student-info h2 {
		font-family: "Montserrat Black";
		font-weight: 900;
		font-size: 24px;
	}

	.students-card .student-info h3 {
		font-family: "Montserrat Light";
		font-weight: 200;
		font-size: 14px;
		margin: 4px 0 0 0;
	}

	.students-card .student a {
		color: white;
		text-decoration: none;
	}
	@media only screen and (max-width: 1080px) {
		.students-card .student {
			width: calc(50% - 16px);
		}
		.students-card .student-info h2 {
			font-family: "Montserrat Regular";
			font-weight: 600;
			font-size: 16px;
		}
		.students-card .student-info h3 {
			font-size: 12px;
		}
	}
</style>
