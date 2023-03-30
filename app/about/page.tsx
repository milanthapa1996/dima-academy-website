import React from "react";
import Head from "next/head";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Head>
          <title>About Us - DIMA Academy</title>
        </Head>
        <div className="py-10 px-4 max-w-7xl mx-auto selection:bg-green-300 selection:text-green-900">
          <p className=" mt-4 text-4xl font-extrabold text-gray-800 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-sky-500">
            {
              "Join us in our pursuit of academic excellence and physical training to become the best in defense and security for Nepal."
            }
          </p>
          {/* objective section */}
          <div className="py-10 bg-gray-50 sm:py-14">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                  Our <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">Objectives</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  What We Strive to Achieve at DIMA Academy
                </p>
              </div>
              <div className="mt-12 ">
                <p className="text-lg text-gray-700">
                  DIMA Is One and Only the Best Institution to produce Globally
                  recognized Defense personnel (cadet) in Nepal. Locating at the
                  heart of Kathmandu we impart academic excellence through
                  Quality education coupled with unprecedented practical and
                  physical training Which, we believe, are the Key factors to
                  establish DIMA as a Brand in Administration and defense world.
                  Besides, Our Qualitative education system is significantly
                  contributing to recruit meritorious and competent youths in
                  the service of nation to stop Brain drain and muscle drain.
                  Likewise, we strive to fulfill the following Academic
                  Objective:
                </p>
                <ul className="list-disc list-inside pl-5 space-y-3 text-slate-600 marker:text-green-700 marker:text-xl">
                  <li>
                    Offer dynamic, formative and interactive teaching-learning
                    environment.
                  </li>
                  <li>Provide skills and technique based education.</li>
                  <li>
                    Provide constructive feedback seasons to promote their
                    self-assessment and confidence.
                  </li>
                  <li>
                    Offer well-qualified and high profile tutors to provide best
                    knowledge.
                  </li>
                  <li>
                    Provide Knowledge about Spiritual, ethical, and moral
                    values.
                  </li>
                  <li>
                    offer motivational and personality development classes to
                    Uphold their self Confidence which is the key of every
                    success.
                  </li>
                  <li>
                    provide Practical, vocational and theoretical knowledge
                    Through Audio -visual mediums.
                  </li>
                  <li>
                    instill in them the insight of duties, responsibilities and
                    professional rights of the security forces of Nepal.
                  </li>
                  <li>
                    to motivate students in a caring and conducive learning
                    environment along with positive leadership qualities to
                    bring out the best in them.
                  </li>
                  <li>
                    to impart creativity and innovativeness in students through
                    motivational approach of personalized nurturing guidance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision section */}
          <div className="py-10 bg-gray-50 sm:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                  Our <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">Vision</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Striving for National and International Recognition in Defense
                  Education and Training.
                </p>
              </div>
              <div className=" mt-12 ">
                <p className="text-lg text-gray-700">
                  Dima Academy aims to be a nationally and internationally
                  reputed learning center recognized for academic excellence in
                  teaching-learning activities in the horizon of defence
                  /security/ Nepal Army. It is constantly striving to set the
                  unbeatable stance in the competitive market to recruit the
                  largest number of personnel in the glorious government body
                  Nepal Army.
                </p>
              </div>
            </div>
          </div>
          {/* core values section */}
          <div className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                  Our <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">Core Values</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  At DIMA Academy, we believe in living out these values every
                  day
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                <div className="transition-all duration-500 bg-white hover:scale-105 rounded-lg shadow-md shadow-green-300">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black mb-1">
                      Social Adaptability
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4 marker:text-green-700">
                      <li>Social Adaptability</li>
                      <li>Sense of Responsibility</li>
                      <li>Co-operation</li>
                      <li>Initiative</li>
                    </ul>
                  </div>
                </div>
                <div className="transition-all duration-500 bg-white hover:scale-105 rounded-lg shadow-md shadow-green-300">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black mb-1">
                      LEARNING & Organizing
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4 marker:text-green-700">
                      <li>Effective Intelligence</li>
                      <li>Reasoning Ability</li>
                      <li>Power Of Expression</li>
                      <li>Organizing Ability</li>
                    </ul>
                  </div>
                </div>
                <div className="transition-all duration-500 bg-white hover:scale-105 rounded-lg shadow-md shadow-green-300">
                  <div className="py-10 px-9">
                    <svg
                      className="w-16 h-16 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black mb-1">
                      Self Confidence
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4 marker:text-green-700">
                      <li>Ability to Influence the Group</li>
                      <li>Speed of making Decision</li>
                      <li>Determination</li>
                      <li>Liveliness</li>
                      <li>Courage</li>
                      <li>Stamina</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
