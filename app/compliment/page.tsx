import { Metadata } from "next";
import Form from "./Form";
import InnerHeader from "../InnerHeader";

export const metadata: Metadata = {
  title: "2's Compliment Calculator | Hex Cal",
  description:
    "Understanding and working with binary numbers is a crucial skill, especially in the world of digital computing. Our 2's Complement Calculator is here to simplify the process of finding the two's complement representation of binary numbers. With this powerful tool, you can effortlessly perform two's complement calculations for both positive and negative binary values. Whether you're a computer science enthusiast, a student learning about binary arithmetic, or a professional working in the field of digital systems, our calculator makes the process quick and intuitive.",
  openGraph: {
    title: "2's Compliment Calculator | Hex Cal",
    description:
      "Convert numbers between binary, octal, hexadecimal, and decimal bases with ease",
    type: "website",
    url: "https://hex-cal.vercel.app/compliment",
  },
};

const page = () => {
  return (
    <div className="max-w-xl p-6 mx-auto">
      <InnerHeader title="Compliment" />
      <Form />
    </div>
  );
};

export default page;
