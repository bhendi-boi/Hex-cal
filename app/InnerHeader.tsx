import React from "react";

const InnerHeader = ({ title }: { title: string }) => {
  return (
    <header className="">
      <h1 className="px-2 text-3xl font-medium text-gray-950">{title}</h1>
    </header>
  );
};

export default InnerHeader;
