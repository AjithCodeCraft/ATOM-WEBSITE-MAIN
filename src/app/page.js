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
        {/* <link rel="icon" href="/Atom-logo-only.png" type="image/png" /> */}
        <title>{metadata.title}</title>
      </Head>
      {/* <Header /> */}
      <section className="bg-white dark:bg-gray-900 pt-10 lg:pt-12">
        <div className="max-w-screen-xl px-8 lg:px-16 pt-12 pb-4 mx-auto lg:grid lg:grid-cols-12 lg:py-16 lg:pt-22">
          {/* Left column with text content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-10">
            <h1 className="text-indigo-600 dark:text-indigo-400 text-3xl font-extrabold md:text-4xl lg:text-5xl xl:text-6xl">
              Welcome to Atom
            </h1>
            <h2 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl dark:text-white">
              The Cosmic Hub for IAS Aspirants
            </h2>
            <p className="max-w-2xl mb-6 text-black dark:text-gray-300 text-lg font-normal lg:text-xl">
              We&apos;re not your average study buddies. We&apos;re stardust-infused mentors, caffeine-fueled dream weavers, and syllabus navigators.
            </p>

            {/* Buttons container with more spacing */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 mt-6">
              <button className="bg-[#4f46e5] text-white text-sm md:text-lg rounded-full py-3 px-6 md:px-10 transition-transform duration-300 border border-[#4f46e5] hover:scale-110 hover:shadow-inner">
                Start for free
              </button>
              <button className="bg-white text-[#4f46e5] text-sm md:text-lg rounded-full py-3 px-6 md:px-10 transition-transform duration-300 border border-[#4f46e5] hover:scale-110 hover:bg-[#4f46e5] hover:text-white hover:shadow-inner">
                Connect with us
              </button>
            </div>
          </div>

          {/* Right column with images */}
          <div className="lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0 lg:pl-10">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image src="/hero-img.png" alt="Hero image" layout="responsive" width={300} height={300} className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
        <div className="h-10 md:pl-6 pl-2 justify-start items-center gap-5 inline-flex flex-wrap">
          <Link href='#' className="text-black dark:text-white md:text-sm text-xs font-normal font-['Inter'] leading-normal md:pr-8 pr-2 border-r-[1px] border-stone-300 hover:underline">Mains <br />2025</Link>
          <Link href='#' className="text-black dark:text-white md:text-sm text-xs font-normal font-['Inter'] leading-normal md:pr-8 pr-2 border-r-[1px] border-stone-300 hover:underline">Mains <br />2024</Link>
          <Link href='#' className="text-black dark:text-white md:text-sm text-xs font-normal font-['Inter'] leading-normal md:pr-8 pr-2 border-r-[1px] border-stone-300 hover:underline">Companionship</Link>
          <Link href='#' className="text-black dark:text-white md:text-sm text-xs font-normal font-['Inter'] leading-normal hover:underline">Question Booklet Creator</Link>
        </div>
      </section>
      {/* <About /> */}
      <WhyChoose />
      {/* <InfoSection /> */}
      <Course />
      <Contact />
      {/* <Scroll /> */}
      <Footer />
    </>
  );
}
