import Image from 'next/image';
import Header from './components/Header';
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
      <main className='flex flex-col gap-0 max-w-screen-xl mx-auto'>
        <Header />
        <section className="bg-white lg:pt-10  px-6 lg:px-12 xl:px-4 pt-10 pb-3  mt-32 lg:mt-5">
          <div className="lg:grid lg:grid-cols-12 lg:py-14 lg:pt-18">
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8">
            <h1 className="text-indigo-600 dark:text-indigo-400 text-5xl font-bold md:text-4xl lg:text-5xl xl:text-6xl mb-3">
            Welcome to Atom
              </h1>
              <h2 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-black dark:text-black">
                The Cosmic Hub for IAS Aspirants
              </h2>

              <p className="max-w-2xl mb-4 text-black dark:text-gray-300 text-base font-normal lg:text-lg">
                We&apos;re not your average study buddies. We&apos;re stardust-infused mentors, caffeine-fueled dream weavers and syllabus navigators.
              </p>

              <div className="flex flex-row justify-center lg:justify-start gap-3 mt-4">
                <a href='#courses' className="bg-[#4f46e5] text-white text-xs md:text-base rounded-full py-2 px-4 md:px-8 transition-transform duration-300 border border-[#4f46e5] hover:scale-105 hover:shadow-inner">
                  Start for free
                </a>
                <a href='#contactus' className="bg-white text-[#4f46e5] text-xs md:text-base rounded-full py-2 px-4 md:px-8 transition-transform duration-300 border border-[#4f46e5] hover:scale-105 hover:bg-[#4f46e5] hover:text-white hover:shadow-inner">
                  Connect with us
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-4 lg:pl-8">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <video
                  src="/Atom-logo-2.mp4"

                  width={350}
                  height={350}
                  className="rounded-lg object-cover"
                  autoPlay
                  loop
                  playsInline
                  style={{ width: "100%", height: "auto" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <WhyChoose />
        <Course />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
