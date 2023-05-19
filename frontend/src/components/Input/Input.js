import classnames from "classnames";
import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import "./Input.scss";

const Input = ({
	type,
	name,
	placeholder,
	size,
	onKeyDown,
	onChange,
	label,
	inForm = true,
	error = null,
	step,
	onKeyUp,
	passwordStrength = null,
	disabled,
}) => {
	const formContext = useContext(FormContext);
	const { form, handleFormChange } = formContext;

	return (
		<div className="input_field">
			{!inForm && type === "search" && (
				<input
					type={type}
					placeholder={placeholder}
					className={`input_field_${size}`}
					onKeyDown={(event) => onKeyDown(event)}
					onChange={(event) => onChange(event)}
				/>
			)}
			{!inForm && type === "number" && (
				<input
					type={type}
					placeholder={placeholder}
					className={`input_field_${size}`}
					step={step}
					min="0"
					onChange={(event) => onChange(event)}
					disabled={disabled}
				/>
			)}

			{inForm && (
				<>
					<div className={classnames({ input_field_label: label })}>
						{label}
					</div>
					<input
						type={type}
						name={name}
						value={form[name]}
						placeholder={placeholder}
						className={classnames(
							`input_field_${size}`,
							`input_field_${size}_form`,
							{
								[`input_field_${size}_form_correct`]:
									error === "" ||
									passwordStrength === "strong",
							},
							{
								[`input_field_${size}_form_error`]:
									error !== null &&
									error !== "" &&
									passwordStrength !== "strong",
							}
						)}
						onChange={handleFormChange}
						onKeyUp={(event) =>
							onKeyUp && onKeyUp(event.target.value)
						}
					/>
					<div className="input_field_error_info_message">
						{error !== null &&
							error !== "" &&
							passwordStrength === null && (
								<div
									className={classnames(
										"input_field_error_info_message_incorrect"
									)}
								>
									{error}
								</div>
							)}
					</div>
				</>
			)}
		</div>
	);
};

export default Input;
