import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-8 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src="/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" width={36} height={36} />
            Landwind
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 Landwind™. All Rights Reserved. Built with <a href="https://flowbite.com" className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="https://tailwindcss.com" className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
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

export default Footer;
