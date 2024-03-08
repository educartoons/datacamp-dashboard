import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  variant: ButtonVariants;
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseButton = "border-2 px-4 py-1 rounded disabled:opacity-20";

const variantLookup = {
  primary: "border-datacampGreen bg-datacampGreen font-medium",
  secondary: "flex items-center border-datacampBlue",
};

// Single Responsability
// Atoms

function Button({ children, variant, disabled, icon, ...rest }: ButtonProps) {
  return (
    <button
      className={`${baseButton} + ${variantLookup[variant]}`}
      disabled={disabled}
      {...rest}
    >
      {icon}
      <span className="ml-1 font-medium text-sm">{children}</span>
    </button>
  );
}

export { Button };
