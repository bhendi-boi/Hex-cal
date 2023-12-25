import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hex Cal",
  description: `A powerful and versatile calculator for decimal, hexadecimal, octal, and binary number systems.
    Convert numbers easily, find ones and twos complement, and customize the calculator to your needs`,
  metadataBase: new URL("https://hex-cal.vercel.app/"),
  openGraph: {
    title: "Hex cal",
    description: `A powerful and versatile calculator for decimal, hexadecimal, octal, and binary number systems.
    Convert numbers easily, find ones and twos complement, and customize the calculator to your needs`,
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
        <link rel="icon" href="/manifest-icon-192.maskable.png" />
        <link rel="apple-touch-icon" href="apple-icon-180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="google-site-verification"
          content="6c9gocG88EG2X8AXFauiCcylOqRUISBKkSdmh-V62Lg"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={clsx(inter.className)}
      >
        <Header />
        <main className="min-h-[calc(100vh-4rem)]  bg-background dark:bg-darkBackground dark:text-darkText text-text z-50">
          {children}
        </main>
      </body>
    </html>
  );
}
