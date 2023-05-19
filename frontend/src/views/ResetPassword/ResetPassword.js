import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import LogoBar from "../../components/layout/LogoBar/LogoBar";
import userService from "../../services/userService";
import validator from "../../utils/validator";
import classes from "./ResetPassword.module.scss";

const ResetPassword = () => {
	const [errorMessages, setErrorMessages] = useState({
		email: null,
	});
	const [emailInfo, setEmailInfo] = useState("");
	const initialValues = {
		email: "",
	};

	const resetPassword = (form) => {
		userService
			.sendResetEmail(form.email)
			.then((response) => {
				setEmailInfo("Email sent. Check your inbox please.");
				setErrorMessages({
					email: "",
				});
			})
			.catch((error) => {
				if (error.response.data) {
					setErrorMessages({
						email: error.response.data,
					});
				}
			});
	};

	const handleSubmit = (form) => {
		let emailResult = validator.validateEmail(form.email);
		if (emailResult === "") {
			resetPassword(form);
		} else {
			setErrorMessages({
				email: emailResult,
			});
		}
	};

	return (
		<div className={classes.container}>
			<LogoBar />
			<div className={classes.container_reset}>
				<div className={classes.container_reset_header}>
					<div className={classes.container_reset_header_text}>
						FORGOT PASSWORD
					</div>
				</div>
				<div className={classes.container_reset_text}>
					Lost your password? Please enter your username or email
					address. You will receive a link to create a new password
					via email.
				</div>
				<div className={classes.container_reset_form}>
					<Form
						initialValues={initialValues}
						submitLabel="RESET PASSWORD"
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
					</Form>
				</div>
				<div className={classes.container_reset_info}>{emailInfo}</div>
			</div>
		</div>
	);
};

export default ResetPassword;
