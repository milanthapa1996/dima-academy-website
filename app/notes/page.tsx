"use client";
import React, { useEffect, useState } from "react";
import LoginBox from "@/components/LoginBox";
import NotesTable from "@/components/NotesTable";
import { db } from "@/firebase/config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

const NotesPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  const getAllNotes = async () => {
    const q = query(collection(db, "notes"), orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setNotes((prev) => [
        ...prev,
        { id: doc.id, name: data.name, fileUrl: data.url },
      ]);
    });
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <div className="min-h-screen">
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
