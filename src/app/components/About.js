"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';
// import fadeIn from '../utils/motion'
const About = () => {
    const [showMore, setShowMore] = useState(false);

    // Toggle showMore when the component is scrolled into view
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const aboutSection = document.getElementById('about');
            const aboutSectionPosition = aboutSection.offsetTop + aboutSection.offsetHeight;
            if (scrollPosition > aboutSectionPosition) {
                setShowMore(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="about">
            <div className='flex flex-col justify-center items-center xl:gap-0 lg:gap-4 h-full md:mb-0 mb-5'>
                {/* First Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='w-full xl:h-[85vh] h-full flex xl:flex-row flex-col xl:justify-between justify-start items-center relative xl:gap-0 lg:gap-2 gap-5 lg:px-[10rem] sm:px-[7rem] px-4 xl:mt-auto mt-14'
                >
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        className="xl:w-[50%] w-full flex-col justify-center items-start gap-8 inline-flex"
                    >
                        <h1 className="text-indigo-600 2xl:text-6xl xl:text-5xl text-3xl font-semibold leading-18">
                            Atom&apos;s Way
                        </h1>
                        <p className="text-black lg:text-2xl md:text-xl text-base font-normal">
                            <span className='italic'>Why do we exist?</span>
                            <br />
                            Simple. To turn your &quot;maybe&quot; into &quot;manifested.&quot;
                            <br /><br />
                            <span className='italic'>Our mission?</span>
                            <br />
                            To ignite the flames of aspiration within every cosmic explorer.
                            <br /><br />
                            Think of us as the backstage pass to cracking the IAS code. We envision a community where knowledge flows freely, doubts find answers, and resilience becomes second nature.
                            <br />
                        </p>
                        <p className="text-black lg:text-2xl md:text-xl text-base font-normal">
                            As we prepare aspirants for the IAS journey, we see a ripple effect—a ripple that extends beyond exams, touching lives, policies, and the very fabric of our nation.
                            <br /><br />
                            <span className='italic'>
                                AToM&apos;s legacy lies in the aspirants we nurture, the leaders we shape, and the positive impact they create.
                            </span>
                            <br />
                        </p>
                    </motion.div>
                    <motion.div
                        variants={planetVariants('right')}
                        className='flex justify-center items-center xl:w-[50%] w-full'
                    >
                        <img
                            src='/Why_choose_1.jpeg'
                            alt="Atom's Way"  // Fixed the single quote issue
                            className='bg-cover xl:w-96 xl:h-96 md:w-[60%] md:h-[60%] w-full h-full rounded-lg'
                        />
                    </motion.div>
                </motion.div>

                {/* Second Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='w-full xl:h-[85vh] h-full flex xl:flex-row flex-col xl:justify-between justify-start items-center relative xl:gap-0 lg:gap-2 gap-5 lg:px-[10rem] sm:px-[7rem] px-4 xl:mt-auto mt-14'
                >
                    <motion.div
                        variants={planetVariants('left')}
                        className='flex justify-center items-center xl:w-[50%] w-full'
                    >
                        <img
                            src='/Why_choose_3.jpeg'
                            alt="Why Choose Atom"  // Fixed the single quote issue
                            className='bg-fit xl:w-96 xl:h-96 md:w-[60%] md:h-[60%] w-full h-full rounded-lg'
                        />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                        className="xl:w-[50%] w-full flex-col justify-center items-start gap-8 inline-flex"
                    >
                        <h1 className="text-indigo-600 2xl:text-6xl xl:text-5xl text-3xl font-semibold leading-18">
                            Why Choose Atom
                        </h1>
                        <p className="text-black lg:text-2xl md:text-xl text-base font-normal">
                            Because we&apos;re not just about exams; we&apos;re about shaping future leaders who&apos;ll inspire generations.
                            <br /><br />
                            At AToM, our mission is to ignite the flames of aspiration within every IAS aspirant.
                            <br /><br />
                            We believe that mentorship is the compass that guides these flames toward the summit of success.
                            <br /><br />
                            Through curated courses, personalized mentorship, and unwavering commitment, we empower aspirants.
                            <br /><br />
                            <span className='font-semibold'>Why choose us?</span>
                            <br />
                            Simple. <span className='italic'>We&apos;re here to turbocharge your dreams.</span>
                            <br />
                        </p>
                    </motion.div>
                </motion.div>

                {/* Load More Section */}
                {showMore && (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className='w-full h-auto flex flex-col justify-center items-center py-16 bg-gray-100'
                    >
                        <h2 className="text-indigo-600 text-4xl font-semibold">More About Us</h2>
                        <p className="text-black text-xl font-normal mt-4">
                            Here, you can add more content or features that provide additional information or interactive elements.
                            You could include testimonials, detailed services, or any other content that adds value.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default About;
