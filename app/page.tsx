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
        <header className="max-w-xl mx-auto p-6 h-[calc(100dvh-4rem)] bg-background flex justify-center flex-col">
          <h2 className="flex flex-col font-bold text-headingText">
            <span className="tracking-wide text-7xl">HexCal</span>
            <span className="inline-block mt-2 text-3xl leading-none">
              Unleash the Power of Hexadecimals
            </span>
          </h2>
          <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row">
            <Button variant="filled" onClick={handleClick}>
              Try for Free
            </Button>
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
          </div>
        </header>
        {/* Info */}
        <div
          ref={infoRef}
          aria-labelledby="info"
          className="flex flex-col justify-center h-screen p-6 bg-indigo-600 selection:bg-[#f81ce5] selection:font-medium "
        >
          <div className="max-w-xl mx-auto">
            <header className="mb-8">
              <h2
                id="info"
                className="text-3xl font-bold sm:text-4xl text-fuchsia-50"
              >
                Revolutionize Your Hexadecimals
              </h2>
            </header>
            <p className="mb-6 text-lg text-gray-200">
              Say goodbye to tedious and error-prone manual hexadecimal
              conversions.Hex Cal, a progressive web app specifically designed
              for hexadecimal arithmetic, will help you effortlessly perform
              complex calculations and boost your productivity!
            </p>
            <p className="text-lg text-gray-200">
              Whether you’re a developer working with low-level programming, a
              cryptography enthusiast, or just someone in need of a fast and
              reliable hexadecimal calculator, Hex Cal has got your back.
            </p>
          </div>
        </div>
        {/* Get started */}
        <section
          aria-labelledby="getStarted"
          className="flex flex-col justify-center h-screen max-w-xl p-6 mx-auto bg-background"
        >
          <header className="mb-4">
            <h2
              id="getStarted"
              className="text-3xl font-bold sm:text-4xl text-subheadingText"
            >
              Get Started
            </h2>
          </header>
          <p className="mb-4 text-lg text-gray-900">
            Embrace the power of hexadecimal arithmetic today with Hex Cal! Join
            thousands of satisfied users and elevate your hexadecimal game. All
            it takes is one click.
          </p>
          <Button onClick={handleClick} variant="filled">
            Try for Free
          </Button>
        </section>
      </div>
      <div className="browser:hidden">
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
