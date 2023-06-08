import { useCallback, useEffect, useRef } from "react";

// lazy load with intersection observer
export const useLazyLoading = (productSelector, products) => {
	const productObserver = useCallback((node) => {
		const intObs = new IntersectionObserver((entries) => {
			entries.forEach((en) => {
				if (en.intersectionRatio > 0) {
					const currentProduct = en.target;
					const newProductSrc = currentProduct.dataset.src;

					// only swap out the source if the new url exists
					if (!newProductSrc) {
						console.error("Product source is invalid");
					} else {
						currentProduct.src = newProductSrc;
					}
					intObs.unobserve(node);
				}
			});
		});
		intObs.observe(node);
	}, []);

	const productRef = useRef(null);

	useEffect(() => {
		productRef.current = document.querySelectorAll(productSelector);

		if (productRef.current) {
			productRef.current.forEach((p) => productObserver(p));
		}
	}, [productObserver, productRef, productSelector, products]);
};
