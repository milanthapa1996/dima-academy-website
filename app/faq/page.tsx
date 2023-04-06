import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const page = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">
              Questoins ?
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Get the Information You Need Quickly and Easily with Our FAQ Page
          </p>
        </div>

        <div className="flow-root mt-12 sm:mt-16">
          <div className="divide-y divide-gray--200 -my-9">
            
            {/* <div className="py-9">
              <p className="text-xl font-semibold text-black flex items-center">
                <FaLocationArrow className="text-sm mr-2" />
                How to create an account?
              </p>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p className="mt-3 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
