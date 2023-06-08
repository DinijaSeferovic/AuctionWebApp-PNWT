const calculateBigTimeUnitsLeft = (timeDifference) => {
	return {
		Weeks: Math.floor(timeDifference / (1000 * 7 * 60 * 60 * 24)),
		Days: Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 7),
	};
};

const calculateSmallTimeUnitsLeft = (timeDifference) => {
	return {
		Hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
		Minutes: Math.floor((timeDifference / 1000 / 60) % 60),
		Seconds: Math.floor((timeDifference / 1000) % 60),
	};
};

const calculateTimeLeft = (targetDate) => {
	let difference = 0;
	if (targetDate.getTime() > new Date().getTime()) {
		difference = targetDate.getTime() - new Date().getTime();
	}
	let smallTimeUnitsLeft = {};
	let bigTimeUnitsLeft = {};
	if (difference > 0) {
		smallTimeUnitsLeft = calculateSmallTimeUnitsLeft(difference);
		bigTimeUnitsLeft = calculateBigTimeUnitsLeft(difference);
	}
	if (
		bigTimeUnitsLeft &&
		bigTimeUnitsLeft.Weeks === 0 &&
		bigTimeUnitsLeft.Days === 0
	)
		return smallTimeUnitsLeft;
	else return bigTimeUnitsLeft;
};

export default { calculateTimeLeft };
