import React from 'react';
import Image from 'next/image';

const footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-black">
            <Image src="/Atom-logo-2.png" className="h-9 mr-9 sm:h-9" width={70} height={70}/> ATOM IAS
          </a>
          <span className="block text-sm text-center text-black">
            © 2021-2022 ATOM IAS™. All Rights Reserved. 
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                {/* Add your SVG icon here */}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                {/* Add your SVG icon here */}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                {/* Add your SVG icon here */}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                {/* Add your SVG icon here */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;