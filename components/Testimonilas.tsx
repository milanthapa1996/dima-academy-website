"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

interface TestimonialsType {
  name: string;
  designation: string;
  url: string;
  statement: string;
}

const Testimonilas = () => {
  const [testimonialsList, setTestimonialsList] = useState<TestimonialsType[]>(
    []
  );

  const getAllTestimonials = async () => {
    const q = query(
      collection(db, "testimonials"),
      orderBy("created_at", "desc"),
      limit(6)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setTestimonialsList((prev) => [
        ...prev,
        {
          name: data.name,
          designation: data.designation,
          url: data.url,
          statement: data.statement,
        },
      ]);
    });
  };

  useEffect(() => {
    getAllTestimonials();
  }, []);

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
                <p className="text-center">{member.statement}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <Image
                  className="w-9 h-9 rounded-full"
                  src={member.url}
                  alt="profile picture"
                  height={20}
                  width={20}
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{member.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {member.designation}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonilas;
