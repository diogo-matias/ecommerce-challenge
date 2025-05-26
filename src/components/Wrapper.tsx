import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  const { children, className, ...otherProps } = props;
  const mergedClass = twMerge("container mx-auto px-4 md:px-6", className);

  return (
    <div {...otherProps} className={mergedClass}>
      {children}
    </div>
  );
}
