import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-small.png";
import { UserContext } from "../../../../contexts/UserContext";
import Icon from "../../../Icon/Icon";
import classes from "./MainNavBar.module.scss";
import Search from "./Search/Search";

const MainNavBar = ({ hasSearch = true }) => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div className={classes.mainnavbar}>
			<div className={classes.mainnavbar_logo}>
				<Icon alt="logo" href="/" size="large" src={logo} />
			</div>
			<div className={classes.mainnavbar_searchbar}>
				{hasSearch && <Search />}
			</div>
			<div className={classes.mainnavbar_navbar}>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? `${classes.navlink_active}`
										: `${classes.navlink}`
								}
							>
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/shop"
								className={({ isActive }) =>
									isActive
										? `${classes.navlink_active}`
										: `${classes.navlink}`
								}
							>
								SHOP
							</NavLink>
						</li>
						{user && user.roles.includes("admin") && (
							<li>
								<NavLink
									to="/admin-panel"
									className={({ isActive }) =>
										isActive
											? `${classes.navlink_active}`
											: `${classes.navlink}`
									}
								>
									ADMIN
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MainNavBar;
