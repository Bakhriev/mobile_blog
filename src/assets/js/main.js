const filter = () => {
	const body = document.body;
	const filterForm = document.querySelector('.filters');
	const filterTrigger = document.querySelector('[data-trigger="filter"]');
	const closeBtn = filterForm.querySelector('[data-destroyer]');

	if (!filterForm && !filterTrigger) return;

	filterTrigger.addEventListener('click', () => {
		filterForm.classList.toggle('active');
		body.classList.toggle('scroll-lock');
		filterTrigger.classList.toggle('active');
	});

	closeBtn.addEventListener('click', () => {
		filterForm.classList.remove('active');
		body.classList.remove('scroll-lock');
		filterTrigger.classList.remove('active');
	});
};

filter();
