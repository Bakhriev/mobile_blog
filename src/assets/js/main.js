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

// Upload file
document.addEventListener('DOMContentLoaded', () => {
	const inputFile = document.querySelector('.input-file');
	const previewContainer = document.querySelector('.preview-container');

	inputFile.addEventListener('change', event => {
		const files = Array.from(event.target.files);

		files.forEach(file => {
			if (!file.type.startsWith('image/')) return;

			const reader = new FileReader();
			reader.onload = () => {
				const previewElement = document.createElement('div');
				previewElement.classList.add('image-preview');

				previewElement.innerHTML = `
					<img src="${reader.result}" alt="Uploaded Image">
					<button class="remove-btn">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
	<path fill="#fff" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12" />
	<path fill="#fff" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
</svg>
					</button>
				`;

				previewContainer.appendChild(previewElement);

				const removeBtn = previewElement.querySelector('.remove-btn');
				removeBtn.addEventListener('click', () => {
					previewContainer.removeChild(previewElement);
				});
			};
			reader.readAsDataURL(file);
		});

		// Reset the input to allow uploading the same file again
		inputFile.value = '';
	});
});

const stepFormInit = () => {
	const stepForm = document.querySelector('.step-form');
	const stepFormNextBtn = stepForm.querySelector('.step-form__next-btn');
	const stepFormSubmitBtn = stepForm.querySelector('.step-form__submit-btn');
	const stepFormSteps = stepForm.querySelectorAll('.step-form__step');
	const stepsLength = stepFormSteps.length;

	let activeStep = 0;

	const toggleSteps = i => {
		console.log(stepFormSteps);

		stepFormSteps.forEach(step => step.classList.remove('active'));
		stepFormSteps[i].classList.add('active');
	};

	stepForm.addEventListener('submit', e => {
		e.preventDefault();
	});

	toggleSteps(activeStep);

	stepFormNextBtn.addEventListener('click', () => {
		if (activeStep === stepsLength - 2) {
			stepFormNextBtn.classList.add('hidden');
			stepFormSubmitBtn.classList.add('active');
		}

		activeStep++;

		toggleSteps(activeStep);
	});
};

stepFormInit();
