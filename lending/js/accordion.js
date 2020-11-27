		const accordion = document.getElementById('accordion');
		const items = Array.from(accordion.querySelectorAll('li'));

		items.forEach( item => {
		const question = item.querySelector('.question');
		console.log(question.offsetHeight);
		item.style.height = question.offsetHeight+'px';
		})

		accordion.addEventListener('click', openIt);

		function openIt(e) {
			const item = e.target; // get target clicked
			const thisLI = item.closest('li'); // get the li clicked as this is what we want to trigger
			const index = thisLI.dataset.index

			const otherElements = items.filter(el => el.dataset.index !== index).forEach(el => {
				el.style.height = el.querySelector('.question').offsetHeight + 'px'
				el.classList.remove('open')
			})

			const questionHeight = thisLI.querySelector('.question').offsetHeight;
			const answerHeight = thisLI.querySelector('.answer').offsetHeight;
			
			if( !thisLI.classList.contains('open') ) {
				thisLI.style.height = questionHeight + answerHeight + 'px';
				thisLI.classList.add('open'); 
			} else {
				thisLI.style.height = questionHeight + 'px';
				thisLI.classList.remove('open');
			}
		}   