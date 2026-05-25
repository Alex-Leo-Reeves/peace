import React, { useState, useRef, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsDownload } from "react-icons/bs";

const slideshowData = [
  { src: "/1.mp4", title: "You are absolutely beautiful ✨" },
  { src: "/2.mp4", title: "Your smile completely brightens my day 💕" },
  { src: "/3.mp4", title: "Genuinely so glad we started talking 🌟" },
  { src: "/4.mp4", title: "You perfectly captivate my attention 🥰" },
  { src: "/5.mp4", title: "Everything is better when you're around ❤️" },
];

export default function VideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Auto-play prevented, waiting for user interaction:", err);
      });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideshowData.length) % slideshowData.length);
  };

  const handleVideoEnded = () => {
    handleNext(); 
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-4">
      <div className="text-center mb-3">
        <h3 
          className="text-xl md:text-2xl font-semibold text-zinc-800 transition-all duration-500"
          style={{ fontFamily: "Charm, serif" }}
        >
          {slideshowData[currentIndex].title}
        </h3>
      </div>

      <div className="relative group bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] max-h-[60vh] mx-auto">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onEnded={handleVideoEnded}
          controls
          playsInline
          autoPlay
          muted
          preload="auto"
        >
          <source src={slideshowData[currentIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <BsChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <BsChevronRight size={24} />
        </button>

        <a
          href={slideshowData[currentIndex].src}
          download={`Peace_Video_${currentIndex + 1}.mp4`}
          className="absolute bottom-16 right-4 bg-white/80 hover:bg-white text-zinc-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all transform hover:scale-110 flex items-center justify-center z-10"
          title="Download this video"
        >
          <BsDownload size={20} />
        </a>
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {slideshowData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-zinc-800" : "w-2 bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}