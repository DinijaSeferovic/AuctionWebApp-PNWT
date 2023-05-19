import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = ({ delay, children, content }) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, delay || 200);
	};

	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<div
			className={"tooltip_wrapper"}
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{children}
			{active && <div className={`tooltip_top`}>{content}</div>}
		</div>
	);
};

export default Tooltip;
