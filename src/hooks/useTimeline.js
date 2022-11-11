import { useLayoutEffect, useState, useRef, useMemo, useEffect } from 'react';
import { gsap } from 'gsap';

const useTimeline = ({ trigger, markers, start, end, scrub, pin }, fn) => {
	const elementRef = useRef(null);
	const savedFn = useRef(null);
	const [timeline, setTimeline] = useState(null);

	const scrollTrigger = useMemo(
		() => ({
			markers: markers ?? import.meta.env.DEV,
			scrub: scrub ?? true,
			trigger,
			start,
			end,
			pin
		}),
		[trigger, markers, start, end, scrub, pin]
	);

	useEffect(() => {
		savedFn.current = fn;
	}, [fn]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ scrollTrigger });
			setTimeline(tl);

			if (typeof savedFn.current === 'function') {
				savedFn.current(tl);
			}
		}, elementRef);

		return () => ctx.revert();
	}, [scrollTrigger]);

	return [elementRef, timeline];
};

export default useTimeline;
