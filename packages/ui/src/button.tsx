import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s;
  background-color: ${(props) =>
    props.variant === "secondary" ? "var(--secondary-color)" : "var(--primary-color)"};
  color: ${(props) =>
    props.variant === "secondary" ? "var(--secondary-text-color)" : "var(--primary-text-color)"};
  border: 2px solid ${(props) =>
    props.variant === "secondary" ? "var(--secondary-border-color)" : "var(--primary-border-color)"};

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
