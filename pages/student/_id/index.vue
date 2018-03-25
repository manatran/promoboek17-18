<template>
	<div>
		<main class="container detail">
			<section class="info">
				<h1>{{student.first_name}} {{student.name}}</h1>
				<h2>
					<span class="minor">{{ student.specialization.name }}</span>
					<span class="major">{{ student.specialization.option.name }}</span>
				</h2>
			</section>
			<figure class="picture">
				<picture v-if="student.picture">
					<source media="(min-width: 1920px)" :srcset="student.picture.original">
					<source media="(min-width: 1280px)" :srcset="student.picture.lg">
					<source media="(min-width: 768px)" :srcset="student.picture.md">
					<source media="(min-width: 480px)" :srcset="student.picture.sm">
					<source media="(min-width: 200px)" :srcset="student.picture.thumb">
					<img :src="student.picture.thumb" :alt="student.firstName + '\'s Picture'">
				</picture>
				<img v-else src="/assets/placeholder.jpg" alt="This student does not have a picture">
				<figcaption v-if="student.quote">{{student.quote}}</figcaption>
			</figure>
			<section class="details">
				<section class="description">
					<h3>Hey, mijn naam is {{student.first_name}}!</h3>
					<p>Ik studeerde {{ student.specialization.name }} aan de Arteveldehogeschool in Gent.
						<br><span v-if="student.city">Zelf woon ik in {{student.city}}.</span></p>
					<p v-if="student.preferred_regions.length !== 0">Na mijn studies zou ik graag tewerkgesteld worden in
					<ul class="regions">
						<span v-for="(city, index) in student.preferred_regions" :key="index">
							<span v-if="index + 1 == student.preferred_regions.length && index != 0">&nbsp;of&nbsp;</span>
							<span>{{city}}</span>
							<span v-if="index + 2 < student.preferred_regions.length">,&nbsp;</span>
							<span v-else-if="index + 1 == student.preferred_regions.length">.</span>
						</span>
					</ul>	
					</p>
					<p v-if="student.personal_email">Als u voor een bedrijf werkt dat iemand met mijn profiel kan gebruiken,
						<br>stuur dan zeker een mail naar
						<a class="link" :href="'mailto:' + student.personal_email +'?subject=Promoboek 2017-18&body=Beste ' + student.first_name + ', ik zag jouw profiel op de website van het Promoboek van je studierichting en besloot je een mail te sturen.'">{{student.personal_email}}</a>
					</p>
				</section>
				<section class="links">
					<div class="students">
						<a class="link" href="/"><i><img src="/assets/icons/back.svg" alt="Back"></i>Bekijk mijn medestudenten</a>
					</div>
					<div class="social">
						<p class="light">Promoot deze student op social media</p>
						<section class="icons">
							<a :href="'https://www.facebook.com/sharer/sharer.php?u=' + currURL" target="_blank">
								<img src="/assets/icons/facebook.png" alt="Facebook">
							</a>
							<a :href="'https://twitter.com/share?url=' + currURL + '&text=Dit+is+'+student.first_name+'&via=ArteveldehsGent&hashtags=GDM,' + student.specialization.option.abbreviation" target="_blank">
								<img src="/assets/icons/twitter.png" alt="Twitter">
							</a>
							<a :href="'https://linkedin.com/shareArticle?url=' + currURL +'&title=Dit+is+' + student.first_name" target="_blank">
								<img src="/assets/icons/linkedin.png" alt="LinkedIn">
							</a>
						</section>
					</div>
				</section>
			</section>
		</main>
	</div>
</template>

<script>
	import axios from 'axios'
	import PreferredRegion from '~/components/PreferredRegion.vue'

	export default {
		components: {
			PreferredRegion
		},
		data() {
			return{
				currURL:'',
				student: {
					preferred_regions: [],
					specialization: {
						name: "",
						option: {
							name: ""
						}
					}
				}
			}
		},
		created(){
			if(typeof window !== "undefined"){
				this.currURL = window.location.href;
				if(this.$route.params.id == "" || this.$route.params.id == undefined){
					window.location.replace('/error')
				}
			}
			
			const self = this
			axios.get("http://192.168.0.228:5000/api/v1/user/" + this.$route.params.id)
			.then((res)=>{
				self.student = res.data
			})
			.catch((error)=>{
				window.location.replace("/error")
			})
		}
	}
</script>

<style scoped>
	.detail {
		flex-wrap: wrap;
		flex-direction: row;
	}

	figure.picture {
		position: relative;
		top: -128px;
		display: flex;
		flex-direction: column;
		width: 320px;
		margin: 0;
	}

	.picture img {
		width: 100%;
		height: auto;
	}

	.picture figcaption {
		font-size: 14px;
		font-weight: 200;
		font-style: italic;
		text-align: center;
		padding: 16px;
		line-height:24px;
	}

	.picture figcaption::before,
	.picture figcaption::after {
		content: "“";
		font-size: 24px;
		opacity: 0.5;
	}

	.picture figcaption::after {
		content: "”";
	}

	.details {
		margin-left: -24px;
	}

	.info {
		padding-left: 360px;
		width: 100%;
		box-sizing: border-box;
		flex: 0 0 auto;
	}

	.info h1 {
		margin:0;
		font-family: "Montserrat Black";
		font-size: 48px;
	}

	.info h2 {
		font-size: 24px;
		margin:0;
		margin-bottom: 90px;
	}

	.info .minor {
		font-family: "Montserrat";
		font-weight: 500;
	}

	.info .major {
		font-family: "Montserrat Thin";
		font-weight: lighter;
		font-size: 20px;
		padding-left: 16px;
	}

	.details {
		padding-left: 64px;
	}

	.description {
		margin-left: 32px;
		padding: 16px 32px;
		max-width: 90%;
		border-top: 10px solid #CA4753;
		border-bottom: 10px solid #303880;
		background-image: linear-gradient(#CA4753, #303880), linear-gradient(#CA4753, #303880);
		background-size: 10px 100%;
		background-position: 0 0, 100% 0;
		background-repeat: no-repeat;
	}

	.description h3 {
		margin: 0;
		font-family: "Montserrat";
		font-weight: 500;
		font-size: 24px;
	}

	.description p {
		font-family: "Montserrat Light";
		font-weight: 300;
		line-height: 24px;
	}

	.students .link {
		color: #CA4853;
	}

	.students .link:hover {
		color: white;
	}

	.link {
		text-decoration: none;
		color: #CA4853;
	}

	.links {
		padding-top: 32px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 32px;
	}

	.links .light {
		margin-top: 0;
	}

	.icons {
		display:flex;
		flex-direction:row;
		justify-content:flex-end;
	}
	.light {
		opacity: 0.75;
		font-size: 12px;
	}

	.links a {
		color: white;
		text-decoration: none;
		display:flex;
		flex-direction:row;
	}
	.links a i img{
		height:16px;
	}

	.links img {
		height: 32px;
		padding-left: 16px;
	}

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
	.down a:hover {
		background: linear-gradient(to right, #CA4753, #303880);
		color: white;
		font-weight: 500;
		border-color: #303880;
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

	.down a {
		padding: 8px;
		height: 24px;
		width: 24px;
		border: none;
	}

	.regions{
		list-style-type:none;
		padding:0;
		margin:0;
		display:flex;
		flex-direction:row;
	}


	@media only screen and (max-width: 1080px) {
	.detail {
		flex-direction: column;
	}
	.info {
		padding: 0;
	}
	.info h2 {
		margin-bottom: 16px;
	}
	.info .minor {
		display: inline-block;
		width: 100%;
	}
	.info .major {
		padding: 0;
	}
	figure.picture {
		margin: 0;
		position: static;
		margin: 0 auto;
	}
	.description {
		margin: 0;
	}
	.links {
		margin: 0;
	}
	.details {
		margin: 0;
		padding: 0;
	}
}

@media only screen and (max-width: 768px) {
	figure.picture {
		width: 100%;
	}
}
</style>
