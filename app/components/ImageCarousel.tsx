"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageObj {
  url: string;
  caption: string;
}

const images: ImageObj[] = [
  {
    url: "https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Image 1",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661883619516-b1475e23885b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJteXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Image 2",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661875576496-01a57a1f13a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJteXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Image 3",
  },
];

const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden h-80 md:h-[100%] rounded-md">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "z-10" : "opacity-0 z-0"
            } transition-opacity duration-1000`}
          >
            <Image
              className="object-cover object-center"
              src={image.url}
              alt={image.caption}
              fill
              quality={100}
            />
            <p className="absolute bottom-0 right-0 bg-gray-100 bg-opacity-30 text-gray-50 px-2 py-2 text-sm w-full backdrop-blur-md font-medium ">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
