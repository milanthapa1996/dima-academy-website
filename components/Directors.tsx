"use client";
import Image from "next/image";
import { useState, MouseEvent, useEffect } from "react";
import { db } from "@/firebase/config";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

interface DirectorObj {
  name: string;
  url: string;
  designation: string;
  statement: string;
}

const Directors: React.FC = () => {
  // create a funtion to change the director on button click
  const [directorsList, setDirectorsList] = useState<DirectorObj[]>([]);
  const [director, setDirector] = useState<DirectorObj>({
    name: "",
    url: "",
    designation: "",
    statement: "",
  });

  const getAllDirectorsList = async () => {
    const q = query(
      collection(db, "directors"),
      orderBy("created_at", "desc"),
      limit(5)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setDirectorsList((prev) => [
        ...prev,
        {
          name: data.name,
          url: data.url,
          designation: data.designation,
          statement: data.statement,
        },
      ]);
      setDirector({
        name: data.name,
        url: data.url,
        designation: data.designation,
        statement: data.statement,
      });
    });
  };

  useEffect(() => {
    getAllDirectorsList();
  }, []);

  const changeDirector = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    if (id === "Previous") {
      const index = directorsList.indexOf(director);
      if (index === 0) {
        setDirector(directorsList[directorsList.length - 1]);
      } else {
        setDirector(directorsList[index - 1]);
      }
    } else if (id === "Next") {
      const index = directorsList.indexOf(director);
      if (index === directorsList.length - 1) {
        setDirector(directorsList[0]);
      } else {
        setDirector(directorsList[index + 1]);
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
            src={director.url}
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
              “ {director.statement} ”
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
