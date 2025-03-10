import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.1s ease-in-out;
  background: ${(props) =>
    props.variant === "secondary" ? "transparent" : "var(--primary-color)"};

  color: ${(props) =>
    props.variant === "secondary" ? "var(--primary-color)" : "white"};
  
  border: 1px solid ${(props) =>
    props.variant === "secondary" ? "var(--primary-color)" : "var(--primary-text-color)"};
  
  outline: none;

  &:hover {
    background: ${(props) =>
      props.variant === "secondary" ? "var(--primary-color)" : "var(--primary-text-color)"};
    
    color: ${(props) =>
      props.variant === "secondary" ? "white" : "var(--primary-color)"};
    
    border: 1px solid var(--primary-color);
  }
`;



export const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
