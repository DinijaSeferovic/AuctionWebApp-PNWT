import React from "react";
import DownIcon from "../../../assets/images/icons/down-icon.png";
import UpIcon from "../../../assets/images/icons/up-icon.png";
import Icon from "../../Icon/Icon";
import classes from "./TableHeader.module.scss";

const TableHeader = ({ requestSort }) => {
	return (
		<thead>
			<tr>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>Item name</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "name",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "name",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>Time left</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "timeLeft",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "timeLeft",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>Bidders</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "bidders",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "bidders",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>Bids</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "bids",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "bids",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>
							Item price
						</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "highestBid",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "highestBid",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
				<th>
					<div className={classes.headername}>
						<div className={classes.headername_name}>
							Growth rate
						</div>
						<div className={classes.headername_icons}>
							<div
								onClick={() =>
									requestSort({
										key: "growthRate",
										direction: "asc",
									})
								}
								className={classes.headername_icons_up}
							>
								<Icon
									src={UpIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
							<div
								onClick={() =>
									requestSort({
										key: "growthRate",
										direction: "desc",
									})
								}
								className={classes.headername_icons_down}
							>
								<Icon
									src={DownIcon}
									className="sortIcon"
									size="arrow"
								/>
							</div>
						</div>
					</div>
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
