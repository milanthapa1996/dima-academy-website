"use client";
import { useState } from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const notices: Notice[] = [
  {
    content: "We are excited to announce the launch of our new product!",
    postedDate: "2022-01-01",
  },
  {
    content: "We are excited to announce the launch of our new product!",
    postedDate: "2022-01-01",
  },
  {
    content:
      "Our office will be closed on Monday, February 21st for President's Day.",
    postedDate: "2022-02-10",
  },
  {
    content:
      "Our system will be undergoing maintenance on Saturday, March 5th from 9PM to 1AM.",
    postedDate: "2022-02-28",
  },
  {
    content:
      "Please note that our office will be closed on Friday, April 15th in observance of Good Friday.",
    postedDate: "2022-03-29",
  },
  {
    content:
      "We are pleased to welcome John Smith as our new Marketing Manager!",
    postedDate: "2022-04-10",
  },
  {
    content:
      "Join us for our annual company picnic on Saturday, May 21st at the park!",
    postedDate: "2022-05-01",
  },
  {
    content:
      "In response to the recent surge in COVID-19 cases, we are requiring all employees to wear masks while in the office.",
    postedDate: "2022-06-15",
  },
  {
    content:
      "We want to show our appreciation for our hardworking employees on Friday, July 22nd with a company-wide celebration and BBQ! Please RSVP by July 15th. We hope to see you there!. ",
    postedDate: "2022-07-05",
  },
  {
    content:
      "We are excited to announce our new and improved employee benefit package!",
    postedDate: "2022-08-15",
  },
  {
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc nisl aliquam lorem, eget aliquam nunc nisl eget nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc nisl aliquam lorem, eget aliquam nunc nisl eget nunc lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl eget ultricies tincidunt, nunc nisl aliquam lorem, eget aliquam nunc nisl eget nunc",
    postedDate: "2022-08-30",
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
          All Our{" "}
          <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">
            Notices
          </span>
        </h2>
        {notices.slice(0, visibleNotices).map((notice, idx) => (
          <li
            key={idx}
            className="mb-4 bg-white py-2 px-6 rounded-sm cursor-pointer "
          >
            {" "}
            <p className="mb-2 font-normal text-gray-700">
              <AiOutlineInfoCircle className="inline-block mr-2 text-green-700" />
              {notice.content}
            </p>
            <p className="text-gray-600 text-sm italic px-8 ">
              <BsFillCalendarCheckFill className="inline-block mr-2 text-sky-300" />
              {notice.postedDate}
            </p>
          </li>
        ))}
      </ul>
      {visibleNotices < notices.length && (
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
