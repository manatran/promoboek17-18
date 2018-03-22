<template>
	<div>
		<header class="container">
		<section class="titles">
			<h1>Alumni Grafische en Digitale Media</h1>
			<h2>2017-18</h2>
		</section>

		<promo-video url="https://player.vimeo.com/video/249935173"/>
		<down-btn/>

		
	</header>
	<main class="container students-card">
		<student-card
			v-for="student in students"
			:key="student._id"
			:identifier="student._id"
			:firstName="student.first_name"
			:name="student.name"
			:thumbnail="student.picture"
			:minor="student.specialization.name"
		/>
	</main>
	</div>
</template>

<script>
	import axios from 'axios'
	import PromoVideo from '~/components/PromoVideo.vue'
	import StudentCard from '~/components/StudentCard.vue'
	import DownBtn from '~/components/DownBtn.vue'
	
	export default {
		components: {
			PromoVideo,
			StudentCard,
			DownBtn
		},
		data() {
			return{
				students: []
			}
		},
		created(){
			const self = this
			axios.get("http://localhost:5000/api/v1/users/student")
			.then((res)=>{
				self.students = res.data
			})
		}
	}
</script>

<style>
	header,
	main {
		flex-direction: column;
	}

	header {
		min-height: 90vh;
	}


	h1 {
		font-family: "Montserrat Black";
		font-size: 48px;
		color: white;
		margin: 0;
	}

	h2 {
		margin: 0;
		font-family: "Montserrat Light";
		font-size: 32px;
	}
	@media only screen and (max-width: 1080px) {
		.titles h1 {
			font-size: 32px;
		}
		.titles h2 {
			font-size: 24px;
			margin-bottom: 32px;
		}
	}
</style>
