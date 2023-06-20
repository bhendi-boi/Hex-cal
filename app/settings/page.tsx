import { Metadata } from "next";
import Form from "./Form";
import InnerHeader from "../InnerHeader";

export const metadata: Metadata = {
  title: "Settings | Hex Cal",
  description: "Customize Hex Cal the way you like.",
  openGraph: {
    title: "Settings | Hex Cal",
    description: "Customize Hex Cal the way you like.",
    type: "website",
    url: "https://hex-cal.vercel.app/settings",
  },
};

const page = () => {
  return (
    <div className="max-w-xl p-6 mx-auto">
      <InnerHeader title="Settings" />
      <Form />
    </div>
  );
};

export default page;
