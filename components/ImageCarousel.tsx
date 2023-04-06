"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

interface ImageObj {
  url: string;
}

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [images, setImages] = useState<ImageObj[]>([]);

  const getImages = async () => {
    const q = query(
      collection(db, "slider_images"),
      orderBy("created_at", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setImages((prev) => [...prev, { url: data.url }]);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, images]);

  return (
    <div className="relative  h-80 md:h-[100%] rounded-md">
      <div className="flex ">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className={`${
                index === activeIndex ? "z-50" : "opacity-0 z-0"
              } transition-opacity duration-700 absolute`}
              src={image.url}
              alt={"dima-images"}
              fill
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
