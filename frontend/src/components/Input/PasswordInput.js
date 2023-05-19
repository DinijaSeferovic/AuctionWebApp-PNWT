import classnames from "classnames";
import React, { useContext, useState } from "react";
import crossEyeIcon from "../../assets/images/icons/crossed-eye-icon.png";
import eyeIcon from "../../assets/images/icons/eye-icon.png";
import infoIcon from "../../assets/images/icons/info-icon.png";
import { FormContext } from "../../contexts/FormContext";
import Icon from "../Icon/Icon";
import Tooltip from "../Tooltip/Tooltip";
import Input from "./Input";
import "./Input.scss";

const PasswordInput = ({
	size,
	label,
	error,
	onKeyUp,
	passwordStrength = "",
}) => {
	const formContext = useContext(FormContext);
	const { form, handleFormChange } = formContext;
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="input_field">
			<div className="input_field_wrapper">
				<Input
					label={label}
					type={showPassword ? "text" : "password"}
					name="password"
					value={form["password"]}
					size={size}
					placeholder="********"
					error={error}
					passwordStrength={passwordStrength}
					onChange={handleFormChange}
					onKeyUp={onKeyUp}
				/>
				{form.password !== "" && (
					<div
						className="input_field_wrapper_icon"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<Icon src={crossEyeIcon} />
						) : (
							<Icon src={eyeIcon} />
						)}
					</div>
				)}
			</div>
			<div className="input_field_error">
				<div className="input_field_error_info">
					{error !== null && error !== "" && (
						<div
							className={classnames(
								"input_field_error_info_message",
								{
									[`input_field_error_info_message_incorrect`]:
										passwordStrength === "",
								},
								{
									[`input_field_error_info_message_correct`]:
										passwordStrength === "strong",
								},
								{
									[`input_field_error_info_message_strength`]:
										passwordStrength !== "" &&
										passwordStrength !== "strong",
								}
							)}
						>
							{error}
						</div>
					)}
					{passwordStrength && passwordStrength !== "strong" && (
						<div className="input_field_error_info_tooltip">
							<Tooltip
								content={
									<>
										<ul>
											<li>
												Password you provided must have
												at least 8 characters.
											</li>
											<li>
												Use upper and lower case
												character
											</li>
											<li>1 or more numbers</li>
											<li>Use special characters</li>
										</ul>
									</>
								}
							>
								<Icon src={infoIcon} />
							</Tooltip>
						</div>
					)}
				</div>
				<div
					className={classnames({
						[`input_field_error_strength`]: passwordStrength,
					})}
				>
					<div
						className={classnames({
							[`${passwordStrength}`]: passwordStrength,
						})}
					></div>
				</div>
			</div>
		</div>
	);
};

export default PasswordInput;
