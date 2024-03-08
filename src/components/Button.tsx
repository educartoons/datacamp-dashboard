import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant: ButtonVariant;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantLookup = {
  primary:
    "border-2 border-datacampGreen bg-datacampGreen font-medium text-sm px-4 py-1 rounded disabled:opacity-20",
  secondary:
    "flex items-center border-2 border-datacampBlue py-1 rounded px-4 disabled:opacity-20",
};

function Button({ children, variant, icon, disabled, ...rest }: ButtonProps) {
  return (
    <button className={variantLookup[variant]} disabled={disabled} {...rest}>
      {icon}
      <span className="ml-1 font-medium text-sm">{children}</span>
    </button>
  );
}

export { Button };
