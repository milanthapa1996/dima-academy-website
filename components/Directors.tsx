"use client";
import Image from "next/image";
import { useState, MouseEvent } from "react";

interface DirectorObj {
  name: string;
  imgurl: string;
  designation: string;
  opinion: string;
}

const directors: DirectorObj[] = [
  {
    name: "Amir Raj Adhikari",
    imgurl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    designation: "Academic Director",
    opinion:
      "DIMA Academy has been creating a milestone in imparting quality education and training by being successful in making 2400 plus Nepal Army and Police Officers since its establishment. We, therefore, would like to request you(the promising youths of Nepal) to be sincere, hard-working, and helpful in the plan to be successful together.",
  },
  {
    name: "Pradeep Kumar Karki (Rtd. Lt. Col.)",
    imgurl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    designation: "Advisor | IO Consultant",
    opinion:
      "The DIMA Academy has contributed to the Nepali Society and the notion of stopping the brain drain of educated youths to some extent. The highly experienced and dedicated teachers and staff of this academy are always one step ahead in helping the job seekers choose and settle their careers in the defense.",
  },
  {
    name: "Kamala K.C",
    imgurl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    designation: "Co-Founder",
    opinion:
      "DIMA Academy has been creating a milestone in imparting quality education and training by being successful in making 2400 plus Nepal Army and Police Officers since its establishment. We, therefore, would like to request you(the promising youths of Nepal) to be sincere, hard-working, and helpful in the plan to be successful together.",
  },
  {
    name: "Gyan Hari Shrestha (Rtd.Col.)",
    imgurl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    designation: "Advisor | GTO Consultant",
    opinion:
      "It gives me immense pleasure to say a few words regarding DIMA Academy. DIMA Academy is a private pioneer institution to provide in-depth knowledge of the officer cadet selection process in the Nepali Army. I have had the privilege of teaching many interested students about interview techniques and I believe that they have benefited from my teachings. I express my sincere thanks to DIMA for this opportunity and wish for their grand success in the years to come.",
  },
];

const Directors: React.FC = () => {
  // create a funtion to change the director on button click
  const [director, setDirector] = useState<DirectorObj>(directors[0]);

  const changeDirector = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    if (id === "Previous") {
      const index = directors.indexOf(director);
      if (index === 0) {
        setDirector(directors[directors.length - 1]);
      } else {
        setDirector(directors[index - 1]);
      }
    } else if (id === "Next") {
      console.log("next");
      const index = directors.indexOf(director);
      if (index === directors.length - 1) {
        setDirector(directors[0]);
      } else {
        setDirector(directors[index + 1]);
      }
    }
  };
  return (
    <section className=" dark:bg-gray-900  px-4 mt-20">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Meet Our{" "}
          <span className="text-green-700 dark:text-white">Directors</span>{" "}
        </h1>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Hear what our directors have to say about DIMA Academy.
        </p>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center transition-all duration-300">
          <Image
            className="object-cover object-center lg:mr-10 lg:w-1/2  w-full h-1/2 rounded-lg"
            src={director.imgurl}
            height={500}
            width={500}
            alt="Picture of the author"
            quality={100}
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500 ">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              {"NEPAL'S NO. 1 CADET PREPARATION CLASSES"}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-justify">
              “ {director.opinion} ”
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">
              {director.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {director.designation}
            </p>

            <div className="flex items-center justify-center mt-12 lg:justify-start space-x-10">
              <button
                id="Previous"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-50"
                onClick={changeDirector}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                id="Next"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-50"
                onClick={changeDirector}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
