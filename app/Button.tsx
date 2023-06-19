import { ReactNode, ComponentProps } from "react";
import clsx from "clsx";
type Props = {
  children: ReactNode;
  variant: "converter" | "calculator" | "outline";
} & ComponentProps<"button">;

const Button = ({ children, variant, ...rest }: Props) => {
  // TODO should make use of variant and change the styles based on variant
  return (
    <button
      {...rest}
      className={clsx(
        (variant === "converter" || variant === "calculator") &&
          "w-full py-3 my-4 font-medium text-white bg-green-500 dark:bg-green-600 rounded-md",
        variant === "outline" &&
          "block w-full py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-gray-100 active:bg-gray-50 bg-gray-50"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
