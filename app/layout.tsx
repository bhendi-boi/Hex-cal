import { Inter } from "next/font/google";
import Header from "./Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hex Cal",
  description:
    "A calculator specifically designed for doing arithmetic with hex numbers.",
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
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={inter.className}
      >
        <Header />
        <main className="min-h-screen p-6 bg-background">{children}</main>
      </body>
    </html>
  );
}
