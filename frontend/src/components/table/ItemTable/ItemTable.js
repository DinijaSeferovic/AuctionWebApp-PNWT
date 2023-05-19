import React, { useEffect, useState } from "react";
import productService from "../../../services/productService";
import Button from "../../Button/Button";
import Dropdown from "../../Input/Dropdown";
import Pagination from "../../Pagination/Pagination";
import Table from "../Table/Table";
import classes from "./ItemTable.module.scss";

const ItemTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [products, setProducts] = useState([]);
	const [pageSize, setPageSize] = useState(5);
	const [status, setStatus] = useState("active");
	const [count, setCount] = useState(0);
	const [isSelected, setSelected] = useState(true);

	useEffect(() => {
		productService
			.getProductRow(currentPage - 1, pageSize, status)
			.then((response) => {
				setProducts(response.data);
			});
		productService
			.getProductsCount(status)
			.then((response) => setCount(response.data));
	}, [currentPage, pageSize, status]);

	const handlePageSize = (event) => {
		setPageSize(event.target.value);
	};

	return (
		<div className={classes.container}>
			<div className={classes.container_buttons}>
				<Button
					label="Active"
					variant={
						isSelected && status === "active"
							? "primary"
							: "ternary"
					}
					outlined={!isSelected}
					onClick={() => {
						setSelected(true);
						setStatus("active");
					}}
				/>
				<Button label="Inactive" disabled={true} />
				<Button
					label="Sold"
					variant={
						isSelected && status === "sold" ? "primary" : "ternary"
					}
					outlined={!isSelected}
					onClick={() => {
						setSelected(true);
						setStatus("sold");
					}}
				/>
			</div>
			<div className={classes.container_table}>
				<Table products={products} status={status} />
			</div>
			<div className={classes.container_bottom}>
				<div className={classes.container_bottom_showing}>
					Showing {(currentPage - 1) * pageSize + 1}-
					{currentPage * pageSize} of {count}
				</div>

				<Pagination
					className={classes.container_bottom_paginationbar}
					currentPage={currentPage}
					totalCount={count}
					pageSize={pageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
				<div>
					Rows per page:{" "}
					<Dropdown
						options={[
							{ label: 5, value: 5 },
							{ label: 10, value: 10 },
							{ label: 20, value: 20 },
							{ label: 100, value: 100 },
						]}
						value={pageSize}
						onChange={handlePageSize}
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemTable;
