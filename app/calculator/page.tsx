import { Metadata } from "next";
import Form from "./Form";
import InnerHeader from "../InnerHeader";

export const metadata: Metadata = {
  title: "Calculator | Hex Cal",
  description:
    "Perform quick and accurate arithmetic calculations in multiple base systems, including hexadecimal, decimal, binary, and octal, with our versatile calculator tool. From simple addition and subtraction to complex multiplication and division, our calculator supports a wide range of operations across different number bases. Whether you're working with hexadecimal codes, binary representations, or decimal values, our app provides a user-friendly interface and precise results. Simplify your numeric computations in various base systems with our powerful calculator tool today.",
  openGraph: {
    title: "Calculator | Hex Cal",
    description:
      "Perform quick and accurate arithmetic calculations in multiple base systems, including hexadecimal, decimal, binary, and octal, with our versatile calculator tool.",
    type: "website",
    url: "https://hex-cal.vercel.app/calculator",
  },
};

const page = () => {
  return (
    <div className="max-w-xl p-6 pb-16 mx-auto">
      <InnerHeader title="Calculator" />
      <Form />
    </div>
  );
};

export default page;
