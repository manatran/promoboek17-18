const scrollBtn = document.getElementById('scrollBtn');
const searchBtn = document.getElementById('searchBtn');
const screenHeight = window.innerHeight;

if(scrollBtn || searchBtn){
	scrollBtn.addEventListener('click', (e) => {
		e.preventDefault();
		window.scroll({top: (screenHeight - 64), left: 0, behavior: 'smooth' });
	})
	searchBtn.addEventListener('click', (e) => {
		e.preventDefault();
		window.scroll({top: (screenHeight - 64), left: 0, behavior: 'smooth' });
	})
}

