"use client"
import Link from "next/link";
import { useState } from "react"
import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

const CallToAction = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-green-400/30 rounded-full dark:bg-gray-800 dark:text-white hover:bg-green-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-green-500 px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            {"Test your MCQ's Skill"}
          </span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
          {"NEPAL'S NO. 1 CADET PREPARATION INSTITUTE"}
        </h1>
        <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Ready to join DIMA Academy and become an Army Officer?
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <a
            href="https://www.youtube.com/@dimaacademy4846"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            FOLLOW US ON
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="https://www.facebook.com/DIMAAcademy2000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-5 mb-5 cursor-pointer hover:text-sky-600 dark:hover:text-gray-400 lg:mb-0">
                <BsFacebook className="text-4xl md:text-6xl" />
                <span className="text-lg font-medium">Facebook</span>
              </span>
            </a>
            <a
              href="https://www.youtube.com/@dimaacademy4846"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-5 mb-5 cursor-pointer hover:text-red-600 dark:hover:text-gray-400 lg:mb-0">
                <BsYoutube className="text-4xl md:text-6xl" />
                <span className="text-lg font-medium">Youtube</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/dima_academy_2000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-5 mb-5 cursor-pointer hover:text-pink-600 dark:hover:text-gray-400 lg:mb-0">
                <BsInstagram className="text-4xl md:text-6xl" />
                <span className="text-lg font-medium">Instagram</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
