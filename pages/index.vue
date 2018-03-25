<template>
	<div>
		<header class="container">
		<section class="titles">
			<h1>Alumni Grafische en Digitale Media</h1>
			<h2>2017-18</h2>
		</section>

		<promo-video url="https://player.vimeo.com/video/249935173?title=0&byline=0&portrait=0"/>
		<down-btn/>

	</header>
	<main class="container students-card">
		<section class="filters">
			<div class="search-container">
				<i><img src="/assets/icons/search.png" alt="search" /></i>
				<input type="text" v-model="search" placeholder="Zoek een student..." id="searchBtn">
			</div>
			<div class="specializations">
				<label>
					<input name="specialization" value="GD" type="checkbox" v-model="specializations"/>
					<span>Graphic Design</span>
				</label>
				<label>
					<input name="specialization" value="PD" type="checkbox" v-model="specializations"/>
					<span>Photo Design</span>
				</label>
				<label>
					<input name="specialization" value="CM" type="checkbox" v-model="specializations"/>
					<span>Crossmedia</span>
				</label>
				<label>
					<input name="specialization" value="PM" type="checkbox" v-model="specializations"/>
					<span>Printmedia</span>
				</label>
				<label>
					<input name="specialization" value="NMD" type="checkbox" v-model="specializations"/>
					<span>New Media Development</span>
				</label>
				<label>
					<input name="specialization" value="AVD" type="checkbox" v-model="specializations"/>
					<span>Audiovisual Design</span>
				</label>
			</div>
		</section>
		<student-card
			v-for="student in filteredItems"
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
				specializations:[],
				search:'',
				students: [],
			}
		},
		created(){
			const self = this
			axios.get("http://gdm-gent-api.herokuapp.com/api/v1/users/student")
			.then((res)=>{
				self.students = res.data
			})
		},
		computed: {
			filteredItems() {
				return this.students.filter(student => {
					let fullName = student.first_name.toLowerCase() + ' ' + student.name.toLowerCase()

					if(this.specializations.length > 0){
						return (this.specializations.includes(student.specialization.abbreviation) && (student.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							student.first_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							student.specialization.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							fullName.indexOf(this.search.toLowerCase()) > -1))
					}else{
						return student.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							student.first_name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							student.specialization.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
							fullName.indexOf(this.search.toLowerCase()) > -1
					}
					
				})
			}
		}
	}
</script>

<style scoped>
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
	.students-cards{
		min-height:150px;
	}
	.filters{
		width:100%;
		display:flex;
		flex-direction:row;
		align-items:center;
		flex-wrap:wrap;
	}
	.search-container{
		width:100%;
		margin:0 auto 32px auto;
		display:flex;
		flex-align:center;
		justify-content:center;
	}
	.specializations{
		text-align:center;
		width:100%;
		padding-bottom:16px;
		margin-bottom:32px;
		display:flex;
		flex-direction:row;
		justify-content:space-around;
		flex-wrap:wrap;
		border-bottom:solid 1px rgba(255,255,255,0.5);
	}
	.specializations label{
		user-select:none;
	}
	.specializations input[type="checkbox"]{
		display:none;
	}
	.specializations span{
		display:inline-block;
		font-weight:bold;
		padding:10px;
		cursor:pointer;
		border-bottom:solid 1px transparent;
		transition:0.2s;
	}
	.specializations span:hover{
		border-bottom-color:rgba(202, 72, 83, 0.5);
	}
	.specializations :checked + span{
		border-bottom-color:#CA4853;
	}
	.search-container img{
		height:16px;
		padding:8px;
		margin-right:-12px;
		transition:0.5s;
	}
	.search-container input{
		width:0;
		background-color:transparent;
		border:none;
		color:white;
		border-bottom:solid 1px transparent;
		transition:0.5s;
	}

	.search-container:hover input, .search-container input:active, .search-container input:focus{
		width:200px;
		padding:10px;
		outline:none;
		border-bottom-color:#CA4753;
		margin-left:16px;
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
