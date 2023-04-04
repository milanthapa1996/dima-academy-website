"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "@/firebase/config";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

export default function GalleryPage() {
  interface ImageObj {
    url: string;
  }

  const [galleryLists, setGalleryLists] = useState<ImageObj[]>([]);
  const getImages = async () => {
    const q = query(
      collection(db, "gallery_images"),
      orderBy("created_at", "desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setGalleryLists((prev) => [...prev, { url: data.url }]);
    });
  };

  useEffect(() => {
    getImages();
  }, []);
  const shimmer = (w: number, h: number) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  return (
    <div>
      <div className="p-8">
        <h2 className="mt-6 text-lg font-bold leading-tight text-gray-800 sm:text-xl lg:text-3xl">
          Moments Frozen in Time:{" "}
          <span className="text-green-700 border-b-8 border-green-700 border-double border-collapse rounded-md">
            An Image Gallery
          </span>
        </h2>
        <p className="mt-4 text-sm lg:text-lg leading-relaxed text-gray-600">
          Journey Through Our Captivating Collection of Photographs and Memories
        </p>
      </div>
      <main className="mx-auto max-w-[1960px] px-8 py-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {galleryLists.map((image, idx) => (
            <div
              key={idx}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                src={image.url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
