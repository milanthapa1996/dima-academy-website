"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase/config";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

const NoticeBoard: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("notices");

  const [notices, setNotices] = useState<Notice[]>([]);
  const [importantLinks, setImportantLinks] = useState<ImpLinks[]>([]);

  const getAllNotices = async () => {
    const q = query(
      collection(db, "notices"),
      orderBy("postedDate", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setNotices((prev) => [
        ...prev,
        { content: data.content, postedDate: data.postedDate },
      ]);
    });
  };

  const getAllLinks = async () => {
    const q = query(
      collection(db, "links"),
      orderBy("created_at", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setImportantLinks((prev) => [
        ...prev,
        { name: data.name, url: data.url },
      ]);
    });
  };

  useEffect(() => {
    getAllNotices();
    getAllLinks();
  }, []);

  const handleAllLinks = () => {
    router.push(activeTab);
  };

  return (
    <>
      <div className="w-full px-4 pb-4 sticky top-0 z-10 bg-white flex  items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <div>
            <button
              className={`w-full py-2 font-medium text-left text-lg ${
                activeTab === "notices" ? "text-gray-800" : "text-gray-400 "
              }`}
              onClick={() => setActiveTab("notices")}
            >
              Notices
            </button>
          </div>
          <div>/</div>
          <div>
            <button
              className={`w-full py-2 font-medium text-left text-lg ${
                activeTab === "links" ? "text-gray-800" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("links")}
            >
              Links
            </button>
          </div>
        </div>
        <div className="text-xs bg-green-500/50 text-green-700 py-1 px-2 rounded-lg">
          <button onClick={handleAllLinks}>View all</button>
        </div>
      </div>
      <ul
        role="list"
        className="bg-white h-60 lg:h-[350px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-w-2 cursor-pointer p-4"
      >
        {activeTab === "notices" &&
          notices.map((notice, index) => (
            <Link href={"wwww.google.com"} key={index}>
              <li className="flex group/item bg-white hover:bg-slate-100 p-4 rounded-xl">
                <div className="flex flex-col w-[80%] space-y-1">
                  <span className="text-sm font-bold text-gray-700 line-clamp-1 space-x-8">
                    {notice.content}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {notice.postedDate}
                  </span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <div className="flex items-center justify-center bg-gray-200 rounded-full py-1 w-14 group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                    <span className="text-xs group-hover/edit:text-gray-700">
                      view
                    </span>
                    <svg
                      className="h-4 w-4 -rotate-90 group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </Link>
          ))}

        {/* Important links tab */}
        {activeTab === "links" &&
          importantLinks.map((link, index) => (
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <li className="flex group/item hover:bg-slate-100 p-4 rounded-xl">
                <div className="flex flex-col w-[80%]">
                  <span className="text-sm font-bold text-gray-700 line-clamp-1">
                    {link.name}
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1">
                    {link.url}
                  </span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <div className="flex items-center justify-center bg-gray-200 rounded-full py-1 w-14 group/edit invisible hover:bg-slate-200 group-hover/item:visible">
                    <span className="text-xs group-hover/edit:text-gray-700">
                      visit
                    </span>
                    <svg
                      className="h-4 w-4 -rotate-90 group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default NoticeBoard;
