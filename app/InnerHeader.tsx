import React from "react";

const InnerHeader = ({ title }: { title: string }) => {
  return (
    <header className="">
      <h1 className="text-3xl font-medium text-headingText dark:text-darkHeadingText">
        {title}
      </h1>
    </header>
  );
};

export default InnerHeader;
