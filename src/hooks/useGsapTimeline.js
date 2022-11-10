import { useLayoutEffect, useState, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

const useGsapTimeline = ({ trigger, markers, start, end, scrub }) => {
	const elementRef = useRef(null);
	const [timeline, setTimeline] = useState(null);
	const scrollTrigger = useMemo(
		() => ({
			markers: markers ?? import.meta.env.DEV,
			scrub: scrub ?? true,
			trigger,
			start,
			end
		}),
		[trigger, markers, start, end, scrub]
	);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ scrollTrigger });
			setTimeline(tl);
		}, elementRef);

		return () => ctx.revert();
	}, [scrollTrigger]);

	return [elementRef, timeline];
};

export default useGsapTimeline;
