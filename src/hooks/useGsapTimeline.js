import { useLayoutEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const useGsapTimeline = (trigger, start, end) => {
    const elementRef = useRef(null);
    const [timeline, setTimeline] = useState(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			setTimeline(gsap.timeline({
				scrollTrigger: {
					trigger,
					markers: import.meta.env.DEV,
					start: start || 'bottom 100%',
					end: end || 'bottom 5%',
					scrub: true
				}
			}));
		}, elementRef);

		return () => ctx.revert();
	}, [trigger, start, end]);

    return [elementRef, timeline]
};

export default useGsapTimeline;
