"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Button from "./Button";

export default function Home() {
  const infoRef = useRef<HTMLDivElement>(null);
  let installPrompt: any = null;
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;
    });
  }, []);

  async function handleClick() {
    const result = await installPrompt.prompt();
    installPrompt = null;
  }
  return (
    <>
      <div className="standalone:hidden">
        {/* Header */}
        <header className="p-6 h-[calc(100dvh-4rem)] bg-background flex justify-center flex-col">
          <h2 className="text-4xl font-bold text-headingText">
            HexCal: Unleash the Power of Hexadecimals
          </h2>
          <button
            onClick={handleClick}
            className="block w-full py-3 mt-8 mb-4 font-medium bg-blue-600 rounded-md text-gray-50 hover:bg-blue-500 active:bg-blue-600"
          >
            Try for Free
          </button>
          <Button
            variant="outline"
            onClick={() => {
              window.scrollTo({
                top: infoRef.current?.offsetTop,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Learn more
          </Button>
        </header>
        {/* Info */}
        <div
          ref={infoRef}
          aria-labelledby="info"
          className="flex flex-col justify-center h-screen p-6 bg-indigo-600 selection:bg-[#f81ce5] selection:font-medium"
        >
          <header className="mb-8">
            <h2 id="info" className="text-3xl font-bold text-fuchsia-50">
              Revolutionize Your Hexadecimals
            </h2>
          </header>
          <p className="mb-6 text-lg text-gray-200">
            Say goodbye to tedious and error-prone manual hexadecimal
            conversions.Hex Cal, a progressive web app specifically designed for
            hexadecimal arithmetic, will help you effortlessly perform complex
            calculations and boost your productivity!
          </p>
          <p className="text-lg text-gray-200">
            Whether you’re a developer working with low-level programming, a
            cryptography enthusiast, or just someone in need of a fast and
            reliable hexadecimal calculator, Hex Cal has got your back.
          </p>
        </div>
        {/* Get started */}
        <section
          aria-labelledby="getStarted"
          className="flex flex-col justify-center h-screen p-6 bg-white"
        >
          <header className="mb-4">
            <h2
              id="getStarted"
              className="text-3xl font-bold text-subheadingText"
            >
              Get Started
            </h2>
          </header>
          <p className="text-lg text-gray-900">
            Embrace the power of hexadecimal arithmetic today with Hex Cal! Join
            thousands of satisfied users and elevate your hexadecimal game. All
            it takes is one click.
          </p>
          <button
            onClick={handleClick}
            className="block w-full py-3 mt-8 mb-4 font-medium bg-blue-600 rounded-md text-gray-50 hover:bg-blue-500 active:bg-blue-600"
          >
            Try for Free
          </button>
        </section>
      </div>
      <div>
        Quick links
        <ul>
          <li>
            <Link href="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
