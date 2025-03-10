import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const StyledButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  color: #1f2937;
  font-size: 18px;
  cursor: pointer;
  margin-left: auto;
  padding: 5px;

  &:hover {
    color: #667383;
  }
`;


const Close = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Close;
