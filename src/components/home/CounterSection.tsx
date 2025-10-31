import { useState, useEffect, useRef } from 'react';

type AnimatedCounterProps = {
	end: number;
	label: string;
	suffix?: string;
	duration?: number;
	startAnimation?: boolean;
};

const AnimatedCounter = ({
	end,
	label,
	suffix = '+',
	duration = 2000,
	startAnimation = false,
}: AnimatedCounterProps) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!startAnimation) {
			setCount(0);
			return;
		}

		const increment = end / (duration / 16);
		const timer = setInterval(() => {
			setCount((prev) => {
				const next = prev + increment;
				return next >= end ? end : next;
			});
		}, 16);

		return () => clearInterval(timer);
	}, [end, duration, startAnimation]);

	return (
		<div className="text-center">
			<div className="text-5xl font-semibold text-gray-800 mb-2">
				{Math.floor(count).toLocaleString()}
				{suffix}
			</div>
			<div className="text-lg font-semibold text-[#690B22] tracking-wider">{label}</div>
		</div>
	);
};

const CounterSection = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	const stats: Omit<AnimatedCounterProps, 'startAnimation'>[] = [
		{ end: 2500, label: 'STUDENTS' },
		{ end: 225, label: 'STAFF' },
		{ end: 4000, label: 'ALUMNI' },
		{ end: 100, label: 'AWARDS' },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.3, // Trigger when 30% of the section is visible
				rootMargin: '-50px', // Start animation slightly after entering viewport
			},
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [isVisible]);

	return (
		<div
			ref={sectionRef}
			className=" flex items-center justify-center p-8 bg-white"
		>
			<div className="p-12 max-w-6xl w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{stats.map((stat, index) => (
						<div key={index} className="transform hover:scale-105 transition-transform duration-300">
							<AnimatedCounter {...stat} duration={2500 + index * 200} startAnimation={isVisible} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CounterSection;
