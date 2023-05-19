import React from "react";
import "./Notification.scss";

const Notification = ({ type, text }) => {
	return (
		<div className={`notif_${type}`}>
			<div className={`notif_${type}_text`}>{text}</div>
		</div>
	);
};

export default Notification;
