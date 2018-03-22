const scrollBtn = document.getElementById('scrollBtn');
const screenHeight = window.innerHeight;

if(scrollBtn){
	scrollBtn.addEventListener('click', (e) => {
		e.preventDefault();
		window.scroll({top: (screenHeight - 64), left: 0, behavior: 'smooth' });
	})
}

