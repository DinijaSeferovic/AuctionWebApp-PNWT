import React from "react";
import assignmentIcon from "../../../../assets/images/icons/assignment-icon.png";
import categoryIcon from "../../../../assets/images/icons/category-icon.png";
import dashboardIcon from "../../../../assets/images/icons/dashboard-icon.png";
import offerIcon from "../../../../assets/images/icons/offer-icon.png";
import paymentIcon from "../../../../assets/images/icons/payment-icon.png";
import personIcon from "../../../../assets/images/icons/person-icon.png";
import Icon from "../../../Icon/Icon";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
	return (
		<div className={classes.container}>
			<Icon src={dashboardIcon} isExternal={false} size="small" />
			<Icon src={personIcon} isExternal={false} size="small" />
			<div className={classes.active}>
				<Icon
					src={offerIcon}
					isExternal={false}
					size="small"
					href="/admin-panel"
				/>
			</div>
			<Icon src={categoryIcon} isExternal={false} size="small" />
			<Icon src={assignmentIcon} isExternal={false} size="small" />
			<Icon src={paymentIcon} isExternal={false} size="small" />
		</div>
	);
};

export default Sidebar;
