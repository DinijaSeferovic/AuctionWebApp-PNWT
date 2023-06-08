import React from "react";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import Sidebar from "../../components/layout/navigation/Sidebar/Sidebar";
import ItemTable from "../../components/table/ItemTable/ItemTable";
import classes from "./AdminPanel.module.scss";

const AdminPanel = () => {
	return (
		<div>
			<MainNavBar hasSearch={false} />
			<div className={classes.container}>
				<Sidebar />
				<ItemTable />
			</div>
		</div>
	);
};

export default AdminPanel;
