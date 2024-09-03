"use client";
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-white text-black py-12 md:w-[75%] w-full mx-auto  px-6 lg:px-8 ">
        <div className="flex flex-col w-full">
          <div className="grid items-center grid-cols-1 mb-16 md:grid-cols-2 gap-y-8 md:gap-y-20 gap-x-6 md:gap-x-12 ">
            <div className=''>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                Atom's Way
              </h2>
              <p className="mb-4 text-base text-center text-black sm:text-left md:text-md">
                Why do we exist? <br />
                Simple. To turn your "maybe" into "manifested." <br /><br />
                Our mission? <br />
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
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-20 gap-x-6 md:gap-x-12">
            <div className="order-none md:order-2">
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                Why Choose Us?
              </h2>
              <p className="mb-4 text-base text-center text-black sm:text-left md:text-md">
                Because we’re not just about exams; we’re about shaping future leaders who’ll inspire generations. <br /><br />
                At AToM, our mission is to ignite the flames of aspiration within every IAS aspirant. <br /><br />
                We believe that mentorship is the compass that guides these flames toward the summit of success. <br /><br />
                Through curated courses, personalized mentorship, and unwavering commitment, we empower aspirants. <br /><br />
                <span className='font-semibold'>Why choose us?</span> <br />
                Simple. <span className='italic'>We’re here to turbocharge your dreams.</span>
              </p>
            </div>
            <div className="relative flex justify-center items-center w-full h-[400px] max-w-[400px] mx-auto ml-0">
              <Image
                src="/student3.jpg"
                alt="Hero image"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
