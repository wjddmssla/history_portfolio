/* =========================================================
   MAIN VISUAL
========================================================= */

document.addEventListener('DOMContentLoaded', function() {

	const mainVisual = document.querySelector('.main-visual');

	if (!mainVisual) return;


	/* 메인 비주얼 등장 */
	setTimeout(function() {
		mainVisual.classList.add('is-active');
	}, 100);


	/* START QUEST 버튼 */
	const questButton = mainVisual.querySelector('.quest-button');

	if (questButton) {

		questButton.addEventListener('click', function(e) {

			const target = document.querySelector(this.getAttribute('href'));

			if (target) {
				e.preventDefault();

				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}

		});

	}


	/* 별 반짝임 */
	const stars = mainVisual.querySelectorAll('.deco-star');

	stars.forEach(function(star, index) {

		star.style.animationDelay = (index * 0.7) + 's';

	});

});