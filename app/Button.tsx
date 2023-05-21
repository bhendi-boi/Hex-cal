import { ReactNode, ComponentProps } from "react";
import clsx from "clsx";
type Props = {
  children: ReactNode;
  variant: "converter" | "calculator";
} & ComponentProps<"button">;

const Button = ({ children, variant, ...rest }: Props) => {
  // TODO should make use of variant and change the styles based on variant
  return (
    <button
      {...rest}
      className={clsx(
        "w-full py-3 my-4 font-medium text-white bg-green-600 rounded-md"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
