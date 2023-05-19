import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";
import LogoBar from "../../components/layout/LogoBar/LogoBar";
import userService from "../../services/userService";
import validator from "../../utils/validator";
import classes from "./ChangePassword.module.scss";

const ChangePassword = () => {
	const [errorMessages, setErrorMessages] = useState({
		password: null,
		repeatPassword: null,
	});
	const [passwordStrength, setPasswordStrength] = useState("");
	const [passwordInfo, setPasswordInfo] = useState("");
	const initialValues = {
		password: "",
		repeatPassword: null,
	};
	const navigator = useNavigate();
	const [search, setSearch] = useSearchParams();
	const token = search.has("token") && search.get("token");
	const tokenInfo = JSON.parse(atob(token.split(".")[1]));
	const linkExpired = tokenInfo.exp * 1000 < Date.now();

	const checkPasswordStrength = (password) => {
		let error = "";
		if (password === "") {
			error = validator.validatePassword(password);
			setPasswordStrength("");
			setErrorMessages({
				password: error,
				repeatPassword: null,
			});
			return false;
		} else {
			error = validator.checkPasswordStrength(password);
			if (error.includes("strong")) setPasswordStrength("strong");
			if (error.includes("medium")) setPasswordStrength("medium");
			if (error.includes("weak")) setPasswordStrength("weak");
		}
		setErrorMessages({
			password: error,
		});
		return true;
	};

	const checkRepeatPassword = (form) => {
		if (form.password === form.repeatPassword) {
			setErrorMessages({
				password: errorMessages.password,
				repeatPassword: "",
			});
			return true;
		} else {
			setErrorMessages({
				password: errorMessages.password,
				repeatPassword: "Please enter matching passwords",
			});
			return false;
		}
	};

	const changePassword = (form) => {
		userService
			.changePassword(tokenInfo.sub, form.password)
			.then((response) => {
				setPasswordInfo("Password successfully changed. You can now ");
				setErrorMessages({
					password: errorMessages.password,
					repeatPassword: "",
				});
			})
			.catch((error) => {
				if (error.response.data) {
					setErrorMessages({
						password: error.response.data,
						repeatPassword: errorMessages.repeatPassword,
					});
				}
			});
	};

	function sendResetEmail() {
		userService.sendResetEmail(tokenInfo.sub).then(() => {
			setPasswordInfo("Email has been resent. Check your inbox.");
		});
	}

	const handleSubmit = (form) => {
		if (checkPasswordStrength(form.password) && checkRepeatPassword(form)) {
			changePassword(form);
		}
	};

	return (
		<div className={classes.container}>
			<LogoBar />
			<div className={classes.container_reset}>
				<div className={classes.container_reset_header}>
					<div className={classes.container_reset_header_text}>
						CHANGE PASSWORD
					</div>
				</div>
				{linkExpired ? (
					<div className={classes.container_reset_expired}>
						<div className={classes.container_reset_expired_info}>
							Your link has expired. Click below if you want your
							reset link resent.
						</div>
						<div
							className={classes.container_reset_expired_buttons}
						>
							<Button
								label="RESEND LINK"
								variant="primary"
								outlined={false}
								size="xlarge"
								onClick={() => {
									sendResetEmail();
								}}
							/>
							<Button
								label="GO TO HOMEPAGE"
								variant="primary"
								outlined={false}
								size="xlarge"
								onClick={() => {
									navigator("/");
								}}
							/>
						</div>
					</div>
				) : (
					<div className={classes.container_reset_form}>
						<Form
							initialValues={initialValues}
							submitLabel="CHANGE PASSWORD"
							submit={handleSubmit}
							submitSize="xxlarge"
						>
							<PasswordInput
								label="New Password"
								size="large"
								error={errorMessages.password}
								onKeyUp={checkPasswordStrength}
								passwordStrength={passwordStrength}
							/>
							<Input
								label="Repeat Password"
								type="password"
								name="repeatPassword"
								size="large"
								placeholder=""
								error={errorMessages.repeatPassword}
							/>
						</Form>
					</div>
				)}
				<div className={classes.container_reset_info}>
					{passwordInfo}
					{!linkExpired && passwordInfo && (
						<Link
							to={"/login"}
							className={classes.container_reset_info_link}
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
