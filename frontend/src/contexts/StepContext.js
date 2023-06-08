import React, { useReducer } from "react";
import {
	defaultStepperState,
	reducer,
} from "../components/StepWizard/StepReducer";

export const StepperContext = React.createContext();

export const StepperProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultStepperState);

	return (
		<StepperContext.Provider value={[state, dispatch]}>
			{children}
		</StepperContext.Provider>
	);
};
