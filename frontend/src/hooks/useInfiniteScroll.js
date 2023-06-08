import { useCallback, useEffect } from "react";
import actionTypes from "../utils/actionTypes";

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef, dispatch) => {
	const scrollObserver = useCallback(
		(node) => {
			new IntersectionObserver((entries) => {
				entries.forEach((en) => {
					if (en.intersectionRatio > 0) {
						dispatch({ type: actionTypes.ADVANCE_PAGE });
					}
				});
			}).observe(node);
		},
		[dispatch]
	);

	useEffect(() => {
		if (scrollRef.current) {
			scrollObserver(scrollRef.current);
		}
	}, [scrollObserver, scrollRef]);
};
