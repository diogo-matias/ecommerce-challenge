import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant?: "primary" | "secondary" | "accent";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: ButtonProps) {
  const { children, variant, className, ...otherProps } = props;

  function setStyle() {
    const baseStyle = "px-[8px] py-[10px] rounded-[10px] text-background";
    let customStyle = "bg-primary";

    switch (variant) {
      case "secondary":
        customStyle = "bg-secondary";
        break;
      case "accent":
        customStyle = "bg-gray_scale-50 text-secondary";
        break;
      default:
        break;
    }

    return twMerge([baseStyle, customStyle, className]);
  }

  return (
    <button className={setStyle()} {...otherProps}>
      {children}
    </button>
  );
}
