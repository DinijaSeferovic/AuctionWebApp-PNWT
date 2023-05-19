import React, { useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import Button from "../Button/Button";
import classes from "./Form.module.scss";

const Form = ({ children, submit, initialValues, submitLabel, submitSize }) => {
	const [form, setForm] = useState(initialValues);

	const handleFormChange = (event) => {
		const { name, value } = event.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<div className={classes.container}>
			<form>
				<FormContext.Provider
					value={{
						form,
						handleFormChange,
					}}
				>
					{children}
				</FormContext.Provider>
				<div className={classes.button}>
					<Button
						label={submitLabel}
						onClick={() => submit(form)}
						type="button"
						variant="primary"
						size={submitSize}
						outlined={false}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
