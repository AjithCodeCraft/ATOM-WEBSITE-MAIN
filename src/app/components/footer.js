import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-8 md:p-8 lg:p-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image src="/Atom-logo-2.png" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" width={120} height={120} />
            </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 AToM IAS™. All Rights Reserved. Built with 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
