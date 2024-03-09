import { ButtonHTMLAttributes } from "react";

type ButtonVariants = keyof typeof variantLookup;

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  variant: ButtonVariants;
  icon?: React.ReactNode;
  className?: "Design System decision 💅🏽";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

const baseButton = "border-2 px-4 py-1 rounded disabled:opacity-20";

const variantLookup = {
  primary: "border-datacampGreen bg-datacampGreen font-medium",
  secondary: "flex items-center border-datacampBlue",
};

// Single Responsability
// Atoms
// We create a Button component with multiple variants
// because we need to provide design consistency throughout the project

function Button({
  children,
  variant,
  disabled = false,
  icon,
  ...rest
}: ButtonProps) {
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
