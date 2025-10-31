import { ReactNode, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const topRef = useRef<HTMLDivElement>(null);
	const isAtTop = useInView(topRef, { margin: '0px 0px -50px 0px' });

	return (
		<div className="flex flex-col min-h-screen">
			<div ref={topRef} className="absolute top-0 h-20 w-full pointer-events-none" />
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />

			{/* Floating "Enquire Now" Button - Shows on all pages except at the very top */}
			<AnimatePresence>
				{!isAtTop && (
					<motion.button
						onClick={() => (window.location.href = '/contact')}
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 100, opacity: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						className="fixed right-0 text-white font-medium shadow-md hover:brightness-110 transition-all duration-300 z-50"
						style={{
							backgroundColor: '#800000',
							writingMode: 'vertical-rl',
							textOrientation: 'upright',
							top: '50%',
							transform: 'translateY(-50%)',
							height: '150px',
							width: '40px',
							fontSize: '0.8rem',
							padding: '0.3rem 0',
							borderTopLeftRadius: '8px',
							borderBottomLeftRadius: '8px',
							fontFamily: 'Poppins, sans-serif',
							boxShadow: '0 2px 5px rgba(0,0,0,0.25)',
							transformOrigin: 'center right',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							letterSpacing: '0.2px',
						}}
					>
						Enquire
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MainLayout;