import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-600">Hello world</h1>
      <Link href="/calculator">calculator</Link>
    </>
  );
}
