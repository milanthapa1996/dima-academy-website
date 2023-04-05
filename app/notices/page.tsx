"use client";
import { useEffect, useState } from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { db } from "@/firebase/config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

const NoticesPage = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [open, setOpen] = useState(false);
  const [currentNoticeId, setCurrentNoticeId] = useState("");

  const getAllNotices = async () => {
    const q = query(collection(db, "notices"), orderBy("postedDate", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setNotices((prev) => [
        ...prev,
        { id: doc.id, content: data.content, postedDate: data.postedDate },
      ]);
    });
  };
  useEffect(() => {
    getAllNotices();
  }, []);

  return (
    <div className="px-10 pb-8 h-screen relative">
      <ul className={`pt-4`}>
        {notices.map((notice) => (
          <li
            key={notice.id}
            className="mb-4 py-2 px-6 rounded-sm cursor-pointer hover:bg-white"
            onClick={() => {
              setOpen(true);
              setCurrentNoticeId(notice.id);
            }}
          >
            {" "}
            <p className="mb-2 font-normal text-gray-700 line-clamp-1">
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

      {/* open sidebar when click on notice  */}
      <div
        className={`z-10 w-1/4 absolute top-0 right-0 bg-white h-screen ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center px-4 py-4">
            <div></div>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="bg-white px-2 rounded-lg font-medium shadow-lg"
              title="close"
            >
              X
            </button>
          </div>
          <div className="px-4">
            <p className="text-gray-600 text-xs italic">
              <BsFillCalendarCheckFill className="inline-block mr-2 text-sky-300" />
              {
                notices.find((notice) => notice.id === currentNoticeId)
                  ?.postedDate
              }
            </p>
            <p className="text-gray-600 text-xs font-normal mt-4 text-justify indent-2">
              {notices.find((notice) => notice.id === currentNoticeId)?.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesPage;
