import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoBar from "../../components/layout/LogoBar/LogoBar";
import { UserContext } from "../../contexts/UserContext";
import userService from "../../services/userService";
import validator from "../../utils/validator";
import classes from "./Registration.module.scss";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
	const { user, setUser } = useContext(UserContext);
	const [passwordStrength, setPasswordStrength] = useState("");
	const [errorMessages, setErrorMessages] = useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
	});
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	const navigate = useNavigate();

	const register = (form) => {
		userService
			.register(form.firstName, form.lastName, form.email, form.password)
			.then((response) => {
				if (response.token) {
					setUser(response);
					localStorage.setItem(
						"token",
						JSON.stringify(response.token)
					);
					localStorage.setItem("isLoggedIn", "true");
					navigate("/");
				}
			})
			.catch((error) => {
				const errorType = error.response.headers.errortype;
				setErrorMessages((data) => {
					let updated = { ...data };
					updated[errorType] = error.response.data;
					return updated;
				});
			});
	};

	const checkPasswordStrength = (password) => {
		let error = "";
		if (password === "") {
			error = validator.validatePassword(password);
			setPasswordStrength("");
		} else {
			error = validator.checkPasswordStrength(password);
			if (error.includes("strong")) setPasswordStrength("strong");
			if (error.includes("medium")) setPasswordStrength("medium");
			if (error.includes("weak")) setPasswordStrength("weak");
		}
		setErrorMessages({
			firstName: errorMessages.firstName,
			lastName: errorMessages.lastName,
			email: errorMessages.email,
			password: error,
		});
	};

	const validate = (form) => {
		let validationResult = {
			email: validator.validateEmail(form.email),
			password: validator.validatePassword(form.password),
			firstName: validator.validateName(form.firstName, "first"),
			lastName: validator.validateName(form.lastName, "last"),
			passwordStrength: validator.checkPasswordStrength(form.password),
		};

		setErrorMessages({
			firstName: validationResult.firstName,
			lastName: validationResult.lastName,
			email: validationResult.email,
			password: validationResult.password
				? validationResult.password
				: validationResult.passwordStrength,
		});
		if (
			Object.values(validationResult)
				.slice(0, -1)
				.every((x) => x === "")
		)
			return true;
		else {
			return false;
		}
	};

	const handleSubmit = (form) => {
		if (validate(form)) {
			register(form);
		}
	};

	return (
		<div className={classes.container}>
			<LogoBar />
			<div className={classes.container_registration}>
				<div className={classes.container_registration_header}>
					<div className={classes.container_registration_header_text}>
						REGISTER
					</div>
				</div>
				<div className={classes.container_registration_form}>
					<RegistrationForm
						initialValues={initialValues}
						errorMessages={errorMessages}
						handleSubmit={handleSubmit}
						checkPasswordStrength={checkPasswordStrength}
						passwordStrength={passwordStrength}
					/>
				</div>
				<div className={classes.container_registration_login}>
					Already have an account?
					<Link
						to={"/login"}
						className={classes.container_registration_login_link}
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Registration;
