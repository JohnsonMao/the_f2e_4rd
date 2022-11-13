import { useLayoutEffect, useState, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

const useTimeline = (config, fn) => {
	const elementRef = useRef(null);
	const savedFn = useRef(null);
	const [timeline, setTimeline] = useState(null);
	const { trigger, markers, start, end, scrub, pin, default: d } = config;

	const scrollTrigger = useMemo(
		() => ({
			markers: markers ?? import.meta.env.DEV,
			scrub: scrub ?? true,
			trigger,
			start,
			end,
			pin,
			default: d
		}),
		[trigger, markers, start, end, scrub, pin, d]
	);

	useLayoutEffect(() => {
		savedFn.current = fn;

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ scrollTrigger });
			setTimeline(tl);

			if (typeof savedFn.current === 'function') {
				savedFn.current(tl);
			}
		}, elementRef);

		return () => ctx.revert();
	}, [scrollTrigger, fn]);

	return [elementRef, timeline];
};

export default useTimeline;
