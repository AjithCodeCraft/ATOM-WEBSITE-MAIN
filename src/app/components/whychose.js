"use client";
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-white text-black py-12 w-full  px-6 lg:px-7 " id='whychooseus'>
        <div className="flex flex-col w-full md:gap-20 gap-8">
          <div className="flex lg:flex-row flex-col w-full items-center justify-between md:gap-3 gap-5">
            <div className=''>
              <h2 className="mb-3 font-bold tracking-tight text-center sm:text-left md:text-left md:leading-tight text-4xl px-6 sm:px-4 md:px-0 md:ml-0 text-indigo-600">
                Atom's Way</h2>
              <p className="mb-4 text-base text-center text-black sm:text-left md:text-md">
              <span className='font-semibold'>Why do we exist? </span> <br />
                Simple. To turn your "maybe" into "manifested."<br/> <br/>
                <span className='font-semibold'>Our mission?</span> <br />
                To ignite the flames of aspiration within every cosmic explorer. <br /><br />
                Think of us as the backstage pass to cracking the IAS code. We envision a community where knowledge flows freely, doubts find answers, and resilience becomes second nature. <br /><br />
                As we prepare aspirants for the IAS journey, we see a ripple effect - a ripple that extends beyond exams, touching lives, policies, and the very fabric of our nation. <br /><br />
                AToM's legacy lies in the aspirants we nurture, the leaders we shape, and the positive impact they create.
              </p>
            </div>
            <div className="relative flex justify-center items-center w-full h-[400px] max-w-[400px] mx-auto">
              <Image
                src="/student4.png"
                alt="Hero image"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col-reverse w-full items-center justify-between md:gap-3 gap-5">
            <div className="relative flex justify-center items-center w-full h-[400px] max-w-[400px] mx-auto">
              <Image
                src="/student3.jpg"
                alt="Hero image"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="">
              <h2 className="mb-3 font-bold tracking-tight text-center md:leading-tight sm:text-left text-4xl  lg:px-6 px-0  text-indigo-600">
                Why Choose Us?
              </h2>
              <p className="mb-4 lg:px-6 px-0 text-base text-center text-black sm:text-left md:text-md">
                Because we’re not just about exams; we’re about shaping future leaders who’ll inspire generations. <br /><br />
                At AToM, our mission is to ignite the flames of aspiration within every IAS aspirant. <br /><br />
                We believe that mentorship is the compass that guides these flames toward the summit of success. <br /><br />
                Through curated courses, personalized mentorship, and unwavering commitment, we empower aspirants. <br /><br />
                <span className='font-semibold'>Why choose us?</span> <br />
                Simple. <span className='italic'>We’re here to turbocharge your dreams.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
