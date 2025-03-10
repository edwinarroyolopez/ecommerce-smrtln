import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color, #333);
  text-align: left;
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--primary-color);
  }

  &:focus + ${StyledLabel} {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: var(--error-color, red);
  font-weight: 500;
  text-align: left;
`;

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;
