import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import DPSLoading from './components/ui/Loading';

// 🧭 Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Legacy = lazy(() => import('./pages/Legacy'));
const Location = lazy(() => import('./pages/Location'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Facilities = lazy(() => import('./pages/Facilities')); // ✅ Updated (was Infrastructure)
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	const handleInitialLoadingComplete = () => {
		setIsInitialLoading(false);
	};

	// 🌀 Initial loader before full render
	if (isInitialLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-[#690B22]">
				<div className="scale-[2]">
					<DPSLoading
						mode="timed"
						size="md"
						duration={2000} // 2 seconds
						onLoadingComplete={handleInitialLoadingComplete}
						showProgress={true}
					/>
				</div>
			</div>
		);
	}

	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center min-h-screen bg-[#690B22]">
					<div className="scale-[2]">
						<DPSLoading mode="suspense" size="md" />
					</div>
				</div>
			}
		>
			<Routes>
				{/* 🏠 Main Layout Wrapper */}
				<Route
					path="/"
					element={
						<MainLayout>
							<Outlet />
						</MainLayout>
					}
				>
					{/* ✅ Main Pages */}
					<Route index element={<Home />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="legacy" element={<Legacy />} />
					<Route path="location" element={<Location />} />
					<Route path="academics" element={<Academics />} />
					<Route path="admissions" element={<Admissions />} />
					<Route path="facilities" element={<Facilities />} /> {/* ✅ Added Facilities Route */}
					<Route path="gallery" element={<Gallery />} />
					<Route path="contact" element={<ContactUs />} />

					{/* 🚫 Catch-all for invalid routes */}
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Route>

				{/* 🧱 Standalone 404 page */}
				<Route
					path="/404"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;
