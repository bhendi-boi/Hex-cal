import Header from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hex Cal",
  description:
    "A calculator specificaly designed to help with doing arthematic with hex numbers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen p-6 bg-background">{children}</main>
      </body>
    </html>
  );
}
