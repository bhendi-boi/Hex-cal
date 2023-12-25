import { Metadata } from "next";
import Form from "./Form";
import InnerHeader from "../InnerHeader";

export const metadata: Metadata = {
  title: "Settings | Hex Cal",
  description: `Customize your calculator to your needs.
Set default input and output number systems.
Choose from a variety of other settings like adding prefix, click to copy result to clipboard etc.`,
  openGraph: {
    title: "Settings | Hex Cal",
    description: `Customize your calculator to your needs.
Set default input and output number systems.
Choose from a variety of other settings like adding prefix, click to copy result to clipboard etc.`,
    type: "website",
    url: "https://hex-cal.vercel.app/settings",
  },
};

const page = () => {
  return (
    <div className="max-w-xl p-6 pb-16 mx-auto">
      <InnerHeader title="Settings" />
      <Form />
    </div>
  );
};

export default page;
