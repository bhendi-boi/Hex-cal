import React from "react";
import clsx from "clsx";
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

const Input = ({ className, ...restProps }: InputProps) => {
  return (
    <input
      {...restProps}
      className={clsx(
        "px-6 py-3 rounded-md focus-visible:outline-none drop-shadow-sm text-gray-700",
        true && className
      )}
    />
  );
};

export default Input;
