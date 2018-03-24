<template>
	<div>
		<main class="container error">
			<h1>Oeps, Error 404: Page Not Found</h1>
			<h2>We kunnen die student momenteel niet vinden,
				<br> dus krijg je een hoop docenten in de plaats.</h2>
		</main>

		<section class="marquee">
			<lecturer
				v-for="lecturer in lecturers"
				:key="lecturer._id"
				:firstName="lecturer.first_name"
				:name="lecturer.name" 
				:thumbnail="lecturer.picture.original"
			/>
			<lecturer
				v-for="lecturer in lecturers"
				:key="lecturer._id"
				:firstName="lecturer.first_name"
				:name="lecturer.name" 
				:thumbnail="lecturer.picture.original"
			/>
			</section>
		<section class="back">
			<a href="/">Ik zie liever studenten</a>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	import Lecturer from '~/components/Lecturer.vue'

	export default {
		components: {
			Lecturer
		},
		data() {
			return{
				lecturers:[]
			}
		},
		created(){
			const self = this
			axios.get("http://localhost:5000/api/v1/users/lecturer")
			.then((res)=>{
				self.lecturers = res.data
			})
		}
	}
</script>

<style scoped>
	.error {
		flex-direction:column;
		min-height:40vh;
	}
	.error h1 {
		font-family:"Montserrat Black";
		font-size: 48px;
		margin-top: 48px;
		margin-bottom: 32px;
	}

	.error h2 {
		font-family:"Montserrat Regular";
		line-height: 48px;
		font-size:32px;
		margin:0;
		font-weight:500;
	}
	.back,
	.down {
		padding: 16px;
		text-align: center;
		color: white;
		margin-bottom:32px;
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
	.down a:hover {
		background: linear-gradient(to right, #CA4753, #303880);
		color: white;
		font-weight: 500;
		border-color: #303880;
	}

	.marquee {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		animation: bannermove 80s linear infinite;
		margin-bottom: 40px;
	}

	.marquee:hover {
		animation-play-state: paused;
	}

	

	@keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -10400px;
		}
	}

	@media only screen and (max-width: 1080px) {
		.error h1 {
			margin-top: 16px;
			font-size: 32px;
		}
		.error h2 {
			font-size: 24px;
			line-height: 32px;
		}
		.marquee {
			margin-top: 16px;
			margin-bottom: 80px;
		}
		
	}
</style>