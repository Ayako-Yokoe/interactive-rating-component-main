let rating = null;
let selectedBtn = null;

const buttons = document.querySelectorAll(".rating-btn");
const form = document.getElementById("rating-form");
const ratingSection = document.getElementById("rating-section");
const thankYouSection = document.getElementById("thank-you-section");
const selectedRate = document.getElementById("selected-rate");

buttons.forEach(button => {
	button.addEventListener("click", () => {

		if (selectedBtn) {
			selectedBtn.classList.remove("focus");
		}

		selectedBtn = button;
		button.classList.add("focus");

		rating = button.innerText;
	})
})

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!rating) return;

	selectedRate.innerText = rating;

	ratingSection.classList.add("hidden");
	thankYouSection.classList.remove("hidden");
})
