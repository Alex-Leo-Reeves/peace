import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import MouseStealing from './MouseStealer.jsx';
import VideoSlideshow from './VideoSlideshow.jsx'; 
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import Lovegif from "./assets/GifData/main_temp.gif";
import heartGif from "./assets/GifData/happy.gif";
import sadGif from "./assets/GifData/sad.gif";
import WordMareque from './MarqueeProposal.jsx';
import purposerose from './assets/GifData/RoseCute.gif';
import swalbg from './assets/Lovingbg2_main.jpg';
import loveu from './assets/GifData/cutieSwal4.gif';

//! yes - Gifs Importing
import yesgif0 from "./assets/GifData/Yes/lovecutie0.gif";
import yesgif1 from "./assets/GifData/Yes/love2.gif";
import yesgif2 from "./assets/GifData/Yes/love3.gif";
import yesgif3 from "./assets/GifData/Yes/love1.gif";
import yesgif4 from "./assets/GifData/Yes/lovecutie1.gif";
import yesgif5 from "./assets/GifData/Yes/lovecutie5.gif";
import yesgif6 from "./assets/GifData/Yes/lovecutie7.gif";
import yesgif7 from "./assets/GifData/Yes/lovecutie8.gif";
import yesgif8 from "./assets/GifData/Yes/lovecutie3.gif";
import yesgif9 from "./assets/GifData/Yes/lovecutie9.gif";
import yesgif10 from "./assets/GifData/Yes/lovecutie6.gif";
import yesgif11 from "./assets/GifData/Yes/lovecutie4.gif";
//! no - Gifs Importing
import nogif0 from "./assets/GifData/No/breakRej0.gif";
import nogif0_1 from "./assets/GifData/No/breakRej0_1.gif";
import nogif1 from "./assets/GifData/No/breakRej1.gif";
import nogif2 from "./assets/GifData/No/breakRej2.gif";
import nogif3 from "./assets/GifData/No/breakRej3.gif";
import nogif4 from "./assets/GifData/No/breakRej4.gif";
import nogif5 from "./assets/GifData/No/breakRej5.gif";
import nogif6 from "./assets/GifData/No/breakRej6.gif";
import nogif7 from "./assets/GifData/No/RejectNo.gif";
import nogif8 from "./assets/GifData/No/breakRej7.gif";

//! yes - Music Importing
import yesmusic1 from "./assets/AudioTracks/Love_LoveMeLikeYouDo.mp3";
import yesmusic2 from "./assets/AudioTracks/Love_EDPerfect.mp3";
import yesmusic3 from "./assets/AudioTracks/Love_Nadaaniyan.mp3";
import yesmusic4 from "./assets/AudioTracks/Love_JoTumMereHo.mp3";
//! no - Music Importing
import nomusic1 from "./assets/AudioTracks/Rejection_WeDontTalkAnyMore.mp3";
import nomusic2 from "./assets/AudioTracks/Rejection_LoseYouToLoveMe.mp3";
import nomusic3 from "./assets/AudioTracks/Reject_withoutMe.mp3";
import nomusic4 from "./assets/AudioTracks/Neutral_Base_IHateU.mp3";
import nomusic5 from "./assets/AudioTracks/Reject1_TooGood.mp3";

const YesGifs = [yesgif0, yesgif1, yesgif2, yesgif3, yesgif4, yesgif5, yesgif6, yesgif7, yesgif8, yesgif9, yesgif10, yesgif11];
const NoGifs = [nogif0, nogif0_1, nogif1, nogif2, nogif3, nogif4, nogif5, nogif6, nogif7, nogif8];
const YesMusic = [yesmusic1, yesmusic3, yesmusic4, yesmusic2];
const NoMusic = [nomusic1, nomusic2, nomusic3, nomusic4, nomusic5];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [yespopupShown, setYesPopupShown] = useState(false);
  const [showFinalContent, setShowFinalContent] = useState(false);

  const gifRef = useRef(null);
  const yesButtonSize = noCount * 16 + 16;

  const [floatingGifs, setFloatingGifs] = useState([]);
  const generateRandomPositionWithSpacing = (existingPositions) => {
    let position;
    let tooClose;
    const minDistance = 15;
  
    do {
      position = {
        top: `${Math.random() * 90}vh`,
        left: `${Math.random() * 90}vw`,
      };
  
      tooClose = existingPositions.some((p) => {
        const dx = Math.abs(parseFloat(p.left) - parseFloat(position.left));
        const dy = Math.abs(parseFloat(p.top) - parseFloat(position.top));
        return Math.sqrt(dx * dx + dy * dy) < minDistance;
      });
    } while (tooClose);
  
    return position;
  };
  
  const handleMouseEnterYes = () => {
    const gifs = [];
    const positions = [];
    for (let i = 0; i < 10; i++) {
      const newPosition = generateRandomPositionWithSpacing(positions);
      positions.push(newPosition);
      gifs.push({
        id: `heart-${i}`,
        src: heartGif,
        style: { ...newPosition, animationDuration: `${Math.random() * 2 + 1}s` },
      });
    }
    setFloatingGifs(gifs);
  };
  
  const handleMouseEnterNo = () => {
    const gifs = [];
    const positions = [];
    for (let i = 0; i < 10; i++) {
      const newPosition = generateRandomPositionWithSpacing(positions);
      positions.push(newPosition);
      gifs.push({
        id: `sad-${i}`,
        src: sadGif,
        style: { ...newPosition, animationDuration: `${Math.random() * 2 + 1}s` },
      });
    }
    setFloatingGifs(gifs);
  };
  
  const handleMouseLeave = () => {
    setFloatingGifs([]);
  };

  useEffect(() => {
    if (gifRef.current && yesPressed && noCount > 3) {
      gifRef.current.src = YesGifs[currentGifIndex];
    }
  }, [yesPressed, currentGifIndex, noCount]);

  useEffect(() => {
    if (yesPressed && noCount > 3) {
      const intervalId = setInterval(() => {
        setCurrentGifIndex((prevIndex) => (prevIndex + 1) % YesGifs.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [yesPressed, noCount]);

  useEffect(() => {
    if (gifRef.current) {
      gifRef.current.src = gifRef.current.src;
    }
  }, [noCount]);

  const handleNoClick = () => {
    const nextCount = noCount + 1;
    setNoCount(nextCount);

    if (nextCount >= 4) {
      const nextGifIndex = (nextCount - 4) % NoGifs.length;
      if (gifRef.current) {
        gifRef.current.src = NoGifs[nextGifIndex];
      }
    }

    if (nextCount === 1 || (nextCount - 1) % 7 === 0) {
      const nextSongIndex = Math.floor(nextCount / 7) % NoMusic.length;
      playMusic(NoMusic[nextSongIndex], NoMusic);
    }
  };
  
  const handleYesClick = () => {
    setShowFinalContent(false);
    setYesPressed(true);
    if (noCount > 3) {
      playMusic(YesMusic[0], YesMusic);
    }
  };
  
  const playMusic = (url, musicArray) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(url);
    audio.muted = isMuted;
    setCurrentAudio(audio);
    audio.addEventListener('ended', () => {
      const currentIndex = musicArray.indexOf(url);
      const nextIndex = (currentIndex + 1) % musicArray.length;
      playMusic(musicArray[nextIndex], musicArray);
    });
    audio.play();
  };

  const toggleMute = () => {
    if (currentAudio) {
      currentAudio.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const openLetter = () => {
    setShowFinalContent(false);
    setYesPressed(true);

    if (noCount > 3) {
      setYesPopupShown(false);
      return;
    }

    setPopupShown(false);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
      "Surely not?", "You might regret this!", "Give it another thought!",
      "Are you absolutely certain?", "This could be a mistake!", "Please reconsider? 💕",
      "Don't be so cold!", "Wouldn't you think about it?", "Is that your final answer?",
      "Don't do this to me ;(", "But... why? 😢", "Please, pretty please? 💖",
      "Give me a chance! 😫", "Are you sure you want to say no? 😢",
      "You're gonna hurt my feelings! 😥", "I need you to reconsider, like now! 😓",
      "I believe in us, don't disappoint me! 💔", "My heart hopes you say yes! ❤️",
      "Don't leave me hanging! 😬", "Plsss? :( Don't say no 💔",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Case A: Early Yes Popup
  useEffect(() => {
    if (yesPressed && noCount < 4 && !popupShown) {
      Swal.fire({
        title: "You've completely caught my attention! 🥰💖<br/><br/>I know we just started talking and it’s still early, but I honestly really wanted to see you today—your beauty completely stuns me. 😔<br/><br/>I'm so sorry if I rushed things, my sweet. I didn't fully consider your circumstances or how you were feeling, and I’m truly sorry for that. I just want you to always be happy, every single moment. If you're not okay, I'm not okay either. I was really hoping you could come watch me today, and I'm sorry that you couldn't go where you wanted to go, especially if that's what made you unhappy.<br/><br/>We've hardly talked today and you couldn't answer, which left me really wanting to hear from you. You've been acting a bit like something is wrong, and even though you haven't told me much yet, I really hope you can open up to me. I'm not saying I love you just yet! 😂 But I definitely want to get to know you better and see where this goes, because I think I might be falling for you—especially since you're so slim and sexy, and honestly, you make my heart beat hot and fast. 💓🔥<br/><br/>Also, I'm sorry I don't have your actual pictures yet, so I had to use your videos to do the edit—I just had to do that CapCut of us both! 😂 I would have been so happy to see you today, but I really hope we can meet tomorrow, Monday. Please know that I'll always be here for you, so look my way and talk to me when you're ready. 💛 I hope you're really, really fine, my sweet.<br/><br/>By the way, for making me miss you this much today, just know you're officially owing me a kick when I see you tomorrow! 😂 Calculated and pending. So you better prepare your mind, but don't worry, I'll make it a soft one. 😉 See you tomorrow!",
        showClass: { popup: `animate__animated animate__fadeInUp animate__faster` },
        width: 750,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `rgba(0,0,123,0.2) url(${loveu}) right no-repeat`,
      }).then(() => {
        setPopupShown(true);
        setShowFinalContent(true);
      });
    }
  }, [yesPressed, noCount, popupShown]);
  
  // Case B: Late Yes Popup
  useEffect(() => {
    if (yesPressed && noCount > 3 && !yespopupShown) {
      Swal.fire({
        title: "You truly mean a lot to me!! ❤️ I am genuinely so glad we started talking, and you completely captivate me. Every moment getting to know you is something special, and you honestly make my heart beat hot and fast.</br></br> Will you give me a chance to show you how amazing things can be between us?",
        width: 800,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `rgba(0,0,123,0.7) url(${purposerose}) right no-repeat`,
      }).then(() => {
        setYesPopupShown(true);
        setShowFinalContent(true);
      });
    }
  }, [yesPressed, noCount, yespopupShown]);

  // Case C: Persistence Popup
  useEffect(() => {
    if (noCount === 25) {
      Swal.fire({
        title: "My thoughts are always anchored on you—hoping to bring a smile to your face every single day. 🌟 I’ll wait patiently, proving every day just how much I truly like having you in my life. ❤️ Please press ‘Yes’ and let’s give this a beautiful chance to grow. 🥰✨<br/>'When something is special, you don't give up on them easily.'",
        width: 850,
        padding: "2em",
        color: "#716add",
        background: `#fff url(${swalbg})`,
        backdrop: `rgba(0, 104, 123, 0.7) url(${nogif1}) right no-repeat`,
      });
    }
  }, [noCount]);

  return (
    <>
      {noCount > 16 && noCount < 25 && yesPressed === false && <MouseStealing />}

      <div className={`flex flex-col items-center justify-start pt-12 selection:bg-rose-600 selection:text-white text-zinc-900 min-h-screen overflow-y-auto pb-24`}>
        {showFinalContent ? (
          <div className="flex flex-col items-center w-full max-w-5xl text-center px-4 animate__animated animate__fadeIn">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md backdrop-blur-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
              Your personal love story
            </div>
            <img ref={gifRef} className="h-[200px] rounded-[2rem] shadow-[0_24px_60px_rgba(244,114,182,0.25)] mb-3" src={YesGifs[currentGifIndex]} alt="Yes Response" />
            <div className="text-4xl md:text-6xl font-bold my-2" style={{ fontFamily: "Charm, serif", fontWeight: "700" }}>Thank You !!!</div>
            <div className="text-2xl md:text-3xl font-medium my-1 text-zinc-700" style={{ fontFamily: "Beau Rivage, serif" }}>You make my heart skip a beat.</div>

            <WordMareque />

            <div className="w-full mt-8 bg-gradient-to-br from-white/85 via-white/75 to-rose-50/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-[0_24px_80px_rgba(244,114,182,0.25)] border border-white/70 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-2" style={{ fontFamily: "Charm, serif" }}>Special Moments</h2>
              <p className="text-sm md:text-base text-zinc-600 mb-5 max-w-xl">
                A sweet little gallery of memories, just for you. Tap the arrows, enjoy the videos, and when you're ready, head over to your message.
              </p>
              <div className="w-full flex justify-center">
                <VideoSlideshow />
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  onClick={openLetter}
                  className="px-6 py-3 bg-white/90 hover:bg-white text-zinc-900 font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
                  style={{ fontFamily: "Charm, serif" }}
                >
                  Click here to read
                </button>

                <a
                  href="https://wa.link/oro2m8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-lg rounded-full shadow-[0_12px_30px_rgba(24,24,27,0.25)] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 tracking-wide animate-pulse"
                  style={{ fontFamily: "Charm, serif" }}
                >
                  CLICK HERE PEACE
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center my-auto">
            <img src={lovesvg} className="fixed animate-pulse top-10 md:left-15 left-6 md:w-40 w-28" alt="Love SVG" />
            <img ref={gifRef} className="h-[230px] rounded-lg" src={Lovegif} alt="Love Animation" />
            <h1 className="text-4xl md:text-6xl my-4 text-center px-4">Will you give me a chance?</h1>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <button
                onMouseEnter={handleMouseEnterYes} onMouseLeave={handleMouseLeave}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
                style={{ fontSize: yesButtonSize }} onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                onMouseEnter={handleMouseEnterNo} onMouseLeave={handleMouseLeave} onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
            {floatingGifs.map((gif) => (
              <img key={gif.id} src={gif.src} alt="Floating Animation" className="absolute w-12 h-12 animate-bounce" style={gif.style} />
            ))}
          </div>
        )}
        <button className="fixed bottom-10 right-10 bg-gray-200/80 p-2 mb-2 rounded-full hover:bg-gray-300 backdrop-blur-sm z-50 shadow" onClick={toggleMute}>
          {isMuted ? <BsVolumeMuteFill size={26} /> : <BsVolumeUpFill size={26} />}
        </button>
        <Footer />
      </div>
    </>
  );
}

const Footer = () => {
  return (
    <a className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300 text-xs z-50" href="https://github.com/UjjwalSaini07" target="_blank" rel="noopener noreferrer">
      Made with <span role="img" aria-label="heart">❤️</span> by Micheal
    </a>
  );
};