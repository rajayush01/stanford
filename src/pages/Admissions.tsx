// src/pages/Admissions.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
	CheckCircleIcon,
	ClipboardDocumentListIcon,
	QuestionMarkCircleIcon,
	EnvelopeIcon,
	PhoneIcon,
	MapPinIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline';

const Admissions: React.FC = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();

	// Default to 'know' (Know About Stanford) if none present
	const sectionFromUrl = searchParams.get('section') || 'know';
	const [activeTab, setActiveTab] = useState(sectionFromUrl);

	const tabContentRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(tabContentRef, { once: true, amount: 0.1 });

	// Form uses: name, contact (phone or email), query
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		query: '',
	});

	// popup state
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		const section = searchParams.get('section') || 'know';
		setActiveTab(section);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [searchParams, location]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Replace with API submit if needed
		console.log('Enquiry submitted:', formData);

		// show popup per spec
		setShowPopup(true);
		setTimeout(() => setShowPopup(false), 3000);

		// reset
		setFormData({ name: '', contact: '', query: '' });
	};

	const handleTabChange = (tabId: string) => {
		setActiveTab(tabId);
		const newUrl = new URL(window.location.href);
		newUrl.searchParams.set('section', tabId);
		window.history.pushState({}, '', newUrl.toString());
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Animation helpers
	const tabButtons = [
		{ id: 'know', name: 'Know About Stanford', icon: ClipboardDocumentListIcon },
		{ id: 'process', name: 'Admission Process', icon: ClipboardDocumentListIcon },
		{ id: 'eligibility', name: 'Eligibility & Age Criteria', icon: CheckCircleIcon },
		{ id: 'documents', name: 'Documents Required', icon: DocumentTextIcon },
		{ id: 'fees', name: 'Fee & Payment Details', icon: QuestionMarkCircleIcon },
		{ id: 'contact', name: 'Branches & Contact Info', icon: PhoneIcon },
	];

	return (
		<div className="bg-white">
			{/* Hero */}
			{/* 🟥 Hero Section - Dark Premium Maroon */}
<motion.div
  className="relative bg-[#690B22] pt-32 py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="absolute inset-0 overflow-hidden">
    {/* Deep Maroon Gradient */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#690B22] via-[#7B1113] to-[#8C1B2A] opacity-90"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    />
    {/* Subtle Background Image */}
    <motion.div
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853548-5f6b7590f1e4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    />
  </div>

  {/* Hero Text */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h1
      className="text-4xl font-extrabold tracking-tight text-[#FFF5E5] sm:text-5xl lg:text-6xl mt-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Admissions — Stanford International School
    </motion.h1>

    <motion.p
      className="mt-4 text-xl text-[#F5DEB3] max-w-3xl mx-auto font-medium leading-relaxed"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      Begin your child’s journey towards academic excellence and holistic development.
    </motion.p>
  </div>
</motion.div>


			{/* Sticky Tabs */}
		<motion.div
  className="bg-white shadow-md sticky top-0 z-30 border-b border-[#F5DEB3]"
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.35, type: 'spring', stiffness: 110 }}
>
  <div className="max-w-7xl mx-auto">
    <nav className="flex overflow-x-auto no-scrollbar" aria-label="Sections">
      <div className="flex px-2 sm:px-4 md:px-6 lg:px-8">
        {tabButtons.map((tab, i) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`whitespace-nowrap py-3 sm:py-4 px-3 border-b-2 font-medium text-sm flex items-center gap-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-[#690B22] text-[#690B22] font-semibold bg-[#FFF8ED]'
                  : 'border-transparent text-gray-600 hover:text-[#7B1113] hover:border-[#F5DEB3]'
              }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <Icon
                className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  activeTab === tab.id ? 'text-[#690B22]' : 'text-gray-500'
                }`}
              />
              <span className="truncate">{tab.name}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  </div>
</motion.div>

			{/* Content */}
			<motion.div className="py-12 bg-white" ref={tabContentRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<AnimatePresence mode="wait">
					{activeTab === 'know' && (
  <motion.section
    key="know"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45 }}
    className="space-y-8"
  >
    {/* Section Title */}
    <h2 className="text-3xl font-extrabold text-[#690B22]">
      Know About Stanford
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Text Section */}
      <div className="space-y-4">
        <p className="text-[#4B2E2B]">
          <strong>Institute Name:</strong> Stanford International School, Ujjain — <em>Since 2006</em>.
        </p>

        <p className="text-[#4B2E2B]">
          We offer a comprehensive education from <strong>Nursery to XII</strong>, with a focus on holistic development — academics, sports, arts, and character.
        </p>

        <ul className="list-disc list-inside text-[#4B2E2B] space-y-2">
          <li>
            <strong>Streams:</strong> Science (PCM / PCB), Commerce, Humanities
          </li>
          <li>
            <strong>Vocational & New-Age:</strong> AI, Computer Applications, Physical Education
          </li>
          <li>
            <strong>Specialized Faculty:</strong> Applied Mathematics, AI, PE and more to guide students expertly.
          </li>
        </ul>
      </div>

      {/* Quick Contact Card */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] rounded-lg p-6 shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22] mb-3">Quick Contact</h3>
        <div className="space-y-3 text-[#4B2E2B] text-sm">
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Admission Contact</div>
              <div>8989697401 (Call / WhatsApp)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-5 w-5 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Emails</div>
              <div>principal@stanfordujjain.com</div>
              <div>admissions@stanfordujjain.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Address</div>
              <div>Gram Mindia, Indore Road, Ujjain — 456006</div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-[#690B22]">Social</h4>
            <div className="flex gap-3 mt-2">
              <a href="https://instagram.com/stanford_ujjain" className="text-[#7B1113] underline text-sm hover:text-[#690B22]">
                Instagram
              </a>
              <a href="https://facebook.com/stanfordujjain" className="text-[#7B1113] underline text-sm hover:text-[#690B22]">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pride Section */}
    <div className="bg-[#FFF8ED] rounded-lg shadow p-6 border border-[#F5DEB3]">
      <h3 className="text-xl font-semibold text-[#690B22] mb-2">
        Pride of Stanford
      </h3>
      <p className="text-[#4B2E2B] leading-relaxed">
        <strong>Our Students: Innovators, Leaders, and Community Builders.</strong> At Stanford, students are encouraged to explore, lead, and serve. We celebrate academic toppers, creative achievers and community-minded students — all supported by a culture of care, curiosity and high expectations.
      </p>
      <p className="mt-3 text-[#4B2E2B]">
        Our graduates leave not only with strong academics but also with confidence, compassion, and the skills to make a positive difference.
      </p>
    </div>
  </motion.section>
)}


						{activeTab === 'process' && (
							<motion.section
								key="process"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.45 }}
								className="space-y-8"
							>
								<h2 className="text-3xl font-extrabold text-gray-900">Admission Process</h2>

								<div className="space-y-6">
									{/* Steps */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{[
											{ step: '1', title: 'Know About Stanford', desc: 'Explore programs, age-limits, school timings and campus life.' },
											{ step: '2', title: 'Inquiry', desc: 'Call / WhatsApp 8989697401 or send an email to admissions@stanfordujjain.com.' },
											{ step: '3', title: 'School Tour', desc: 'Schedule a campus visit to experience facilities and meet faculty.' },
											{ step: '4', title: 'Application', desc: 'Submit the filled admission form with required documents and fee.' },
											{ step: '5', title: 'Assessment / Interaction', desc: 'Assessments or interaction sessions may be held depending on grade.' },
											{ step: '6', title: 'Admission Decision & Enrollment', desc: 'Receive decision and complete fee submission to secure seat.' },
										].map((s, idx) => (
											<motion.div key={s.step} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="bg-white p-5 rounded-lg shadow-sm flex gap-4 items-start">
												<div className="h-12 w-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold">{s.step}</div>
												<div>
													<h4 className="font-semibold text-gray-900">{s.title}</h4>
													<p className="text-gray-600 text-sm mt-1">{s.desc}</p>
												</div>
											</motion.div>
										))}
									</div>

									{/* Important: documents list and fee note */}
									<div className="bg-primary-50 p-5 rounded-lg">
										<p className="text-primary-800 font-medium">Important: Have original documents available during verification. Photocopies should be self-attested.</p>
									</div>
								</div>
							</motion.section>
						)}

						{activeTab === 'eligibility' && (
  <motion.section
    key="eligibility"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45 }}
    className="space-y-8"
  >
    <h2 className="text-3xl font-extrabold text-[#690B22]">
      Eligibility & Age Criteria
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Age Criteria Card */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22]">
          Age Criteria (as on 31/03/2025)
        </h3>
        <ul className="mt-4 list-disc list-inside text-[#4B2E2B] space-y-2">
          <li><strong>Nursery:</strong> 3 years completed on 31/03/2025</li>
          <li><strong>KG I:</strong> 4 years completed on 31/03/2025</li>
          <li><strong>KG II:</strong> 5 years completed on 31/03/2025</li>
          <li><strong>Class I:</strong> 6 years completed on 30/03/2025</li>
          <li><strong>Classes II - XII:</strong> Seat availability and performance in entrance/interaction.</li>
        </ul>
      </div>

      {/* School Timings Card */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22]">
          School Timings
        </h3>
        <ul className="mt-4 text-[#4B2E2B] space-y-2">
          <li><strong>Nursery:</strong> 9:15 AM – 12:30 PM</li>
          <li><strong>KG I to V:</strong> 9:15 AM – 2:00 PM</li>
          <li><strong>VI to XII:</strong> 7:30 AM – 2:00 PM</li>
          <li><strong>Office Hours:</strong> 7:30 AM – 4:00 PM</li>
        </ul>
        <p className="mt-3 text-sm text-[#7B1113] italic">
          Please note timings may change occasionally — refer to school circulars for updates.
        </p>
      </div>
    </div>
  </motion.section>
)}

{activeTab === 'documents' && (
  <motion.section
    key="documents"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45 }}
    className="space-y-8"
  >
    <h2 className="text-3xl font-extrabold text-[#690B22]">
      Documents Required
    </h2>

    <div className="bg-[#FFF8ED] shadow-md rounded-lg overflow-hidden border border-[#F5DEB3]">
      <div className="px-6 py-5 bg-gradient-to-r from-[#FDF4E3] to-[#FFF8ED] border-b border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22]">
          Documents to Submit at Time of Admission
        </h3>
      </div>

      <div className="p-6 space-y-4">
        {[
          'Copy of Birth Certificate (registered)',
          '1 latest photo each of Child, Father, Mother',
          'Aadhaar card copy of Child, Father & Mother',
          'SSSMID (Samagra ID) of student and family ID',
          "Student's last year report/progress card",
          'Bank account details (Account number, IFSC)',
          'Transfer Certificate (for Class II onwards)',
          'Passport size photographs (4 copies)',
          'Address proof (Aadhaar/Passport/Electricity bill)',
          'Caste certificate (if applicable)',
        ].map((doc, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 p-3 rounded ${
              idx % 2 === 0 ? 'bg-[#FFFDF8]' : 'bg-[#FDF4E3]'
            }`}
          >
            <CheckCircleIcon className="h-5 w-5 text-[#7B1113] mt-1" />
            <p className="text-[#4B2E2B] text-sm">{doc}</p>
          </div>
        ))}

        <div className="bg-[#FFF4CC] border-l-4 border-[#F5DEB3] p-4 rounded">
          <p className="text-[#690B22] text-sm font-medium">
            ⚠️ Bring originals for verification. Photocopies should be self-attested by parents.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
)}

					{activeTab === 'fees' && (
  <motion.section
    key="fees"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45 }}
    className="space-y-8"
  >
    <h2 className="text-3xl font-extrabold text-[#690B22]">
      Fee & Payment Details
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Payment Modes */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22] mb-3">
          Payment Modes
        </h3>
        <ul className="text-[#4B2E2B] space-y-2">
          <li>1. Cash (at the school office)</li>
          <li>2. Online Payment through UPI (QR code can be added here)</li>
        </ul>
        <p className="mt-4 text-sm text-[#7B1113] italic">
          Please retain payment receipts for future reference.
        </p>
      </div>

      {/* Fee Timeline */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22] mb-3">
          Fee Timeline & Notes
        </h3>
        <ul className="text-[#4B2E2B] space-y-2">
          <li>Admission fee payable at the time of confirmation.</li>
          <li>Monthly tuition fees to be paid by the 10th of each month.</li>
          <li>Late fee will be charged for delayed payments as per school policy.</li>
        </ul>
      </div>
    </div>
  </motion.section>
)}

{activeTab === 'contact' && (
  <motion.section
    key="contact"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.45 }}
    className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {/* Left: Contact Info */}
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-[#690B22]">
        Branches & Contact Info
      </h2>

      {/* Branches */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22] mb-3">Branches</h3>
        <ul className="text-[#4B2E2B] space-y-2">
          <li><strong>Main Branch:</strong> Gram Mindia, Indore Road, Ujjain</li>
          <li><strong>Mangal Colony:</strong> Mangal Colony, Ujjain</li>
          <li><strong>Indira Nagar:</strong> Indira Nagar, Ujjain</li>
          <li><strong>Sanwer Branch:</strong> Near Moti Talkies Chauraha, Indore Road, Sanwer</li>
        </ul>
      </div>

      {/* Contact Details */}
      <div className="bg-gradient-to-br from-[#FFF8ED] to-[#FDF4E3] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
        <h3 className="text-lg font-semibold text-[#690B22] mb-3">Contact Details</h3>
        <div className="space-y-4 text-[#4B2E2B]">
          <div className="flex items-start gap-3">
            <MapPinIcon className="h-6 w-6 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Address</div>
              <div>Gram Mindia, Indore Road, Ujjain — 456006</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PhoneIcon className="h-6 w-6 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Phone / WhatsApp</div>
              <div>8989697401</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <EnvelopeIcon className="h-6 w-6 text-[#7B1113]" />
            <div>
              <div className="font-medium text-[#690B22]">Email</div>
              <div>admissions@stanfordujjain.com</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#690B22] mt-2">Social</h4>
            <div className="flex gap-3 mt-2">
              <a
                href="https://instagram.com/stanford_ujjain"
                className="text-[#7B1113] underline text-sm hover:text-[#690B22]"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/stanfordujjain"
                className="text-[#7B1113] underline text-sm hover:text-[#690B22]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Enquiry Form */}
    <div className="bg-[#FFF8ED] p-6 rounded-lg shadow-md border border-[#F5DEB3]">
      <h3 className="text-xl font-semibold text-[#690B22] mb-4">
        Contact / Enquiry Form
      </h3>
      <p className="text-sm text-[#4B2E2B] mb-4">
        Fields: Your Name, Your Contact Number/Email, Your Query
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#690B22]">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-[#F5DEB3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#690B22] focus:border-[#690B22]"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-[#690B22]">
            Contact Number / Email
          </label>
          <input
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full border border-[#F5DEB3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#690B22] focus:border-[#690B22]"
            placeholder="8989697401 or you@domain.com"
          />
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-[#690B22]">
            Your Query
          </label>
          <textarea
            id="query"
            name="query"
            required
            rows={4}
            value={formData.query}
            onChange={handleChange}
            className="mt-1 block w-full border border-[#F5DEB3] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#690B22] focus:border-[#690B22]"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#690B22] hover:bg-[#7B1113] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5DEB3]"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  </motion.section>
)}
					</AnimatePresence>
				</div>
			</motion.div>

			{/* Popup - small success toast center-bottom */}
			<AnimatePresence>
  {showPopup && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
      className="fixed left-1/2 -translate-x-1/2 bottom-12 z-50"
    >
      <div className="bg-[#FFF8ED] shadow-lg rounded-lg px-6 py-3 border border-[#F5DEB3] flex items-center gap-3">
        <CheckCircleIcon className="h-6 w-6 text-[#690B22]" />
        <div>
          <div className="text-sm font-semibold text-[#690B22]">
            Thank you!
          </div>
          <div className="text-xs text-[#4B2E2B]">
            Our team will get back to you soon.
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

		</div>
	);
};

export default Admissions;
