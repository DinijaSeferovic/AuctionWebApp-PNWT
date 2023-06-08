import React, { useEffect, useState } from "react";
import timerCalculator from "../../utils/timerCalculator";
import classes from "./Timer.module.scss";

const Timer = ({ endDate }) => {
	const targetDate = new Date(endDate);

	const [timeLeft, setTimeLeft] = useState(
		timerCalculator.calculateTimeLeft(targetDate)
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(timerCalculator.calculateTimeLeft(targetDate));
		}, 1000);
		return () => clearTimeout(timer);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span key={interval}>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	return (
		<div className={classes.time}>
			{timerComponents.length > 0 && timerComponents}
		</div>
	);
};

export default Timer;
