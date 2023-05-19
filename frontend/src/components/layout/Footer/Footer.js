import { Link } from "react-router-dom";
import fbIcon from "../../../assets/images/icons/facebook-icon.png";
import igIcon from "../../../assets/images/icons/instagram-icon.png";
import twIcon from "../../../assets/images/icons/twitter-icon.png";
import Icon from "../../Icon/Icon";
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<div className={classes.footer}>
				<div className={classes.footer_left}>
					<div className={classes.footer_left_heading}>
						<h4>AUCTION</h4>
					</div>
					<div className={classes.footer_left_pagelist}>
						<ul>
							<li>
								<Link to="/about-us" className={classes.link}>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/terms-and-conditions"
									className={classes.link}
								>
									Terms and Conditions
								</Link>
							</li>
							<li>
								<Link
									to="/privacy-policy"
									className={classes.link}
								>
									Privacy and Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.footer_right}>
					<div className={classes.footer_right_heading}>
						<h4>GET IN TOUCH</h4>
					</div>
					<div className={classes.footer_right_info}>
						<h4>Call Us at +123 797-567-2535</h4>
						<h4>support@auction.com</h4>
					</div>
					<div className={classes.footer_right_socialmedia}>
						<ul>
							<li>
								<Icon
									alt="facebook"
									href="https://facebook.com"
									isExternal={true}
									size="medium"
									src={fbIcon}
								/>
							</li>
							<li>
								<Icon
									alt="instagram"
									href="https://instagram.com"
									isExternal={true}
									size="medium"
									src={igIcon}
								/>
							</li>
							<li>
								<Icon
									alt="twitter"
									href="https://twitter.com"
									isExternal={true}
									size="medium"
									src={twIcon}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
