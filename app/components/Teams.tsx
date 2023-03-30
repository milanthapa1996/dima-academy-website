import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface TeamMember {
  name: string;
  designation: string;
  imgurl: string;
  socialMedia: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    designation: "CEO",
    imgurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Doe",
    designation: "COO",
    imgurl: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    socialMedia: {
      facebook: "https://www.facebook.com/janedoe",
      linkedin: "https://www.linkedin.com/in/janedoe",
    },
  },
  {
    name: "Bob Smith",
    designation: "CTO",
    imgurl: "https://picsum.photos/id/64/200",
    socialMedia: {
      twitter: "https://twitter.com/bobsmith",
      linkedin: "https://www.linkedin.com/in/bobsmith",
      instagram: "https://www.instagram.com/bobsmith",
    },
  },
  {
    name: "Alice Lee",
    designation: "CFO",
    imgurl: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    socialMedia: {
      facebook: "https://www.facebook.com/alicelee",
      linkedin: "https://www.linkedin.com/in/alicelee",
      instagram: "https://www.instagram.com/alicelee",
    },
  },
  {
    name: "Alice Lee",
    designation: "CFO",
    imgurl: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    socialMedia: {
      facebook: "https://www.facebook.com/alicelee",
      linkedin: "https://www.linkedin.com/in/alicelee",
      instagram: "https://www.instagram.com/alicelee",
    },
  },
  {
    name: "Alice Lee",
    designation: "CFO",
    imgurl: "https://picsum.photos/id/64/200",
    socialMedia: {
      facebook: "https://www.facebook.com/alicelee",
      linkedin: "https://www.linkedin.com/in/alicelee",
      instagram: "https://www.instagram.com/alicelee",
    },
  },
  {
    name: "Alice Lee",
    designation: "CFO",
    imgurl: "https://picsum.photos/id/64/200",
    socialMedia: {
      facebook: "https://www.facebook.com/alicelee",
      linkedin: "https://www.linkedin.com/in/alicelee",
      instagram: "https://www.instagram.com/alicelee",
    },
  },
];

const Teams: React.FC = () => {
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
                  src={team.imgurl}
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

      <div className="text-center">
        <Link
          href="/testimonials"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Show more...
        </Link>
      </div>
    </section>
  );
};

export default Teams;
