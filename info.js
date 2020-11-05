'use strict';

const infoButton = document.getElementById('infoBtn');
const infoDiv = document.getElementById('infoPopover');

infoButton.addEventListener('click', () => {
	if (!infoDiv.style.visibility || infoDiv.style.visibility == 'hidden') {
		infoDiv.style.visibility = 'visible';
		infoButton.classList.add('active');
	} else if (infoDiv.style.visibility == 'visible') {
		infoDiv.style.visibility = 'hidden';
		infoButton.classList.remove('active');
	}
});
