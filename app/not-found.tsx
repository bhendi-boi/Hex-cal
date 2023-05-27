import React from "react";
import InnerHeader from "./InnerHeader";

const page = () => {
  return (
    <div>
      <InnerHeader title="Page not found" />
      <p className="px-2 mt-4">Try checking the url you have entered.</p>
    </div>
  );
};

export default page;
