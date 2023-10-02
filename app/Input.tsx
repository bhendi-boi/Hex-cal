import React from "react";
import clsx from "clsx";
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

const Input = ({ className, ...restProps }: InputProps) => {
  return (
    <input
      {...restProps}
      className={clsx(
        "px-6 py-3 w-full rounded-md focus-visible:outline-none drop-shadow-sm text-gray-950 bg-gray-50 dark:bg-gray-300  placeholder:text-gray-950 focus-visible:shadow-md",
        true && className
      )}
    />
  );
};

export default Input;
