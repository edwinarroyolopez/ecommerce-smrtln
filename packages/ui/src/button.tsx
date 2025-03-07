import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button className={``} {...props}>
      {children}
    </button>
  );
};

export default Button;
