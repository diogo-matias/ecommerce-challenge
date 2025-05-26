import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button(
    props: DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
) {
    const { children, ...otherProps } = props;

    return (
        <button
            className="bg-primary px-[8px] py-[10px] rounded-[10px] text-background"
            {...otherProps}
        >
            {children}
        </button>
    );
}
