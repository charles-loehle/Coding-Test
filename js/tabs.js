const button1 = document.querySelector('.climbTabs__button1');
const button2 = document.querySelector('.climbTabs__button2');
const climbSchedule = document.querySelector('.climb-schedule');

button1.addEventListener('click', toggleActiveClass);
button2.addEventListener('click', toggleActiveClass);

function toggleActiveClass(e) {
	if (button1.classList.contains('active')) {
		button1.classList.remove('active');
		button2.classList.add('active');
		climbSchedule.style.backgroundImage =
			'url("./images/climb/Tab-1-mountain.webp")';
	} else {
		button1.classList.add('active');
		button2.classList.remove('active');
		climbSchedule.style.backgroundImage =
			'url("./images/climb/Tab-2-mountain-with-blue-sky.webp")';
	}
}
