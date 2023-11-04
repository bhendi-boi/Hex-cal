import { Metadata } from "next";
import Form from "./Form";
import InnerHeader from "../InnerHeader";

export const metadata: Metadata = {
  title: "Converter | Hex Cal",
  description: `Converter for 4 number systems (hex, oct, bin, dec)
Convert any number from decimal, hexadecimal, octal, or binary to any other number system.
Quickly and easily convert numbers for programming, math, and other tasks.
Get accurate and consistent results every timeSimplify your numeric conversions today!`,
  openGraph: {
    title: "Converter | Hex Cal",
    description: `Converter for 4 number systems (hex, oct, bin, dec)
Convert any number from decimal, hexadecimal, octal, or binary to any other number system.
Quickly and easily convert numbers for programming, math, and other tasks.
Get accurate and consistent results every timeSimplify your numeric conversions today!`,
    type: "website",
    url: "https://hex-cal.vercel.app/converter",
  },
};

const page = () => {
  return (
    <div className="max-w-xl p-6 pb-16 mx-auto">
      <InnerHeader title="Converter" />
      <Form />
    </div>
  );
};

export default page;
