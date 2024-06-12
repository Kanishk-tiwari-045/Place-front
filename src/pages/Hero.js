import React, { useState } from 'react';

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-white" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                {!expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
            </nav>

            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
            </div>
          </div>

          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Devs with Employers</h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

              <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input type="email" name="" id="" placeholder="Try Java Developer, React Dev etc." className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Find A Developer</button>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>

                <div className="flex items-center mt-3">
                  <div className="flex">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93527 14.104L3.57511 11.6626C2.63464 10.9794 3.11796 9.49182 4.28045 9.49182H8.4338C8.95368 9.49182 9.41442 9.15706 9.57507 8.66264L10.8586 4.71248Z"
                        fill="#FFE55C"
                      />
                    </svg>

                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93527 14.104L3.57511 11.6626C2.63464 10.9794 3.11796 9.49182 4.28045 9.49182H8.4338C8.95368 9.49182 9.41442 9.15706 9.57507 8.66264L10.8586 4.71248Z"
                        fill="#FFE55C"
                      />
                    </svg>

                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93527 14.104L3.57511 11.6626C2.63464 10.9794 3.11796 9.49182 4.28045 9.49182H8.4338C8.95368 9.49182 9.41442 9.15706 9.57507 8.66264L10.8586 4.71248Z"
                        fill="#FFE55C"
                      />
                    </svg>

                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93527 14.104L3.57511 11.6626C2.63464 10.9794 3.11796 9.49182 4.28045 9.49182H8.4338C8.95368 9.49182 9.41442 9.15706 9.57507 8.66264L10.8586 4.71248Z"
                        fill="#FFE55C"
                      />
                    </svg>

                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93527 14.104L3.57511 11.6626C2.63464 10.9794 3.11796 9.49182 4.28045 9.49182H8.4338C8.95368 9.49182 9.41442 9.15706 9.57507 8.66264L10.8586 4.71248Z"
                        fill="#FFE55C"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-400">4.89/5 (128 reviews)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img className="w-full max-w-xs mx-auto lg:max-w-none" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/illustration.png" alt="" />
              <img className="absolute top-0 right-0 w-48 h-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/card-1.png" alt="" />
              <img className="absolute bottom-0 right-0 w-48 h-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/card-2.png" alt="" />
              <img className="absolute bottom-0 right-0 w-32 h-auto translate-x-16 translate-y-12" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/card-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Why Choose Our Product?</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Discover the unique advantages and benefits that set our product apart from the competition.</p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-8 text-center md:mt-16 sm:grid-cols-2 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.609 0 1.182.184 1.65.5m0 0c.565-.386 1.22-.5 1.85-.5 1.657 0 3 1.79 3 4s-1.343 4-3 4-3-1.79-3-4c0-.327.036-.646.105-.954m0 0A3.47 3.47 0 0112 14c-.61 0-1.183-.184-1.65-.5m0 0c-.565.386-1.22.5-1.85.5-1.657 0-3-1.79-3-4s1.343-4 3-4 3 1.79 3 4c0 .327-.036.646-.105.954m0 0A3.47 3.47 0 0012 10z" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 1</p>
                <p className="mt-4 text-base text-gray-600">Experience unmatched performance and reliability.</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.916V4a2 2 0 10-4 0v1.084A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m8 0a3.001 3.001 0 01-6 0m6 0H9" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 2</p>
                <p className="mt-4 text-base text-gray-600">Stay connected with seamless integration and connectivity.</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 3</p>
                <p className="mt-4 text-base text-gray-600">Unlock new possibilities with advanced features and capabilities.</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 2a8 8 0 100 16V4zM4.93 4.93a10 10 0 010 14.14m14.14-14.14a10 10 0 010 14.14M12 4a10 10 0 000 16" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 4</p>
                <p className="mt-4 text-base text-gray-600">Benefit from our global reach and industry expertise.</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.609 0 1.182.184 1.65.5m0 0c.565-.386 1.22-.5 1.85-.5 1.657 0 3 1.79 3 4s-1.343 4-3 4-3-1.79-3-4c0-.327.036-.646.105-.954m0 0A3.47 3.47 0 0112 14c-.61 0-1.183-.184-1.65-.5m0 0c-.565.386-1.22.5-1.85.5-1.657 0-3-1.79-3-4s1.343-4 3-4 3 1.79 3 4c0 .327-.036.646-.105.954m0 0A3.47 3.47 0 0012 10z" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 5</p>
                <p className="mt-4 text-base text-gray-600">Ensure your success with our dedicated support and service.</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <svg className="flex-shrink-0 w-12 h-12 mx-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 12.707a1 1 0 000-1.414l-1.415-1.414a1 1 0 000-1.414l1.414-1.415a1 1 0 011.414 0l1.415 1.415a1 1 0 001.414 0l1.414-1.414a1 1 0 011.414 0l1.415 1.414a1 1 0 000 1.414L12.707 12l1.414 1.414a1 1 0 000 1.414l-1.414 1.414a1 1 0 000 1.414l1.414 1.415a1 1 0 01-1.414 1.414l-1.415-1.414a1 1 0 00-1.414 0L8.05 18.95a1 1 0 01-1.414 0l-1.415-1.414a1 1 0 000-1.414L4.828 15.95a1 1 0 010-1.414L6.243 12.12a1 1 0 00-.001-1.413z" />
                </svg>
                <p className="mt-6 text-lg font-medium text-black">Benefit 6</p>
                <p className="mt-4 text-base text-gray-600">Optimize your workflow with our innovative solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Experience the Future of Technology Today!</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Join millions of satisfied customers who have transformed their lives with our cutting-edge products.</p>
          </div>

          <div className="max-w-5xl mx-auto mt-8 text-center md:mt-16">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500"
              role="button"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;