import React, { useContext } from "react";
import arrowIcon from "../../../assets/images/icons/greater-than-icon.png";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Tooltip from "../../Tooltip/Tooltip";
import classes from "./ProductInfo.module.scss";

const BiddingForm = ({ isSeller, ended, biddingEnabled, tooltipMessage }) => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			{user && !isSeller && !ended && (
				<div className={classes.info_placebid}>
					<div className={classes.info_placebid_input}>
						<Input
							type={"number"}
							placeholder={`Enter your price`}
							size={"small"}
							step="0.01"
							inForm={false}
							disabled={false}
						/>
					</div>
					<div className={classes.info_placebid_button}>
						<Button
							label="PLACE BID"
							variant="primary"
							size="large"
							outlined={true}
							iconSrc={arrowIcon}
							disabled={!biddingEnabled}
						/>
					</div>
				</div>
			)}
			{(!user || isSeller) && !ended && (
				<div className={classes.info_placebid}>
					<div className={classes.info_placebid_input}>
						<Input
							type={"number"}
							placeholder={`Enter your price`}
							size={"small"}
							step="0.01"
							inForm={false}
							disabled={true}
						/>
					</div>
					<div className={classes.info_placebid_button}>
						<Tooltip content={<div>{tooltipMessage}</div>}>
							<Button
								label="PLACE BID"
								variant="primary"
								size="large"
								outlined={true}
								iconSrc={arrowIcon}
								disabled={!biddingEnabled}
							/>
						</Tooltip>
					</div>
				</div>
			)}
		</div>
	);
};

export default BiddingForm;
