import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  const blogList = [
    {
      title: "GK >> Geography >> Part I : The Universe",
      description:
        "Famous Personalities to contribute in the research of Universe and Geography.",
      image: "/images/geography.png",
      link: "https://nepalinformationhub.com/geography-part-i-the-universe",
      category: "GK/Geography",
    },
    {
      title: "GK >> Economy >> Part I: Economy of the World",
      description:
        "Economy is the wealth and resources of a country or region, especially in terms of the production and consumption of goods and services.",
      image: "/images/economy.png",
      link: "https://nepalinformationhub.com/part-i-economy-of-the-world",
      category: "GK/Economy",
    },
    {
      title:
        "GK >> History >> Part II: History of Nepal, Religion, Language & Culture",
      description:
        "Ramapithecus human remains found in the Butwal region of wertern Nepal make it clear that human settlement in Nepal started more than 10 million years ago.",
      image: "/images/history.png",
      link: "https://nepalinformationhub.com/history-of-nepal-religion-language-culture",
      category: "GK/History",
    },
    {
      title: "GK >> General Issues",
      description:
        "On 25 September 2015, the United Nations has adopted the resolution on “Transforming our world: the 2030 Agenda for Sustainable Development “",
      image: "/images/general_issues.png",
      link: "https://nepalinformationhub.com/general-issues",
      category: "GK/General Issues",
    },
  ];
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mt-2 text-4xl font-bold text-red-700 sm:text-5xl">
          Improve Your Knowledge With Our Free Resources
        </h2>
        <p className="mt-2 text-lg text-green-500">Learn Today, Lead Tommorw</p>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogList.map((blog, index) => (
            <div
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              key={index}
            >
              <div>
              <Link href={blog.link} target="_blank" className="block mt-2">
                <Image
                  className="object-cover w-full h-48"
                  height={100}
                  width={200}
                  src={blog.image}
                  alt="blog image"
                />
                </Link>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {blog.category}
                  </p>
                  <Link href={blog.link} target="_blank" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {blog.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {blog.description}
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

export default BlogSection;
