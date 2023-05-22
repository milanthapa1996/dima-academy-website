import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuizSection = () => {
  const quizList = [
    {
      title: "GK >> Geography >> Beginner Level",
      image: "/images/geography_beginner.png",
      link: "https://nepalinformationhub.com/quizzes/geography-beginner-level-quiz",
      category: "GK/Geography",
    },
    {
      title: "GK >> Geography >> Advanced Level",
      image: "/images/geography_advanced.png",
      link: "https://nepalinformationhub.com/quizzes/geography-advanced-level-quizpart-i",
      category: "GK/Geography",
    },
    {
      title: "GK >> Geography >> Legend Level",
      image: "/images/geography_legend.png",
      link: "https://nepalinformationhub.com/quizzes/geography-legend-quizpart-1",
      category: "GK/Geography",
    },
    {
      title: "GK >> History >> Beginner Level",
      image: "/images/history_beginner.png",
      link: "https://nepalinformationhub.com/quizzes/history-culture-and-social-system-beginners-level-quiz",
      category: "GK/General Issues",
    },
  ];
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mt-2 text-4xl font-bold text-sky-700 sm:text-5xl">
          Test Your MCQ's Skill With Free Quizzes.
        </h2>
        <p className="mt-2 text-lg text-green-500">Learn Today, Lead Tommorw</p>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {quizList.map((quiz, index) => (
            <div
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              key={index}
            >
              <div>
                <Link href={quiz.link} target="_blank" className="block mt-2">
                  <Image
                    className="object-cover w-full h-36"
                    height={100}
                    width={200}
                    src={quiz.image}
                    alt="quiz image"
                    quality={100}
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {quiz.category}
                  </p>
                  <Link href={quiz.link} target="_blank" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {quiz.title}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
