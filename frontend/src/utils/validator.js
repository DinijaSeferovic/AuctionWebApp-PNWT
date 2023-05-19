const validateEmail = (email) => {
	let errorMessage = "";
	if (!email) {
		errorMessage = "Please enter your email address.";
	} else {
		const expression = new RegExp(
			"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})"
		);
		if (!expression.test(email.toLowerCase())) {
			errorMessage = "Please enter a valid email address.";
		}
	}
	return errorMessage;
};

const validateName = (name, part) => {
	let errorMessage = "";
	if (!name) {
		errorMessage = `Please enter your ${part} name.`;
	} else {
		const expression = new RegExp("^[a-zA-Z '\\D-]+$");
		if (!expression.test(name)) {
			errorMessage = `Please enter your ${part} name correctly.`;
		}
	}
	return errorMessage;
};

const checkPasswordStrength = (password) => {
	let result = "";

	const strongExpression = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
	);
	const mediumExpression = new RegExp(
		"((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
	);
	if (strongExpression.test(password)) {
		result = "Your password is strong.";
	} else if (mediumExpression.test(password)) {
		result = "Your password is medium strength.";
	} else {
		result = "Your password is weak.";
	}

	return result;
};

const validatePassword = (password) => {
	let message = "";
	if (!password) {
		message = "Please enter your password.";
	}
	return message;
};

const validateAddress = (address) => {
	var errorMessage = "";
	if (!address) {
		errorMessage = "Please enter your address";
	}
	return errorMessage;
};

const validateCity = (city) => {
	var errorMessage = "";
	if (!city) {
		errorMessage = "Please enter your city";
	} else {
		const expression = new RegExp("^[A-Z][a-zA-Z ]+$");
		if (!expression.test(city)) {
			errorMessage = "Please enter your city correctly";
		}
	}
	return errorMessage;
};

const validateCountry = (country) => {
	var errorMessage = "";
	if (!country) {
		errorMessage = "Please enter your country";
	} else {
		const expression = new RegExp("^[A-Z][a-zA-Z ]+$");
		if (!expression.test(country)) {
			errorMessage = "Please enter your country correctly";
		}
	}
	return errorMessage;
};

const validateZipCode = (zipCode) => {
	var errorMessage = "";
	const zipCodeExpression = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
	if (!zipCode) {
		errorMessage = "Please enter your zip code";
	} else if (!zipCodeExpression.test(zipCode)) {
		errorMessage = "Please enter valid zip code";
	}
	return errorMessage;
};

export default {
	validateEmail,
	validateName,
	validatePassword,
	checkPasswordStrength,
	validateAddress,
	validateCity,
	validateCountry,
	validateZipCode,
};
