import React from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";

const RegistrationForm = ({
	initialValues,
	handleSubmit,
	errorMessages,
	checkPasswordStrength,
	passwordStrength,
}) => {
	return (
		<div>
			<Form
				initialValues={initialValues}
				submitLabel="REGISTER"
				submit={handleSubmit}
				submitSize="xxlarge"
			>
				<Input
					label="First Name"
					type="text"
					name="firstName"
					size="large"
					placeholder="John"
					error={errorMessages.firstName}
				/>
				<Input
					label="Last Name"
					type="text"
					name="lastName"
					size="large"
					placeholder="Doe"
					error={errorMessages.lastName}
				/>
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
					onKeyUp={checkPasswordStrength}
					passwordStrength={passwordStrength}
				/>
			</Form>
		</div>
	);
};

export default RegistrationForm;
