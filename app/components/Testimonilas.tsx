import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TestimonialsType {
  name: string;
  designation: string;
  imgurl: string;
}

const testimonialsList: TestimonialsType[] = [
  {
    name: "John Doe",
    designation: "CEO",
    imgurl: "https://picsum.photos/id/64/200",
  },
  {
    name: "Jane Doe",
    designation: "COO",
    imgurl: "https://picsum.photos/id/64/200",
  },
  {
    name: "Bob Smith",
    designation: "CTO",
    imgurl: "https://picsum.photos/id/64/200",
  },
  {
    name: "Alice Lee",
    designation: "CFO",
    imgurl: "https://picsum.photos/id/64/200",
  },
];

const Testimonilas = () => {
  return (
    <section className=" dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-green-700 dark:text-white">Testimonials</span>{" "}
          </h1>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-4">
          {testimonialsList.map((member, idx) => (
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-200 lg:border-r dark:bg-gray-800 dark:border-gray-700 shadow-md shadow-green-300 hover:scale-110 duration-500"
              key={idx}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <p className="text-center">
                  I recently got my hands on Flowbite Pro, and holy crap,{" "}
                  {"I'm"} speechless with how easy this was to integrate within
                  my application. Most templates are a pain, code is scattered,
                  and near impossible to theme.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image
                  className="w-9 h-9 rounded-full"
                  src="https://picsum.photos/id/64/200"
                  alt="profile picture"
                  height={20}
                  width={20}
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/testimonials"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonilas;
