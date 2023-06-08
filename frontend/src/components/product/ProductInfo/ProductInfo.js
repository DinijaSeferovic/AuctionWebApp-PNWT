import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Timer from "../../Timer/Timer";
import TabContainer from "../../tabs/TabContainer/TabContainer";
import BiddingForm from "./BiddingForm";
import classes from "./ProductInfo.module.scss";

const ProductInfo = ({ product, showNotification }) => {
	const { user, setUser } = useContext(UserContext);
	const [biddingEnabled, setBiddingEnabled] = useState();
	const [isSeller, setIsSeller] = useState(false);
	const [ended, setEnded] = useState(false);
	const [tooltipMessage, setTooltipMessage] = useState("");
	const showOnce = useRef(1);
	const navigate = useNavigate();

	useEffect(() => {
		if (new Date(product.endDate) <= new Date()) setEnded(true);
		if (user) {
			if (user.id === product.sellerId) {
				setIsSeller(true);
				setBiddingEnabled(false);
				setTooltipMessage("You cannot bid on your own items!");
			}
			setBiddingEnabled(true);
			setTooltipMessage("");
		} else {
			setBiddingEnabled(false);
			setTooltipMessage("Please login or register to place a bid.");
		}
	}, [product, user, ended]);

	return (
		<div className={classes.info}>
			<div className={classes.info_title}>{product.name}</div>
			<div className={classes.info_start}>
				{"Starts From "}
				<span className={classes.info_start_price}>
					{"$"}
					{product.startPrice}
				</span>
			</div>
			<div className={classes.info_specs}>
				{!ended && (
					<div className={classes.info_specs_timer}>
						{"Time left: "}
						<span className={classes.info_specs_timer_time}>
							<Timer endDate={product.endDate} />
						</span>
					</div>
				)}
			</div>
			<BiddingForm
				isSeller={isSeller}
				ended={ended}
				biddingEnabled={biddingEnabled}
				tooltipMessage={tooltipMessage}
			/>
			<div className={classes.info_tab}>
				<TabContainer size="small">
					<div label="Details">
						<div className={classes.info_tab_details}>
							{product.description}
						</div>
					</div>
					<div label=""></div>
				</TabContainer>
			</div>
		</div>
	);
};

export default ProductInfo;
