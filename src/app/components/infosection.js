import React from 'react';

const InfoSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-10">
                
                {/* Left Section: Why Choose Atom */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="Untitled design (1).png" alt="icon" className="w-12 h-12" />
                        <img src="/books_13445316.png" alt="icon" className="w-12 h-12" />
                    </div>
                    <h3 className="text-indigo-600 text-3xl font-semibold leading-10 mb-4">Why Choose Atom</h3>
                    <ul className="text-black text-xl font-normal list-disc pl-5 space-y-2">
                        <li>Because we're not just about exams; we're about shaping future leaders who'll inspire generations.</li>
                        <li>Our mission is to ignite the flames of aspiration within every IAS aspirant.</li>
                        <li>Mentorship is the compass that guides these flames toward the summit of success.</li>
                        <li>Through curated courses, personalized mentorship, and unwavering commitment, we empower aspirants.</li>
                        <li><span className="font-semibold">Why choose us?</span> Simple. <span className="italic">We're here to turbocharge your dreams.</span></li>
                    </ul>
                    <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                        Learn More &rarr;
                    </a>
                </div>

                {/* Right Section: Atom's Way */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="Untitled design (1).png" alt="icon" className="w-12 h-12" />
                        {/* <img src="/icons/icon4.png" alt="icon" className="w-12 h-12" />
                        <img src="/icons/icon5.png" alt="icon" className="w-12 h-12" /> */}
                    </div>
                    <h3 className="text-indigo-600 text-3xl font-semibold leading-10 mb-4">Atom's Way</h3>
                    <ul className="text-black text-xl font-normal list-disc pl-5 space-y-2">
                        <li><span className="italic">Why do we exist?</span> Simple. To turn your "maybe" into "manifested."</li>
                        <li><span className="italic">Our mission?</span> To ignite the flames of aspiration within every cosmic explorer.</li>
                        <li>Think of us as the backstage pass to cracking the IAS code.</li>
                        <li>We envision a community where knowledge flows freely, doubts find answers, and resilience becomes second nature.</li>
                        <li><span className="italic">AToM's legacy lies in the aspirants we nurture, the leaders we shape, and the positive impact they create.</span></li>
                    </ul>
                    <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                        Discover More &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
