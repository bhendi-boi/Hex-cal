import { ReactNode, ComponentProps } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  variant: "converter" | "calculator" | "filled" | "outline" | "swap";
} & ComponentProps<"button">;

const Button = ({ children, className, variant, ...rest }: Props) => {
  // TODO should make use of variant and change the styles based on variant
  return (
    <button
      {...rest}
      className={twMerge(
        clsx(
          (variant === "converter" || variant === "calculator") &&
            "block w-full py-3 my-8 font-medium text-white bg-gray-950 hover:bg-gray-900 active:bg-gray-950 dark:bg-gray-50 dark:hover:bg-gray-100 dark:active:bg-gray-50 dark:text-headingText rounded-md",
          variant === "outline" &&
            "block w-full py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-gray-100 active:bg-gray-50 bg-gray-50 max-w-xs",
          variant === "filled" &&
            "block w-full py-3 font-medium bg-blue-600 rounded-md text-gray-50 hover:bg-blue-500 active:bg-blue-600 max-w-xs",
          variant === "swap" &&
            "relative p-2  overflow-hidden rounded-full text-center shrink-0 w-10 h-10 inline-flex justify-center items-center hover:bg-gray-200 active:bg-gray-300  text-headingText dark:text-darkHeadingText dark:hover:text-headingText transition-colors "
        ),
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
