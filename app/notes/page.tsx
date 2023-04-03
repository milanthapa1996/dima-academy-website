"use client";
import React, { useState } from "react";
import Head from "next/head";
import LoginBox from "@/components/LoginBox";
import NotesTable from "@/components/NotesTable"

const notes = [
  {
    name: "Note 1",
    description: "Lorem ipsum dolor sit amet",
    fileUrl: "https://example.com/note1.pdf",
  },
  {
    name: "Note 2",
    description: "Consectetur adipiscing elit",
    fileUrl: "https://example.com/note2.pdf",
  },
  {
    name: "Note 3",
    description: "Sed do eiusmod tempor incididunt",
    fileUrl: "https://example.com/note3.pdf",
  },
];

const NotesPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Notes - DIMA Academy</title>
        </Head>
        <div className="px-10">
          {loggedIn ? (
            <NotesTable notes={notes} />
          ) : (
            <LoginBox onLogin={handleLogin} />
          )}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
