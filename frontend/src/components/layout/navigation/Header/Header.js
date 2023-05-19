import { useContext } from "react";
import { Link } from "react-router-dom";
import fbIcon from "../../../../assets/images/icons/facebook-icon.png";
import igIcon from "../../../../assets/images/icons/instagram-icon.png";
import twIcon from "../../../../assets/images/icons/twitter-icon.png";
import { UserContext } from "../../../../contexts/UserContext";
import Icon from "../../../Icon/Icon";
import classes from "./Header.module.scss";

const Header = () => {
	const { user, setUser } = useContext(UserContext);

	const logOut = () => {
		setUser(null);
		localStorage.removeItem("token");
		localStorage.setItem("isLoggedIn", "false");
	};

	return (
		<div className={classes.header}>
			<div className={classes.header_socialmedia}>
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
			<div className={classes.header_righttext}>
				{user ? (
					<Link
						to={"/"}
						className={classes.header_righttext_login}
						onClick={() => logOut()}
					>
						Logout
					</Link>
				) : (
					<>
						<Link
							to={"/login"}
							className={classes.header_righttext_login}
						>
							Login
						</Link>
						or
						<Link
							to={"/registration"}
							className={classes.header_righttext_registration}
						>
							Create an account
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
