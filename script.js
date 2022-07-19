const emailInput = document.querySelector(".emailCheck");
const errorP = document.querySelector(".error");
const form = document.querySelector("form");
const btn = document.querySelector(".button");
form.addEventListener("submit", checkEmail);

function checkEmail(e) {
	let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
	if (emailInput.value.match(regex)) {
		return true;
	} else {
		emailInput.classList.add("valid");
		emailInput.placeholder = "email@example/com";
		errorP.innerText = "Please provide a valid email";
		e.preventDefault();
	}

	if (emailInput.value === "" || emailInput == null) {
		btn.classList.add("validbtn");
		errorP.innerText = "Email cannot be empty";
		e.preventDefault();
	}

	if (emailInput.value && emailInput.value.match(regex)) {
		e.target.submit();
	}
}
