import { useState, ChangeEvent } from "react";

interface UseFieldProps {
  type: string;
  required?: boolean;
}

interface UseFieldReturn {
  type: string;
  value: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
}

const useField = ({ type, required = false }: UseFieldProps): UseFieldReturn => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required) {
      setError(e.target.value.trim() ? "" : "Este campo es obligatorio");
    }
  };

  const validate = () => {
    if (required && !value.trim()) {
      setError("Este campo es obligatorio");
      return false;
    }
    return true;
  };

  return {
    type,
    value,
    error,
    onChange,
    validate,
  };
};

export default useField;
