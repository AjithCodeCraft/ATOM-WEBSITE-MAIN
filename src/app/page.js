import Image from 'next/image';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/contactForm';
import Footer from './components/footer';
import Course from './components/Course';
import WhyChoose from './components/whychose';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'AToMias',
  description: 'Description of your IAS Academy'
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <Header />
      <section className="bg-white dark:bg-gray-900 pt-8 lg:pt-10">
        <div className="max-w-screen-xl px-6 lg:px-12 pt-10 pb-3 mx-auto lg:grid lg:grid-cols-12 lg:py-14 lg:pt-18">
          {/* Left column with text content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8">
            <h1 className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
              Welcome to Atom
            </h1>
            <h2 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-black dark:text-black">
              The Cosmic Hub for IAS Aspirants
            </h2>

            <p className="max-w-2xl mb-4 text-black dark:text-gray-300 text-base font-normal lg:text-lg">
              We&apos;re not your average study buddies. We&apos;re stardust-infused mentors, caffeine-fueled dream weavers, and syllabus navigators.
            </p>

            {/* Buttons container with more spacing */}
            <div className="flex flex-row justify-center lg:justify-start gap-3 mt-4">
              <button className="bg-[#4f46e5] text-white text-xs md:text-base rounded-full py-2 px-4 md:px-8 transition-transform duration-300 border border-[#4f46e5] hover:scale-105 hover:shadow-inner">
                Start for free
              </button>
              <button className="bg-white text-[#4f46e5] text-xs md:text-base rounded-full py-2 px-4 md:px-8 transition-transform duration-300 border border-[#4f46e5] hover:scale-105 hover:bg-[#4f46e5] hover:text-white hover:shadow-inner">
                Connect with us
              </button>
            </div>
          </div>

          {/* Right column with images */}
          <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0 lg:pl-8">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image src="/hero-img.png" alt="Hero image" layout="responsive" width={300} height={300} className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
        <div className="h-8 md:pl-16 pl-2 justify-start items-center gap-4 inline-flex flex-wrap">
          <Link href='#' className="text-black dark:text-white md:text-lg text-xs font-normal font-['Inter'] leading-normal md:pr-6 pr-2 border-r-[1px] border-stone-300 hover:underline">Mains 2025</Link>
          <Link href='#' className="text-black dark:text-white md:text-lg text-xs font-normal font-['Inter'] leading-normal md:pr-6 pr-2 border-r-[1px] border-stone-300 hover:underline">Mains 2024</Link>
          <Link href='#' className="text-black dark:text-white md:text-lg text-xs font-normal font-['Inter'] leading-normal md:pr-6 pr-2 border-r-[1px] border-stone-300 hover:underline">Companionship</Link>
          <Link href='#' className="text-black dark:text-white md:text-lg text-xs font-normal font-['Inter'] leading-normal hover:underline">Question Booklet Creator</Link>
        </div>
      </section>
      <WhyChoose />
      <Course />
      <Contact />
      <Footer />
    </>
  );
}
