import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logos/logo-small.png";
import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icon/Icon";
import classes from "./NotFound.module.scss";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className={classes.notfound}>
				<div className={classes.notfound_icon}>
					<Icon alt="logo" href="/" size="large" src={logo} />
				</div>
				<h1>404</h1>
				<h3>Ooops! Looks like the page is Not Found</h3>
				<Button
					onClick={() => navigate(-1)}
					type="button"
					variant="primary"
					size="medium"
					label="GO BACK"
					outlined={true}
				/>
			</div>
		</div>
	);
};

export default NotFound;
