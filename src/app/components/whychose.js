"use client";
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-white text-black">
      <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-20 flex flex-col">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div>
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                Atom's Way
              </h2>
              <p className="mb-5 text-base text-center text-black sm:text-left md:text-lg">
                Why do we exist? <br />
                Simple. To turn your "maybe" into "manifested." <br /><br />
                Our mission? <br />
                To ignite the flames of aspiration within every cosmic explorer. <br /><br />
                Think of us as the backstage pass to cracking the IAS code. We envision a community where knowledge flows freely, doubts find answers, and resilience becomes second nature. <br /><br />
                As we prepare aspirants for the IAS journey, we see a ripple effect - a ripple that extends beyond exams, touching lives, policies, and the very fabric of our nation. <br /><br />
                AToM's legacy lies in the aspirants we nurture, the leaders we shape, and the positive impact they create.
              </p>
            </div>
            <div className="bg-fit h-full py-48 rounded-lg">
              <Image src="/why_choose_1.jpeg" alt="why_choose_1" layout="responsive" width={300} height={300} className="rounded-lg object-cover" />
              </div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                Why Choose Us?
              </h2>
              <p className="mb-5 text-base text-center text-black sm:text-left md:text-lg">
                Because we’re not just about exams; we’re about shaping future leaders who’ll inspire generations. <br /><br />
                At AToM, our mission is to ignite the flames of aspiration within every IAS aspirant. <br /><br />
                We believe that mentorship is the compass that guides these flames toward the summit of success. <br /><br />
                Through curated courses, personalized mentorship, and unwavering commitment, we empower aspirants. <br /><br />
                <span className='font-semibold'>Why choose us?</span> <br />
                Simple. <span className='italic'>We’re here to turbocharge your dreams.</span>
              </p>
            </div>
            <div className="bg-fit h-full py-48 rounded-lg"
              style={{ backgroundImage: "url(/why_choose_3.jpeg)", backgroundSize: "cover", backgroundPosition: "center bottom" }}>
          </div>
          </div>
        </div>
      </section>



     
    </>
  );
};

export default WhyChoose;
