import classnames from "classnames";
import React from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import "./Pagination.scss";

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const onStart = () => {
		onPageChange(1);
	};

	const onEnd = () => {
		onPageChange(currentPage + paginationRange.length - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul
			className={classnames("pagination-container", {
				[className]: className,
			})}
		>
			<li
				className={classnames(
					"pagination-item",
					{
						disabled: currentPage === 1,
					},
					"nav"
				)}
				onClick={onStart}
			>
				<div>|</div>
				<div className="arrow left" />
			</li>
			<li
				className={classnames(
					"pagination-item",
					{
						disabled: currentPage === 1,
					},
					"nav"
				)}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange.map((pageNumber) => {
				if (pageNumber === DOTS) {
					return <li className="pagination-item dots">&#8230;</li>;
				}

				return (
					<li
						className={classnames("pagination-item", {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={classnames(
					"pagination-item",
					{
						disabled: currentPage === lastPage,
					},
					"nav"
				)}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
			<li
				className={classnames(
					"pagination-item",
					{
						disabled: currentPage === lastPage,
					},
					"nav"
				)}
				onClick={onEnd}
			>
				<div className="arrow right" />
				<div>|</div>
			</li>
		</ul>
	);
};

export default Pagination;
