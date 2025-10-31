import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, easeInOut } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import img1 from '../../assets/images/slide1.jpg';
import img2 from '../../assets/images/slide2.jpg';
import img3 from '../../assets/images/slide3.jpg';
import img4 from '../../assets/images/slide4.jpg';
import img5 from '../../assets/images/slide5.jpg';
import img6 from '../../assets/images/slide6.jpg';
import img7 from '../../assets/images/slide7.jpg';

const fadeIn = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // ✅ type assertion
		},
	},
};

const GallerySection: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const images = [img1, img2, img3, img4, img5, img6, img7];
	const captions = [
		'SAY YES TO OPEN SPACES FOR OPEN MINDS',
		'EMBRACING KNOWLEDGE WITH CONFIDENCE',
		'LEARNING BEYOND CLASSROOMS',
		'CELEBRATING YOUNG ACHIEVERS',
		'INNOVATION AND INSPIRATION TOGETHER',
		'SHAPING MINDS, BUILDING FUTURES',
		'DISCOVER. DREAM. DO.',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => handleNext(), 5000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
	const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

	return (
		<motion.section
			ref={ref}
			id="gallery"
			className="relative bg-gray-50 overflow-hidden"
			initial="hidden"
			animate={isInView ? 'show' : 'hidden'}
			variants={fadeIn}
		>
			{/* Slideshow Wrapper */}
			<div className="relative w-full h-[90vh] sm:h-[95vh] md:h-[100vh] overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={images[currentIndex]}
						alt={`Gallery ${currentIndex + 1}`}
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.8, ease: 'easeInOut' }}
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
				</AnimatePresence>

				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

				{/* Bottom section touching both edges */}
				<div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-0 m-0">
					{/* Caption Box (flush bottom-left) */}
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="bg-[#690B22] px-8 py-4 w-fit shadow-xl rounded-none ml-0 mb-0"
						style={{ marginLeft: 0, marginBottom: 0 }}
					>
						<h3 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide">
							{captions[currentIndex]}
						</h3>
					</motion.div>

					{/* Navigation Buttons (bottom-right, slightly bigger) */}
					<div className="flex items-center justify-between bg-[#690B22] px-6 py-3 rounded-md shadow-lg mr-0 mb-0 gap-x-4">
						<button
							onClick={handlePrev}
							className="text-white hover:opacity-80 transition-opacity duration-300"
							aria-label="Previous Slide"
						>
							<FaChevronLeft className="text-2xl" />
						</button>
						<button
							onClick={handleNext}
							className="text-white hover:opacity-80 transition-opacity duration-300"
							aria-label="Next Slide"
						>
							<FaChevronRight className="text-2xl" />
						</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default GallerySection;
