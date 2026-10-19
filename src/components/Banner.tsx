import { useEffect, useRef } from "react";
import background from "../assets/background.jpg";
import { Logo } from "./Logo";
import { Socials } from "./Socials";

const videoBase = "https://res.cloudinary.com/ivmovies/video/upload/v1541952812/background";

function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

function Chevron() {
  return (
    <svg
      className="mx-2 hidden h-4 w-4 fill-current group-hover:block group-hover:animate-slide-in"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  );
}

export function Banner() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    video.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${background})`,
        }}
      />
      <video
        ref={video}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${videoBase}.webm`} type="video/webm" />
        <source src={`${videoBase}.mp4`} type="video/mp4" />
        <source src={`${videoBase}.ogv`} type="video/ogg" />
      </video>
      <div className="absolute inset-0 flex h-screen flex-col justify-between">
        <div className="flex-1 p-8">
          <Logo className="h-16 w-16 lg:h-24 lg:w-24" />
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-[50rem] text-center font-light">
            <h1 className="text-5xl leading-loose font-thin tracking-extra uppercase">IVmovies</h1>
            <p className="text-lg leading-loose">
              worldwide visual content creator based in belgium
            </p>
            <p className="text-lg leading-loose">outdoor sports • corporate • event • music</p>

            <div className="mt-8 flex justify-center text-sm">
              <button
                type="button"
                className="group mx-4 flex cursor-pointer leading-[1.15] items-center overflow-hidden rounded-full bg-white p-4 font-bold text-second"
                onClick={() => scrollTo("#projects")}
              >
                <span className="mx-2">My work</span>
                <Chevron />
              </button>
              <button
                type="button"
                className="group mx-4 flex cursor-pointer leading-[1.15] items-center overflow-hidden rounded-full border-2 border-white p-4 font-bold text-white hover:border-0 hover:bg-white hover:text-second"
                onClick={() => scrollTo("footer")}
              >
                <span className="mx-2">Contact</span>
                <Chevron />
              </button>
            </div>
          </div>
        </div>

        <div className="-mb-1 flex flex-1 items-end justify-end bg-linear-to-b from-[#111]/0 to-[#111] p-8">
          <Socials />
        </div>
      </div>
    </section>
  );
}
