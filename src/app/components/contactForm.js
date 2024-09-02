import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="px-4 lg:px-8 py-12  bg-white">
            <section className="mb-32">
                {/* Section Header */}
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl">
                        <h2 className="mb-12 px-6 text-3xl font-bold">
                            Contact Us
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {/* Contact Form */}
                    <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-indigo-600" htmlFor="nameInput">
                                Name
                            </label>
                            <input
                                type="text"
                                className="px-2 py-2 border w-full outline-none rounded-md"
                                id="nameInput"
                                placeholder="Name"
                            />
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-indigo-600" htmlFor="emailInput">
                                Email
                            </label>
                            <input
                                type="email"
                                className="px-2 py-2 border w-full outline-none rounded-md"
                                id="emailInput"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-indigo-600" htmlFor="messageInput">
                                Message
                            </label>
                            <textarea
                                className="px-2 py-2 border rounded-md w-full outline-none"
                                id="messageInput"
                                placeholder="Your message"
                                rows="4"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500 transition-all"
                        >
                            Send
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                            {/* Telegram */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md  p-4 text-indigo-600">
                                            <Link href='https://t.me/+ADvEJPjg2ThjNjE1' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-10 h-10 text-indigo-600 hover:scale-150 transition-all'>
                                                    <path fill="#4f46e5" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Telegram</p>
                                        <p className="text-neutral-500">@atomiasofficial</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md  p-4 text-indigo-600">
                                            <Link href='mailto:atomiaspro@gmail.com?subject=Your%20Subject&body=Your%20Message'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-10 h-10 text-indigo-600 hover:scale-150 transition-all'>
                                                    <path fill="#4f46e5" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Email</p>
                                        <p className="text-neutral-500">atomiaspro@gmail.com</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                           
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md  p-4 text-indigo-600">
                                            <Link href='https://whatsapp.com/channel/0029VacaP049xVJcgVONTu1' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='flex-shrink-0 w-10 h-10 mx-auto text-indigo-600 hover:scale-150 transition-all'>
                                                    <path fill="currentColor" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">WhatsApp</p>
                                        <p className="text-neutral-500">7736226798</p>
                                        <p className="text-neutral-500">chat@atomias.com</p>
                                    </div>
                                </div>
                            </div>


                            {/* Instagram */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md  p-4 text-indigo-600">
                                            <Link href='https://www.instagram.com/atomiasofficial?igsh=Z2hsczJwempxcWto' target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-10 h-10 text-indigo-600 hover:scale-150 transition-all'>
                                                    <path fill="#4f46e5" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4 .1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Instagram</p>
                                        <p className="text-neutral-500">@atomiasofficial</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* YouTube */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md p-4 text-indigo-600">
                                            <Link href='https://www.youtube.com/@ATOMIASOFFICIAL' target='_blank'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-10 h-10 text-indigo-600 hover:scale-150 transition-all'>
                                                    <path fill="#4f46e5" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">YouTube</p>
                                        <p className="text-neutral-500">ATOMIAS OFFICIAL</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
