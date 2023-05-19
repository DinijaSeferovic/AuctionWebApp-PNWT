import React from "react";
import logo from "../../../assets/images/logos/logo-small.png";
import Icon from "../../Icon/Icon";
import classes from "./LogoBar.module.scss";

const LogoBar = () => {
	return (
		<div className={classes.logobar}>
			<div className={classes.logobar_logo}>
				<Icon alt="logo" href="/" size="large" src={logo} />
			</div>
		</div>
	);
};

export default LogoBar;
