import React, { useState } from "react";
import Tab from "../Tab/Tab";
import "./TabContainer.scss";

const TabContainer = ({ children, size }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	return (
		<div className={`tabs_${size}`}>
			<ol className={`tabs_${size}_list`}>
				{children.map((child) => {
					const { label } = child.props;

					return (
						<Tab
							activeTab={activeTab}
							key={label}
							label={label}
							setActiveTab={setActiveTab}
							size={size}
						/>
					);
				})}
			</ol>
			<div className="tabs_content">
				{children.map((child) => {
					if (child.props.label !== activeTab) return undefined;
					return child.props.children;
				})}
			</div>
		</div>
	);
};

export default TabContainer;
