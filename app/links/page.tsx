"use client";
import { useState } from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

const importantLinks: Links[] = [
  {
    title: "Government of Nepal",
    url: "https://www.gov.np/",
  },
  {
    title: "Nepal Army",
    url: "https://www.nepalarmy.mil.np/",
  },
  {
    title: "INGO in Nepal",
    url: "https://www.ingo.org.np/",
  },
  {
    title: "NGO Federation of Nepal",
    url: "https://ngofederation.org/",
  },
  {
    title: "International Medical Group",
    url: "https://www.internationalmedicalgroup.com/",
  },
  {
    title: "World Bank Nepal",
    url: "https://www.worldbank.org/en/country/nepal",
  },
];

const NoticesPage = () => {
  const [visibleNotices, setVisibleNotices] = useState(10);

  const handleShowMoreClick = () => {
    setVisibleNotices(visibleNotices + 10);
  };
  return (
    <div className="px-10 pb-8">
      <ul className="bg-white pt-4">
        <h2 className="p-6 text-xl font-bold leading-tight text-gray-800 ">
          All Important{" "}
          <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">
            Links
          </span>
        </h2>
        {importantLinks.slice(0, visibleNotices).map((link, idx) => (
          <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
            <li className="mb-4 bg-white py-2 px-6 rounded-sm cursor-pointer text-sky-500 hover:text-sky-700">
              <AiOutlineInfoCircle className="inline-block mr-2 text-sky-500" />
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
      {visibleNotices < importantLinks.length && (
        <button
          className="bg-green-300 hover:bg-green-300 text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mx-auto block"
          onClick={handleShowMoreClick}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default NoticesPage;
