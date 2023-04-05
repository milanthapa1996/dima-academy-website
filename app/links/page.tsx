"use client";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import { db } from "@/firebase/config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

const NoticesPage = () => {
  const [importantLinks, setImpLinks] = useState<ImpLinks[]>([]);
  const getAllImpLinks = async () => {
    const q = query(collection(db, "links"), orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setImpLinks((prev) => [
        ...prev,
        { id: doc.id, name: data.name, url: data.url },
      ]);
    });
  };
  useEffect(() => {
    getAllImpLinks();
  }, []);
  return (
    <div className="px-10 pb-8">
      <ul className="bg-white pt-4">
        <h2 className="p-6 text-xl font-bold leading-tight text-gray-800 ">
          All Important{" "}
          <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">
            Links
          </span>
        </h2>
        {importantLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mb-4 bg-white py-2 px-6 rounded-sm cursor-pointer text-sky-500 hover:text-sky-700">
              <AiOutlineInfoCircle className="inline-block mr-2 text-sky-500" />
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NoticesPage;
