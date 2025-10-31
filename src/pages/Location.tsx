import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ExclamationCircleIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Location: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          {/* <p className="text-4xl font-bold text-primary-600 sm:text-5xl">Under Construction</p> */}
          <CodeBracketIcon className="mx-auto h-24 w-24 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 text-primary-600 mb-6" aria-hidden="true" />
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">This Page is Under Construction</h1>
              <p className="mt-1 text-base text-gray-500">We're working hard to bring this page live. Please check back later.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <HomeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Go back home
              </Link>
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <ExclamationCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Contact support
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Location;
