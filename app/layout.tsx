import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hex Cal",
  description:
    "A calculator specifically designed for doing arithmetic with hex numbers.",
  openGraph: {
    title: "Hex cal",
    description:
      "A calculator specifically designed for doing arithmetic with hex numbers.",
    type: "website",
    url: "https://hex-cal.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="apple-icon-180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={clsx(inter.className, "remove-scrolling")}
      >
        <Header />
        <main className="min-h-[calc(100vh-4rem)]  bg-background dark:bg-darkBackground dark:text-darkText text-text">
          {children}
        </main>
      </body>
    </html>
  );
}
