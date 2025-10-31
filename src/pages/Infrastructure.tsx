import React, { useState } from 'react';
import { 
  BuildingLibraryIcon, 
  ComputerDesktopIcon, 
  BeakerIcon, 
  BookOpenIcon, 
  MusicalNoteIcon, 
  TrophyIcon, 
  WifiIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  SunIcon, 
  CloudArrowUpIcon 
} from '@heroicons/react/24/outline';

const Infrastructure: React.FC = () => {
  const [activeTab, setActiveTab] = useState('classrooms');

  const facilities = [
    {
      id: 'classrooms',
      title: 'Smart Classrooms',
      icon: <ComputerDesktopIcon className="h-8 w-8 text-primary-600" />,
      description: 'Our air-conditioned smart classrooms are equipped with interactive whiteboards, projectors, and audio-visual aids to enhance the learning experience.',
      features: [
        'Interactive whiteboards in every classroom',
        'Audio-visual teaching aids',
        'Comfortable and ergonomic furniture',
        'Ample natural light and ventilation',
        'Digital content integration'
      ],
      images: [
        'https://images.unsplash.com/photo-1588072432836-e100327743db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'library',
      title: 'Library & Resource Center',
      icon: <BuildingLibraryIcon className="h-8 w-8 text-primary-600" />,
      description: 'Our well-stocked library offers a vast collection of books, periodicals, and digital resources to support academic and recreational reading.',
      features: [
        'Over 25,000 books and reference materials',
        'Digital library with e-books and online journals',
        'Reading rooms for quiet study',
        'Computerized catalog system',
        'Newspaper and magazine section'
      ],
      images: [
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'labs',
      title: 'Science & Computer Labs',
      icon: <BeakerIcon className="h-8 w-8 text-primary-600" />,
      description: 'State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science with modern equipment and safety measures.',
      features: [
        'Fully equipped Physics, Chemistry, and Biology labs',
        'Computer labs with latest hardware and software',
        'Robotics and electronics lab',
        '3D printing and design lab',
        'Internet and Wi-Fi enabled workstations'
      ],
      images: [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588072432836-e100327743db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588072432836-e100327743db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'sports',
      title: 'Sports Facilities',
      icon: <TrophyIcon className="h-8 w-8 text-primary-600" />,
      description: 'Comprehensive sports infrastructure to encourage physical fitness and sportsmanship among students.',
      features: [
        'Olympic-size swimming pool',
        'Indoor sports complex (badminton, table tennis, chess)',
        'Basketball, volleyball, and tennis courts',
        'Athletics track and field',
        'Cricket nets and football ground'
      ],
      images: [
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'performing-arts',
      title: 'Performing Arts',
      icon: <MusicalNoteIcon className="h-8 w-8 text-primary-600" />,
      description: 'Dedicated spaces for music, dance, drama, and other performing arts to nurture creativity and talent.',
      features: [
        'Music rooms with various instruments',
        'Dance studio with wooden flooring',
        'Auditorium with professional sound and lighting',
        'Art and craft studios',
        'Pottery and sculpture workshop'
      ],
      images: [
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'campus',
      title: 'Campus Facilities',
      icon: <BuildingLibraryIcon className="h-8 w-8 text-primary-600" />,
      description: 'A safe, green, and technologically advanced campus designed to provide a conducive learning environment.',
      features: [
        'Wi-Fi enabled campus',
        'CCTV surveillance and security',
        'Medical room with trained nurse',
        'Cafeteria serving nutritious meals',
        'Ample parking and pick-up/drop-off zones'
      ],
      images: [
        'https://images.unsplash.com/photo-1562774053-701939b5854d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562774053-701939b5854d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562774053-701939b5854d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  const activeFacility = facilities.find(facility => facility.id === activeTab) || facilities[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === activeFacility.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? activeFacility.images.length - 1 : prevIndex - 1
    );
  };

  return (
  <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-primary-700 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939b5854d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Infrastructure
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
              World-class facilities designed to inspire learning, creativity, and holistic development
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto pb-1">
              <nav className="flex space-x-8" aria-label="Infrastructure">
                {facilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => {
                      setActiveTab(facility.id);
                      setCurrentImageIndex(0);
                    }}
                    className={`${activeTab === facility.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                  >
                    <span className="mr-2">{facility.icon}</span>
                    {facility.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Facility Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={activeFacility.images[currentImageIndex]}
                  alt={activeFacility.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {activeFacility.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-24 rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-primary-500' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`${activeFacility.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Facility Information */}
            <div className="mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900">{activeFacility.title}</h2>
              <p className="mt-4 text-lg text-gray-600">{activeFacility.description}</p>
              
              <h3 className="mt-8 text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {activeFacility.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Campus Highlights
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Our campus is designed to provide a safe, stimulating, and sustainable learning environment
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'Eco-Friendly Campus',
                  description: 'Solar panels, rainwater harvesting, and waste management systems',
                  icon: <SunIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Safety First',
                  description: '24/7 CCTV surveillance and trained security personnel',
                  icon: <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Digital Infrastructure',
                  description: 'High-speed Wi-Fi and smart classroom technology',
                  icon: <WifiIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Community Spaces',
                  description: 'Amphitheaters and gathering spaces for events and activities',
                  icon: <UserGroupIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Learning Resources',
                  description: 'Extensive digital and physical learning materials',
                  icon: <BookOpenIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Sports Complex',
                  description: 'State-of-the-art indoor and outdoor sports facilities',
                  icon: <TrophyIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Performing Arts',
                  description: 'Dedicated spaces for music, dance, and drama',
                  icon: <MusicalNoteIcon className="h-8 w-8 text-primary-600" />
                },
                {
                  name: 'Technology Integration',
                  description: 'Smart classrooms and digital learning platforms',
                  icon: <CloudArrowUpIcon className="h-8 w-8 text-primary-600" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-md bg-primary-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Virtual Tour */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Take a Virtual Tour
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Explore our campus from the comfort of your home
              </p>
            </div>

            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
                    <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Virtual Tour Coming Soon</h3>
                  <p className="mt-2 text-gray-600">Our interactive virtual tour is under development. Check back soon!</p>
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Schedule a Physical Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Infrastructure;

