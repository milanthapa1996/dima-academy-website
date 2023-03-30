import React from "react";
import Image from "next/image";

export default function GalleryPage() {
  const galleryLists: Gallery[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "The First Image",
      captured_date: "2020-01-12",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Second Image",
      captured_date: "2020-01-12",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Third Image",
      captured_date: "2020-01-12",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1679936167452-18a6119f4006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "The Fourth Image",
      captured_date: "2020-01-12",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1679775912575-cfe09ff563b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Fifth Image",
      captured_date: "2020-01-12",
    },
  ];

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
          {galleryLists.map((image) => (
            <div
              key={image.id}
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
