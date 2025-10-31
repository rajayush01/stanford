import React, { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AcademicCapIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import LeadershipSection from '@/components/home/LeadershipSection';
import CarouselSection from '@/components/home/CarouselSection';

// Import images
import mottoImage from '@/assets/images/motto-legacy-img.jpg';
import visionImage from '@/assets/images/vision-legacy-img.jpg';
import missionImage from '@/assets/images/mission-legacy-img.jpg';

// interface SectionProps {
//   id: string;
//   title: string;
//   children: React.ReactNode;
//   icon: React.ElementType;
// }

// const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ id, title, children, icon: Icon }, ref) => {
//   const controls = useAnimation();
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [controls, isInView]);

//   return (
//     <motion.div
//       id={id}
//       className="py-16 bg-white scroll-mt-20"
//       ref={sectionRef}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.6, ease: 'easeOut' }
//         }
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           <motion.div
//             className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6"
//             initial={{ scale: 0.5, opacity: 0 }}
//             animate={isInView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
//           >
//             <Icon className="h-8 w-8" />
//           </motion.div>
//           <motion.h2
//             className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
//             initial={{ y: 20, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             {title}
//           </motion.h2>
//           <motion.div
//             className="mt-6 text-lg text-gray-600 space-y-6 max-w-3xl mx-auto"
//             initial={{ y: 20, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             {children}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// });

const Legacy: React.FC = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const sectionRefs = {
		motto: useRef<HTMLDivElement>(null),
		vision: useRef<HTMLDivElement>(null),
		mission: useRef<HTMLDivElement>(null),
		kkcet: useRef<HTMLDivElement>(null),
		team: useRef<HTMLDivElement>(null),
	};

	useEffect(() => {
		const section = searchParams.get('section');
		if (section && sectionRefs[section as keyof typeof sectionRefs]?.current) {
			sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, [searchParams, sectionRefs]);

	return (
		<div className="bg-white">
			<motion.div
				className="relative bg-primary-700 py-16 overflow-hidden h-[50vh] "
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<button
						onClick={() => navigate('/')}
						className="flex items-center text-white hover:text-primary-100 mb-8 transition-colors duration-200"
					>
						<ArrowLeftIcon className="h-5 w-5 mr-2" />
						Back to Home
					</button>
				</div>
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 opacity-90"></div>
					<div className="absolute inset-0 bg-[url('@/assets/images/legacy-img.avif')] bg-cover bg-center mix-blend-overlay"></div>
				</div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Our Legacy
					</h1>
					<p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
						A Tradition of Excellence in Education Since 1985
					</p>
				</div>
			</motion.div>

			<motion.section
				id="motto"
				ref={sectionRefs.motto}
				className="py-24 overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute left-0 top-0 bottom-0 items-center justify-end z-10 ">
							<img
								src={mottoImage}
								alt="Student in uniform"
								className="h-64 lg:h-80 object-contain mr-4 hover:scale-105 transition-all duration-300 rounded-xl border-2 border-black"
							/>
						</div>

						<div className="w-full md:w-[70%] md:ml-[30%] bg-emerald-600 text-white shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:scale-105 transition-all duration-300">
							<div className="md:ml-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">SCHOOL MOTTO</h2>
								<h3 className="text-2xl font-semibold mb-8">Service Before Self</h3>

								<p className="mb-6">
									A motto is a vivid reflection of the mettle that goes into the making of an
									institution.
								</p>

								<p className="mb-6">
									Our motto is a constant reminder that the well-being and safety of others, always
									comes prior to our own welfare, comfort and security.
								</p>

								<p className="mb-4">We believe in the saying</p>

								<p className="text-xl font-bold">" THY NEED IS GREATER THAN MINE "</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="bg-gray-50 py-24 overflow-hidden"
				id="vision"
				ref={sectionRefs.vision}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute right-0 top-0 bottom-0 items-center justify-start z-10 hover:scale-105 transition-all duration-300">
							<img
								src={visionImage}
								alt="Vision"
								className="h-64 lg:h-80 object-contain ml-4 rounded-xl border-2 border-black"
							/>
						</div>

						<div className="w-full md:w-[70%] bg-blue-700 text-white shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:scale-105 transition-all duration-300">
							<div className="md:mr-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">OUR VISION</h2>
								<h3 className="text-2xl font-semibold mb-8">Empowering Future Leaders</h3>

								<p className="mb-6">
									Our vision is to be a beacon of excellence in education, nurturing young minds to
									become global citizens who are intellectually adept, emotionally balanced, and
									socially responsible.
								</p>

								<p className="mb-6">
									We envision a learning environment that fosters innovation, critical thinking, and a
									lifelong love for learning, preparing students to meet the challenges of an
									ever-evolving world with confidence and resilience.
								</p>

								<p className="mb-6">We believe in the saying</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="py-24 overflow-hidden"
				id="mission"
				ref={sectionRefs.mission}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<div className="hidden md:flex w-3/2 absolute left-0 top-0 bottom-0 items-center justify-end z-10">
							<img
								src={missionImage}
								alt="Mission"
								className="h-64 lg:h-80 object-contain mr-4 rounded-xl border-2 border-black hover:scale-105 transition-all duration-300"
							/>
						</div>

						<div className="w-full md:w-[70%] md:ml-[30%] bg-yellow-400 text-black shadow-xl pt-12 pb-12 px-6 sm:px-8 min-h-[350px] hover:scale-105 transition-all duration-300">
							<div className="md:ml-[25%]">
								<h2 className="text-4xl md:text-5xl font-bold mb-6">OUR MISSION</h2>
								<h3 className="text-2xl font-semibold mb-8">Holistic Development</h3>

								<p className="mb-6">
									Our mission is to provide a holistic education that goes beyond academics, focusing
									on the all-round development of each child. We are committed to:
								</p>
								<p className="mb-2">
									• Fostering academic excellence through innovative teaching methodologies
								</p>
								<p className="mb-2">
									• Nurturing creativity, critical thinking, and problem-solving skills
								</p>
								<p className="mb-2">
									• Promoting values of integrity, respect, and social responsibility
								</p>
								<p className="mb-2">
									• Providing a safe, inclusive, and stimulating learning environment
								</p>
								<p>• Encouraging participation in sports, arts, and co-curricular activities</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="bg-gray-50 py-24 overflow-hidden"
				id="kkcet"
				ref={sectionRefs.kkcet}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="relative min-h-[500px]">
						<LeadershipSection />
					</div>
				</div>
			</motion.section>

			<motion.section
				className="py-24 overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative min-h-[500px]">
						<CarouselSection />
					</div>
				</div>
			</motion.section>

			<motion.section
				className="bg-white py-24 overflow-hidden"
				id="team"
				ref={sectionRefs.team}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-extrabold text-gray-900">Academic Team</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Our dedicated academic team is committed to providing the highest quality education and
							support to our students.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 1"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Dr. A. </h3>
							<p className="text-gray-500 text-sm">Head of Department</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 2"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Ms. R. </h3>
							<p className="text-gray-500 text-sm">Senior Faculty</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 3"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. V. </h3>
							<p className="text-gray-500 text-sm">Coordinator</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 3"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. V. </h3>
							<p className="text-gray-500 text-sm">Coordinator</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 3"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. V. </h3>
							<p className="text-gray-500 text-sm">Coordinator</p>
						</div>

						<div className="flex flex-col items-center text-center">
							<img
								src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
								alt="Team Member 3"
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. V. </h3>
							<p className="text-gray-500 text-sm">Coordinator</p>
						</div>

						{/* Add more team members as needed */}
					</div>
				</div>
			</motion.section>

			<motion.div
				className="bg-gray-50"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
				viewport={{ once: true }}
			>
				<div className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Our Journey Through The Years
							</h2>
							<p className="mt-4 text-xl text-gray-600">
								Milestones that define our legacy of excellence
							</p>
						</motion.div>

						<div className="mt-16 flow-root">
							<div className="-my-8">
								{[
									{
										year: '1985',
										title: 'Foundation Laid',
										description:
											'XYZ Bangalore was established with a vision to provide quality education in the heart of the city.',
									},
									{
										year: '1992',
										title: 'First Batch Graduates',
										description:
											'Our first batch of students graduated, many of whom went on to prestigious universities.',
									},
									{
										year: '2001',
										title: 'New Campus Inaugurated',
										description:
											'Expanded to a state-of-the-art campus with modern facilities and infrastructure.',
									},
									{
										year: '2010',
										title: 'CBSE Excellence Award',
										description:
											'Recognized as one of the top CBSE schools in the country for academic excellence.',
									},
									{
										year: '2020',
										title: 'Digital Transformation',
										description:
											'Successfully transitioned to hybrid learning models, ensuring uninterrupted education.',
									},
								].map((event, index) => (
									<motion.div
										key={index}
										className="relative pb-8"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{
											opacity: 1,
											x: 0,
											transition: {
												delay: index * 0.15,
												duration: 0.6,
												ease: 'easeOut',
											},
										}}
										viewport={{ once: true, margin: '-50px' }}
									>
										{index !== 4 && (
											<motion.span
												className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
												aria-hidden="true"
												initial={{ scaleY: 0 }}
												whileInView={{
													scaleY: 1,
													transition: {
														delay: 0.3 + index * 0.15,
														duration: 0.8,
														ease: [0.33, 1, 0.68, 1],
													},
												}}
												viewport={{ once: true }}
											/>
										)}
										<div className="relative flex space-x-3 group">
											<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
												<motion.span
													className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
														index === 0 ? 'bg-primary-600' : 'bg-gray-400'
													}`}
													initial={{ scale: 0.5 }}
													whileInView={{
														scale: 1,
														transition: {
															type: 'spring',
															stiffness: 200,
															damping: 15,
															delay: 0.2 + index * 0.15,
														},
													}}
													viewport={{ once: true }}
												>
													<AcademicCapIcon
														className="h-4 w-4 text-white"
														aria-hidden="true"
													/>
												</motion.span>
											</motion.div>
											<motion.div
												className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{
													opacity: 1,
													x: 0,
													transition: {
														delay: 0.3 + index * 0.15,
														duration: 0.5,
													},
												}}
												viewport={{ once: true }}
											>
												<div>
													<p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
														{event.description}
													</p>
												</div>
												<motion.div
													className="text-right text-sm whitespace-nowrap text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
													initial={{ opacity: 0 }}
													whileInView={{
														opacity: 1,
														transition: {
															delay: 0.4 + index * 0.15,
															duration: 0.5,
														},
													}}
													viewport={{ once: true }}
												>
													<time dateTime={event.year} className="font-medium">
														{event.year}
													</time>
												</motion.div>
											</motion.div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Legacy;
