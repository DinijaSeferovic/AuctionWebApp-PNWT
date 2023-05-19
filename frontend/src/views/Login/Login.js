import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";
import LogoBar from "../../components/layout/LogoBar/LogoBar";
import { UserContext } from "../../contexts/UserContext";
import userService from "../../services/userService";
import validator from "../../utils/validator";
import classes from "./Login.module.scss";

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [errorMessages, setErrorMessages] = useState({
		email: null,
		password: null,
	});
	const initialValues = {
		email: "",
		password: "",
	};

	const navigate = useNavigate();

	const login = (form) => {
		userService
			.logIn(form.email, form.password)
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
				setErrorMessages({
					email: "",
					password: "",
				});
			})
			.catch((error) => {
				if (
					error.response.data &&
					error.response.data.includes("credentials")
				) {
					setErrorMessages({
						email: errorMessages.email,
						password: "Incorrect password.",
					});
				}
				const errorType = error.response.headers.errortype;
				setErrorMessages((data) => {
					let updated = { ...data };
					updated[errorType] = error.response.data;
					return updated;
				});
			});
	};

	const validate = (form) => {
		let emailResult = validator.validateEmail(form.email);
		let passwordResult = validator.validatePassword(form.password);
		if (emailResult === "" && passwordResult === "") {
			return true;
		} else {
			setErrorMessages({
				email: emailResult,
				password: passwordResult,
			});
			return false;
		}
	};

	const handleSubmit = (form) => {
		if (validate(form)) {
			login(form);
		}
	};

	return (
		<div className={classes.container}>
			<LogoBar />
			<div className={classes.container_login}>
				<div className={classes.container_login_header}>
					<div className={classes.container_login_header_text}>
						LOGIN
					</div>
				</div>
				<div className={classes.container_login_form}>
					<Form
						initialValues={initialValues}
						submitLabel="LOGIN"
						submit={handleSubmit}
						submitSize="xxlarge"
					>
						<Input
							label="Email"
							type="email"
							name="email"
							size="large"
							placeholder="user@domain.com"
							error={errorMessages.email}
						/>
						<PasswordInput
							label="Password"
							size="large"
							error={errorMessages.password}
						/>
					</Form>
				</div>
				<Link
					className={classes.container_login_forgotpassword}
					to={"/reset-password"}
				>
					Forgot password?
				</Link>
			</div>
		</div>
	);
};

export default Login;
