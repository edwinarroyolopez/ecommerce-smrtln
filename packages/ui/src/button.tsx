import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: all 0.1s ease-in-out;
  background: ${(props) =>
    props.variant === "secondary" ? "transparent" : "var(--primary-color)"};
  color: ${(props) =>
    props.variant === "secondary" ? "var(--primary-color)" : "white"};
  border: 2px solid var(--primary-color);
  outline: none;

  &:hover {
    background: ${(props) =>
      props.variant === "secondary" ? "var(--primary-color)" : "var(--primary-hover)"};
    color: var(--text-color);
  }

  &:active {
    transform: scale(0.98);
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
