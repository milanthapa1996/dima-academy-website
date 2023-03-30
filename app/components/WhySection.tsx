import React from 'react'
import { HiLibrary, HiUserGroup } from 'react-icons/hi'

const WhySection = () => {
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl py-8 px-4 md:py-16">
          <div>
            <h1 className=" mb-16 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Why{' '}
              <span className="text-green-700 dark:text-white">
                DIMA ?
              </span>{' '}
            </h1>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Ranking
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                The first and best Academy in the country of its kind.
              </span>
            </div>
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Enrollment
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Yearly 1000+ students are enrolled for officer cadet preparation
                for Nepalese Army.
              </span>
            </div>
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <HiUserGroup className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Teaching staff
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Instructed by well-experienced lectures, writers and retired
                military officers with important handouts.
              </span>
            </div>
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <HiLibrary className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Academic offering
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Enriched library with sufficient reference books and study
                materials Spacious and hygienic classrooms with limited number
                of students.
              </span>
            </div>
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Extracurricular activities
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Extra devoted to the overall development (i.e. physical, mental
                and academic) of the candidates.
              </span>
            </div>
            <div className='bg-white p-4 shadow-md shadow-green-300 rounded-2xl hover:scale-110 duration-500'>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <svg
                  className="h-5 w-5 text-green-700 dark:text-primary-300 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Operations
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Providing the training in IO/TO/GTO and Board conference by the
                related ex-army officers at our own GTO field.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhySection