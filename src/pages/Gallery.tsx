import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
	PhotoIcon,
	VideoCameraIcon,
	BuildingOfficeIcon,
	AcademicCapIcon,
	TrophyIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import Masonry from '@/components/gallery/Masonry';
import scienceLab from '@/assets/images/science-lab.jpg';
import sportsImg from '@/assets/images/sports-img.jpg';
// import culturalEvents from '@/assets/images/curtural-events.jpg';
import campusImg from '@/assets/images/school-img.jpg';
import classroomImg from '@/assets/images/students-inclass.jpg';
import artExhibition from '@/assets/images/art-exhibition.jpg';

interface GalleryImage {
	id: number;
	src: string;
	title: string;
	category: string;
	height?: number;
}

interface GalleryImages {
	all: GalleryImage[];
	campus: GalleryImage[];
	classrooms: GalleryImage[];
	sports: GalleryImage[];
	events: GalleryImage[];
}

const galleryImages: GalleryImages = {
	all: [
		{ id: 1, src: campusImg, category: 'campus', title: 'School Building', height: 350 },
		{ id: 2, src: classroomImg, category: 'classrooms', title: 'Modern Classroom', height: 280 },
		{ id: 3, src: sportsImg, category: 'sports', title: 'Sports Day', height: 400 },
		{ id: 4, src: scienceLab, category: 'events', title: 'Annual Function', height: 320 },
		{ id: 5, src: campusImg, category: 'campus', title: 'Library', height: 300 },
		{ id: 6, src: sportsImg, category: 'sports', title: 'Basketball Court', height: 380 },
		{ id: 7, src: artExhibition, category: 'events', title: 'Science Exhibition', height: 340 },
		{ id: 8, src: classroomImg, category: 'classrooms', title: 'Computer Lab', height: 290 },
		{ id: 9, src: sportsImg, category: 'sports', title: 'Athletics', height: 360 },
		{
			id: 10,
			src: 'https://picsum.photos/id/1015/600/900?grayscale',
			category: 'events',
			title: 'Annual Function',
			height: 320,
		},
		{
			id: 11,
			src: 'https://picsum.photos/id/1011/600/750?grayscale',
			category: 'events',
			title: 'Annual Function',
			height: 320,
		},
		{
			id: 12,
			src: 'https://picsum.photos/id/1020/600/800?grayscale',
			category: 'campus',
			title: 'floor',
			height: 320,
		},
	],
	campus: [
		{ id: 1, src: campusImg, category: 'campus', title: 'School Building', height: 350 },
		{ id: 5, src: campusImg, category: 'campus', title: 'Library', height: 300 },
		{
			id: 12,
			src: 'https://picsum.photos/id/1020/600/800?grayscale',
			category: 'campus',
			title: 'floor',
			height: 320,
		},
	],
	classrooms: [
		{ id: 2, src: classroomImg, category: 'classrooms', title: 'Modern Classroom', height: 280 },
		{ id: 8, src: classroomImg, category: 'classrooms', title: 'Computer Lab', height: 290 },
	],
	sports: [
		{ id: 3, src: sportsImg, category: 'sports', title: 'Sports Day', height: 400 },
		{ id: 6, src: sportsImg, category: 'sports', title: 'Basketball Court', height: 380 },
		{ id: 9, src: sportsImg, category: 'sports', title: 'Athletics', height: 360 },
	],
	events: [
		{ id: 4, src: scienceLab, category: 'events', title: 'Annual Function', height: 320 },
		{ id: 7, src: artExhibition, category: 'events', title: 'Science Exhibition', height: 340 },
		{
			id: 10,
			src: 'https://picsum.photos/id/1015/600/900?grayscale',
			category: 'events',
			title: 'Annual Function',
			height: 320,
		},
		{
			id: 11,
			src: 'https://picsum.photos/id/1011/600/750?grayscale',
			category: 'events',
			title: 'Annual Function',
			height: 320,
		},
	],
};

const Gallery: React.FC = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && !window.gsap) {
			console.warn('GSAP is required for the Masonry component. Please install it using: npm install gsap');
		}
	}, []);
	const [activeTab, setActiveTab] = useState<keyof GalleryImages>('all');
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [showModal, setShowModal] = useState<boolean>(false);

	const heroRef = useRef(null);
	const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
	const heroControls = useAnimation();

	const heroContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	} as const;

	const heroItemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	} as const;

	const heroBackgroundVariants = {
		hidden: { scale: 1.1, opacity: 0.5 },
		visible: {
			scale: 1,
			opacity: 0.9,
			transition: {
				duration: 1.2,
				ease: 'easeOut',
			},
		},
	} as const;

	useEffect(() => {
		if (heroInView) heroControls.start('visible');
	}, [heroInView, heroControls]);

	const categories = [
		{ id: 'all', name: 'All Photos', icon: PhotoIcon, count: galleryImages.all.length },
		{ id: 'campus', name: 'Campus', icon: BuildingOfficeIcon, count: galleryImages.campus.length },
		{ id: 'classrooms', name: 'Classrooms', icon: AcademicCapIcon, count: galleryImages.classrooms.length },
		{ id: 'sports', name: 'Sports', icon: TrophyIcon, count: galleryImages.sports.length },
		{ id: 'events', name: 'Events', icon: UsersIcon, count: galleryImages.events.length },
	] as const;

	const filteredImages = useMemo(() => {
		return activeTab === 'all' ? galleryImages.all : galleryImages[activeTab];
	}, [activeTab]);

	const openModal = (image: GalleryImage, index: number) => {
		setSelectedImage(image);
		setCurrentIndex(index);
		setShowModal(true);
	};

	const closeImage = () => {
		setSelectedImage(null);
		setShowModal(false);
		document.body.style.overflow = 'auto';
	};

	const nextImage = () => {
		const newIndex = (currentIndex + 1) % filteredImages.length;
		setCurrentIndex(newIndex);
		setSelectedImage(filteredImages[newIndex]);
	};

	const prevImage = () => {
		const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
		setCurrentIndex(newIndex);
		setSelectedImage(filteredImages[newIndex]);
	};

	// const handleKeyDown = (e: React.KeyboardEvent) => {
	//   if (e.key === 'Escape') {
	//     closeImage();
	//   } else if (e.key === 'ArrowRight') {
	//     nextImage();
	//   } else if (e.key === 'ArrowLeft') {
	//     prevImage();
	//   }
	// };

	// const handleBackdropClick = (e: React.MouseEvent) => {
	//   if (e.target === e.currentTarget) {
	//     closeImage();
	//   }
	// };

	React.useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeImage();
			}
		};

		if (showModal) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'auto';
		};
	}, [showModal]);

	return (
		<div className="bg-white">
			<motion.div
				ref={heroRef}
				initial="hidden"
				animate={heroControls}
				variants={heroContainerVariants}
				className="relative bg-primary-700 py-20 overflow-hidden"
			>
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-90"
						variants={heroBackgroundVariants}
					></motion.div>
					<motion.div
						className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853548-5f6b7590f1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"
						variants={heroBackgroundVariants}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 1.5 }}
					></motion.div>
				</div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.h1
						className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mt-10"
						variants={heroItemVariants}
					>
						Gallery
					</motion.h1>
					<motion.p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto" variants={heroItemVariants}>
						Explore the vibrant life at XYZ Bangalore through our photo and video galleries
					</motion.p>
				</div>
			</motion.div>

			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center overflow-x-auto py-4">
						<div className="flex space-x-4 px-4">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setActiveTab(category.id as keyof GalleryImages)}
									className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
										activeTab === category.id
											? 'bg-primary-100 text-primary-700'
											: 'text-gray-600 hover:bg-gray-100'
									}`}
								>
									<category.icon className="h-4 w-4 mr-2" />
									{category.name} ({category.count})
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{filteredImages.length === 0 ? (
					<div className="text-center py-12">
						<PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
						<h3 className="mt-2 text-lg font-medium text-gray-900">No images found</h3>
						<p className="mt-1 text-sm text-gray-500">Try selecting a different category</p>
					</div>
				) : (
					<div className="masonry-container" style={{ position: 'relative', marginBottom: '80px' }}>
						<Masonry
							key={activeTab}
							items={filteredImages.map((image) => ({
								id: `${activeTab}-${image.id}`,
								img: image.src,
								title: image.title,
								category: image.category,
								height: image.height || 300 + Math.random() * 200, // Random height if not specified
								url: '#',
							}))}
							animateFrom="bottom"
							scaleOnHover={true}
							blurToFocus={true}
							colorShiftOnHover={true}
							onItemClick={(item, index) => {
								const originalImage = filteredImages.find(
									(img) => `${activeTab}-${img.id}` === item.id,
								);
								if (originalImage) {
									openModal(originalImage, index);
								}
							}}
						/>
					</div>
				)}
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 z-50 overflow-y-auto"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div
							className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
							aria-hidden="true"
							onClick={closeImage}
						></div>

						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
							&#8203;
						</span>

						<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
										<div className="flex justify-between items-center mb-4">
											<h3
												className="text-lg leading-6 font-medium text-gray-900"
												id="modal-title"
											>
												{selectedImage.title}
											</h3>
											<button
												type="button"
												className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
												onClick={closeImage}
											>
												<span className="sr-only">Close</span>
												<svg
													className="h-6 w-6"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
										<div className="relative">
											<img
												src={selectedImage.src}
												alt={selectedImage.title}
												className="w-full h-auto max-h-[70vh] object-contain"
											/>

											<button
												onClick={(e) => {
													e.stopPropagation();
													prevImage();
												}}
												className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-full focus:outline-none hover:bg-opacity-75 transition-colors"
												aria-label="Previous image"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 19l-7-7 7-7"
													/>
												</svg>
											</button>

											<button
												onClick={(e) => {
													e.stopPropagation();
													nextImage();
												}}
												className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-full focus:outline-none hover:bg-opacity-75 transition-colors"
												aria-label="Next image"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</button>
										</div>

										<div className="mt-4 text-sm text-gray-500">
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 capitalize">
												{selectedImage.category}
											</span>
											<p className="mt-2">
												{currentIndex + 1} of {filteredImages.length}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={closeImage}
								>
									Close
								</button>
								<a
									href={selectedImage.src}
									download
									className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={(e) => e.stopPropagation()}
								>
									Download
								</a>
							</div>
						</div>
					</div>
				</div>
			)}

			<div
				className=" py-16 border-t border-gray-200"
				style={{ position: 'relative', display: 'block', clear: 'both' }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Video Gallery</h2>
						<p className="mt-4 text-xl text-gray-500">
							Watch our school events, performances, and campus life in action
						</p>
					</div>

					<div className=" py-16 border-t border-gray-200">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{[1, 2, 3].map((video) => (
									<div key={video} className="bg-white rounded-lg shadow-md overflow-hidden">
										<div className="relative pt-[56.25%]">
											<iframe
												src="https://www.youtube.com/embed/YU0_bfOYGoE"
												title={`Video ${video}`}
												frameBorder="0"
												allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
												className="absolute inset-0 w-full h-full"
											></iframe>
										</div>
										<div className="p-4">
											<h3 className="text-lg font-medium text-gray-900">
												{video === 1
													? 'Annual Day 2023'
													: video === 2
														? 'Sports Meet Highlights'
														: 'Campus Tour'}
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												{video === 1
													? 'Watch our amazing annual day performances'
													: video === 2
														? 'Highlights from our annual sports meet'
														: 'Take a virtual tour of our beautiful campus'}
											</p>
											<div className="mt-2 flex items-center text-sm text-gray-500">
												<VideoCameraIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
												{video * 2}m {video * 15}s
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mt-12 text-center">
						<a
							href="#"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
						>
							<VideoCameraIcon className="-ml-1 mr-2 h-5 w-5" />
							View All Videos
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
