import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Converter | Hex Cal",
  description:
    "Convert numbers between binary, octal, hexadecimal, and decimal bases with ease using our Hex Calculator app. Whether you need to convert a binary representation to hexadecimal, octal to decimal, or any other combination, our tool provides a seamless conversion experience. Simply enter your number in the input field, choose the source base, and select the desired target base. Our Hex Calculator instantly displays the converted result, making it convenient for developers, students, and anyone working with number systems. Simplify your numeric conversions today!",
  openGraph: {
    title: "Converter",
    description:
      "Convert numbers between binary, octal, hexadecimal, and decimal bases with ease",
    type: "website",
    url: "https://hex-cal.vercel.app/converter",
  },
};

const page = () => {
  return (
    <>
      <header className="">
        <h1 className="px-2 text-3xl font-medium text-gray-950">Converter</h1>
      </header>
      <Form />
    </>
  );
};

export default page;
