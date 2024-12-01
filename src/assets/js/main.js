const filter = () => {
	const body = document.body;
	const filterForm = document.querySelector('.filters');
	const filterTrigger = document.querySelector('[data-trigger="filter"]');

	if (!filterForm && !filterTrigger) return;

	const closeBtn = filterForm.querySelector('[data-destroyer]');

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

const ordersPage = () => {
	const orderNavBtns = document.querySelectorAll('.order-nav button');
	const orderTabs = document.querySelectorAll('.order-tab');

	orderNavBtns.forEach((btn, i) => {
		btn.addEventListener('click', () => {
			orderNavBtns.forEach(btn => btn.classList.remove('active'));
			btn.classList.add('active');
			orderTabs.forEach(tab => tab.classList.remove('active'));
			orderTabs[i].classList.add('active');
		});
	});
};
ordersPage();

const tabInit = () => {
	const tabs = document.querySelectorAll('.tab');

	tabs.forEach(tab => {
		const btns = tab.querySelectorAll('.tab__btn');
		const panels = tab.querySelectorAll('.tab__panel');

		btns.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btns.forEach(btn => btn.classList.remove('active'));
				btn.classList.add('active');
				panels.forEach(panel => panel.classList.remove('active'));
				panels[i].classList.add('active');
			});
		});
	});
};

tabInit();
