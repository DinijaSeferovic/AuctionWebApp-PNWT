import GreenUpIcon from "../../../assets/images/icons/green-up-icon.png";
import useSortableData from "../../../hooks/useSortableData";
import Icon from "../../Icon/Icon";
import Image from "../../Image/Image";
import TableHeader from "../TableHeader/TableHeader";
import classes from "./Table.module.scss";

const Table = ({ products, status }) => {
	const { items, requestSort, sortConfig } = useSortableData(products);

	const getImage = (product) => {
		let path = require("../../../assets/images/products/no-img.png");
		if (product.imagePath) {
			path = require(`../../../assets/images${product.imagePath}`);
		}
		return path;
	};

	return (
		<table>
			<TableHeader requestSort={requestSort} />
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						<td>
							<div className={classes.namefield}>
								<div>
									<Image
										src={getImage(item)}
										alt="Product image"
										size="xxsmall"
										href={`/single-product/${item.id}`}
									/>
								</div>
								<div className={classes.namefield_text}>
									<div
										className={classes.namefield_text_name}
									>
										{item.name}
									</div>
									<div className={classes.namefield_text_id}>
										{item.id}
									</div>
								</div>
							</div>
						</td>
						<td>{status !== "sold" && item.timeLeft}</td>
						<td>{item.bids}</td>
						<td>
							<div>
								<div className={classes.pricefield}>
									${item.price}
								</div>
								<div>${item.highestBid}</div>
							</div>
						</td>
						<td>
							{item.growthRate > 0 ? (
								<div className={classes.greenratefield}>
									<div
										className={classes.greenratefield_arrow}
									>
										<Icon src={GreenUpIcon} size="arrow" />
									</div>
									{item.growthRate}%
								</div>
							) : (
								<>{item.growthRate}%</>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
