import classnames from "classnames";
import Icon from "../Icon/Icon";
import "./Button.scss";

const Button = ({
	label,
	onClick,
	type = "button",
	variant = "primary",
	size = "small",
	outlined = true,
	iconSrc,
	disabled = false,
}) => {
	return (
		<button
			className={classnames(
				"btn",
				`btn_${variant}`,
				{ [`btn_${variant}_outline`]: outlined },
				{ [`btn_disabled`]: disabled },
				`btn_${size}`
			)}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			<div className={classnames("btn_content")}>
				{label}
				{iconSrc && (
					<div className={classnames("btn_content_icon")}>
						<Icon src={iconSrc} size="xsmall" />
					</div>
				)}
			</div>
		</button>
	);
};

export default Button;
