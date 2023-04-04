"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/firebase/config";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

interface TeamMember {
  name: string;
  designation: string;
  url: string;
}

const Teams: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const getAllTeamMembers = async () => {
    const q = query(
      collection(db, "teams"),
      orderBy("created_at", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setTeamMembers((prev) => [
        ...prev,
        {
          name: data.name,
          designation: data.designation,
          url: data.url,
        },
      ]);
    });
  };

  useEffect(() => {
    getAllTeamMembers();
  }, []);

  return (
    <section className="dark:bg-gray-900 px-4 mt-20">
      <div className="py-8  mx-auto max-w-screen-xl lg:py-16 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Meet Our{" "}
            <span className="text-green-700 dark:text-white">Teams</span>{" "}
          </h1>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Our team is comprised of passionate, dedicated individuals who are
            committed to helping our students succeed.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-5 gap-x-0">
          {teamMembers.map((team, idx) => (
            <div key={idx}>
              <div>
                <Image
                  className="object-cover object-center mx-auto h-24 rounded-full shadow-md shadow-green-400 hover:scale-110 duration-500"
                  src={team.url}
                  alt="team image"
                  width={100}
                  height={50}
                  quality={100}
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">
                  {team.name}
                </p>
                <p className="mt-1 text-sm leading-tight text-gray-600">
                  {team.designation}
                </p>
              </div>

              <div className="hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
